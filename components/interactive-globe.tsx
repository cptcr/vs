"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Sphere, Html } from "@react-three/drei";
import * as THREE from "three";
import { TextureLoader } from "three";
import React from "react"; // Explicit import for Suspense

// --- Constants ---
const GLOBE_RADIUS = 5;
const BRAND_BLUE = "#3b82f6"; // Tailwind blue-500
const BRAND_BLUE_GLOW = "#60a5fa"; // Tailwind blue-400

// --- Locations Data ---
const LOCATIONS = [
  { name: "US (Ashburn)", lat: 40.7128, lon: -74.006 },
  { name: "DE (Frankfurt)", lat: 50.1109, lon: 8.6821 },
  { name: "FI (Helsinki)", lat: 60.1699, lon: 24.9384 },
  { name: "SG (Singapore)", lat: 1.3521, lon: 103.8198 },
];

// --- Helpers ---

/**
 * Converts Lat/Lon/Altitude to 3D Cartesian Vector (X, Y, Z)
 */
function latLonToVector3(lat: number, lon: number, altitude = 0): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const r = GLOBE_RADIUS + altitude;

  const x = -r * Math.sin(phi) * Math.cos(theta);
  const z = r * Math.sin(phi) * Math.sin(theta);
  const y = r * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

/**
 * Creates a curved 3D path between two vectors moving outward from center
 */
function getCurve(p1: THREE.Vector3, p2: THREE.Vector3) {
  const mid = p1.clone().lerp(p2, 0.5);
  const distance = p1.distanceTo(p2);
  mid.normalize().multiplyScalar(GLOBE_RADIUS + distance * 0.3);

  const curve = new THREE.CubicBezierCurve3(
    p1,
    p1.clone().lerp(mid, 0.5),
    mid.clone().lerp(p2, 0.5),
    p2
  );
  return curve;
}

// --- Sub-Components ---

function LocationMarker({ lat, lon, name }: { lat: number; lon: number; name: string }) {
  const position = useMemo(() => latLonToVector3(lat, lon, 0.02), [lat, lon]);
  const [hovered, setHovered] = useState(false);

  return (
    <group position={position}>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color={hovered ? "white" : BRAND_BLUE_GLOW} toneMapped={false} />
      </mesh>
      <pointLight color={BRAND_BLUE} intensity={0.5} distance={1} />
      
      <Html distanceFactor={15}>
        <div 
            className={`pointer-events-none px-2 py-1 text-xs font-mono text-white bg-black/80 backdrop-blur-md border border-blue-500/30 rounded whitespace-nowrap transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}
            style={{ transform: 'translate3d(-50%, -150%, 0)' }}
        >
            {name}
        </div>
      </Html>
    </group>
  );
}

function DataArc({ start, end }: { start: THREE.Vector3; end: THREE.Vector3 }) {
  const curve = useMemo(() => getCurve(start, end), [start, end]);
  const packetRef = useRef<THREE.Mesh>(null);
  const speed = useMemo(() => 0.3 + Math.random() * 0.5, []);
  const offset = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame(({ clock }) => {
    if (!packetRef.current) return;

    const t = (clock.getElapsedTime() * speed + offset) % 1;
    const pointOnCurve = curve.getPointAt(t);
    packetRef.current.position.copy(pointOnCurve);

    const scale = Math.sin(t * Math.PI); 
    packetRef.current.scale.setScalar(scale * 1.2);
  });

  const lineGeometry = useMemo(() => {
    const points = curve.getPoints(50);
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [curve]);

  return (
    <group>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color={BRAND_BLUE} opacity={0.15} transparent />
      </lineSegments>

      <mesh ref={packetRef}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshBasicMaterial color={BRAND_BLUE_GLOW} toneMapped={false} />
        <pointLight color={BRAND_BLUE} intensity={1} distance={1.5} decay={2} />
      </mesh>
    </group>
  );
}

function GlobeScene() {
  const globeRef = useRef<THREE.Mesh>(null);
  const [colorMap, specularMap, cloudsMap, lightsMap] = useLoader(TextureLoader, [
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg",
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg",
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png",
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_lights_2048.png" 
  ]);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.0005;
    }
  });

  const vectors = useMemo(() => LOCATIONS.map(l => latLonToVector3(l.lat, l.lon)), []);

  return (
    <>
      <ambientLight intensity={0.1} color={BRAND_BLUE} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color={"#ffffff"} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color={BRAND_BLUE} />

      <group ref={globeRef}>
        <Sphere args={[GLOBE_RADIUS, 64, 64]}>
          <meshPhongMaterial
            map={colorMap}
            specularMap={specularMap}
            emissiveMap={lightsMap}
            emissive={new THREE.Color(BRAND_BLUE).multiplyScalar(0.8)}
            emissiveIntensity={0.6}
            shininess={25}
            color="#222222" // Slightly darker base color to blend with site
          />
        </Sphere>

        <Sphere args={[GLOBE_RADIUS + 0.03, 64, 64]}>
             <meshPhongMaterial
                map={cloudsMap}
                transparent={true}
                opacity={0.2}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
             />
        </Sphere>

        <mesh scale={[1.05, 1.05, 1.05]}>
             <sphereGeometry args={[GLOBE_RADIUS, 64, 64]} />
             <meshBasicMaterial 
                color={BRAND_BLUE} 
                transparent 
                opacity={0.05} 
                side={THREE.BackSide} 
                blending={THREE.AdditiveBlending}
            />
        </mesh>

        {LOCATIONS.map((loc, i) => (
          <LocationMarker key={loc.name} lat={loc.lat} lon={loc.lon} name={loc.name} />
        ))}

        {vectors.map((startVec, i) =>
          vectors.slice(i + 1).map((endVec, j) => (
            <DataArc key={`${i}-${j}`} start={startVec} end={endVec} />
          ))
        )}

        {vectors.map((startVec, i) =>
          vectors.slice(0, i).map((endVec, j) => (
            <DataArc key={`rev-${i}-${j}`} start={startVec} end={endVec.clone().addScalar(0.01)} />
          ))
        )}
      </group>

      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={GLOBE_RADIUS * 1.2}
        maxDistance={GLOBE_RADIUS * 3}
        autoRotate={false}
        rotateSpeed={0.5}
        dampingFactor={0.1}
      />
    </>
  );
}

export function InteractiveGlobe() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  if (!isMounted) {
    return <div className="w-full h-full rounded-full bg-white/5 animate-pulse" />;
  }

  return (
    <div className="w-full h-full min-h-[400px] lg:min-h-[600px] relative z-10">
      <Canvas 
        camera={{ position: [0, 0, 12], fov: 50 }}
        gl={{ alpha: true, antialias: true }} // Transparent background
      >
        <React.Suspense fallback={null}>
          <GlobeScene />
        </React.Suspense>
      </Canvas>
    </div>
  );
}