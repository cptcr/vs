/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

"use client"

import { useRef, useMemo, useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Stars, Html } from "@react-three/drei"
import * as THREE from "three"

// ----------------------------------------------------------------------
// CONFIGURATION
// ----------------------------------------------------------------------
const GLOBE_RADIUS = 1.8 // Slightly bigger as requested
const DOT_SIZE = 0.035   // Larger, clearer dots
const DOT_DENSITY = 18000 // Number of points to sample (creates the spacing tightness)
const DOT_ELEVATION = 0.02 

// Using a reliable texture for landmass detection (Black/White specular map)
const EARTH_SPECULAR_MAP = "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg"

// ----------------------------------------------------------------------
// LOCATIONS & TRAFFIC CONFIG
// ----------------------------------------------------------------------
type Location = {
  name: string
  lat: number
  lon: number
  color?: string
}

const LOCATIONS: Location[] = [
  { name: "Ashburn, USA", lat: 39.0438, lon: -77.4874, color: "#3b82f6" }, // Blue
  { name: "Frankfurt, DE", lat: 50.1109, lon: 8.6821, color: "#3b82f6" },   // Blue
  { name: "Helsinki, FI", lat: 60.1699, lon: 24.9384, color: "#3b82f6" },  // Blue
  { name: "Singapore, SG", lat: 1.3521, lon: 103.8198, color: "#3b82f6" }, // Blue
]

// Define connections (Indices in LOCATIONS array)
const CONNECTIONS = [
  [0, 1], // USA -> DE
  [1, 2], // DE -> FI
  [1, 3], // DE -> SG
  [3, 0], // SG -> USA (Pacific route)
  [2, 0], // FI -> USA
]

// ----------------------------------------------------------------------
// HELPERS
// ----------------------------------------------------------------------
function latLonToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)

  const x = -(radius * Math.sin(phi) * Math.cos(theta))
  const z = (radius * Math.sin(phi) * Math.sin(theta))
  const y = (radius * Math.cos(phi))

  return new THREE.Vector3(x, y, z)
}

// ----------------------------------------------------------------------
// MAIN COMPONENT
// ----------------------------------------------------------------------
export function InteractiveGlobe() {
  return (
    <div className="w-full h-full min-h-[500px] relative z-0">
      <Canvas camera={{ position: [0, 1.5, 5.5], fov: 45 }}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4f46e5" />
        
        {/* Background Stars */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {/* Globe Group */}
        <group rotation={[0, 0, 0.2]}> {/* Slight tilt */}
          <GlobeMesh />
          <LocationsAndTraffic />
        </group>
        
        {/* Controls */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.8} 
          minPolarAngle={Math.PI / 4} 
          maxPolarAngle={Math.PI / 1.5} 
        />
      </Canvas>
    </div>
  )
}

// ----------------------------------------------------------------------
// GLOBE RENDERING (FIBONACCI SPHERE)
// ----------------------------------------------------------------------
function GlobeMesh() {
  const [points, setPoints] = useState<Float32Array | null>(null)

  useEffect(() => {
    const img = new Image()
    img.crossOrigin = "Anonymous"
    img.src = EARTH_SPECULAR_MAP
    
    img.onload = () => {
      const canvas = document.createElement("canvas")
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext("2d")
      if (!ctx) return
      
      ctx.drawImage(img, 0, 0)
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data

      const tempPoints: number[] = []
      
      // FIBONACCI SPHERE ALGORITHM
      // Distributes points perfectly evenly across the sphere surface
      const phi = Math.PI * (3 - Math.sqrt(5)) // Golden angle in radians

      for (let i = 0; i < DOT_DENSITY; i++) {
        // y goes from 1 to -1
        const y_pos = 1 - (i / (DOT_DENSITY - 1)) * 2 
        const radiusAtY = Math.sqrt(1 - y_pos * y_pos) // Radius at y
        
        const theta = phi * i // Golden angle increment

        const x_pos = Math.cos(theta) * radiusAtY
        const z_pos = Math.sin(theta) * radiusAtY

        // Map to UV coordinates to check landmask (using normalized coordinates)
        const normX = x_pos
        const normY = y_pos
        const normZ = z_pos

        // Standard UV mapping for equirectangular texture
        const uvX = 0.5 + Math.atan2(normZ, normX) / (2 * Math.PI)
        const uvY = 0.5 - Math.asin(normY) / Math.PI

        const pixelX = Math.floor(uvX * img.width)
        const pixelY = Math.floor(uvY * img.height)
        const pX = Math.max(0, Math.min(img.width - 1, pixelX))
        const pY = Math.max(0, Math.min(img.height - 1, pixelY))

        const index = (pY * img.width + pX) * 4
        const red = data[index]

        // Keep point if it hits land (white pixel)
        if (red > 90) {
           // Scale to globe radius + elevation
           const r = GLOBE_RADIUS + DOT_ELEVATION
           tempPoints.push(x_pos * r, y_pos * r, z_pos * r)
        }
      }
      setPoints(new Float32Array(tempPoints))
    }
  }, [])

  const geometry = useMemo(() => {
    if (!points) return null
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(points, 3))
    return geo
  }, [points])

  return (
    <group>
      {/* 1. Black Core (Oceans) - Solid Black Sphere */}
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS, 64, 64]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* 2. Atmosphere Glow (Optional, keeps outline visible in dark) */}
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS, 64, 64]} />
        <meshPhongMaterial
          color="#1e1b4b"
          emissive="#1e1b4b"
          emissiveIntensity={0.1}
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </mesh>

      {/* 3. Land Dots (Perfectly Spaced) */}
      {points && geometry ? (
        <points args={[geometry]}>
          <pointsMaterial 
            size={DOT_SIZE} 
            color="#ffffff" 
            transparent={true} 
            opacity={0.9} 
            sizeAttenuation={true}
          />
        </points>
      ) : (
        // Fallback wireframe
        <mesh>
            <sphereGeometry args={[GLOBE_RADIUS, 24, 24]} />
            <meshBasicMaterial wireframe color="#333" transparent opacity={0.1} />
        </mesh>
      )}
    </group>
  )
}

// ----------------------------------------------------------------------
// TRAFFIC & LOCATIONS
// ----------------------------------------------------------------------
function LocationsAndTraffic() {
  return (
    <group>
      {/* Render Location Markers */}
      {LOCATIONS.map((loc, i) => (
        <LocationMarker key={i} {...loc} />
      ))}

      {/* Render Arcs with Traffic */}
      {CONNECTIONS.map(([startIdx, endIdx], i) => (
        <TrafficArc 
            key={`arc-${i}`} 
            start={LOCATIONS[startIdx]} 
            end={LOCATIONS[endIdx]} 
        />
      ))}
    </group>
  )
}

function LocationMarker({ lat, lon, name, color }: Location) {
  // Markers sit slightly above dots
  const pos = useMemo(() => latLonToVector3(lat, lon, GLOBE_RADIUS + DOT_ELEVATION + 0.05), [lat, lon])
  
  return (
    <group position={pos}>
      {/* Glowing Dot */}
      <mesh>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>
      {/* Pulse Effect Ring */}
      <mesh scale={[1, 1, 1]}>
        <ringGeometry args={[0.05, 0.06, 32]} />
        <meshBasicMaterial color={color} side={THREE.DoubleSide} transparent opacity={0.6} />
      </mesh>
      {/* Label */}
      <Html distanceFactor={10}>
        <div className="pointer-events-none select-none bg-black/90 text-white text-[9px] px-2 py-0.5 rounded border border-white/20 backdrop-blur-sm whitespace-nowrap transform -translate-y-4 font-mono">
          {name}
        </div>
      </Html>
    </group>
  )
}

function TrafficArc({ start, end }: { start: Location, end: Location }) {
  const curve = useMemo(() => {
    const startPos = latLonToVector3(start.lat, start.lon, GLOBE_RADIUS + DOT_ELEVATION)
    const endPos = latLonToVector3(end.lat, end.lon, GLOBE_RADIUS + DOT_ELEVATION)
    
    // Calculate mid-point height for arc
    const mid = startPos.clone().add(endPos).multiplyScalar(0.5).normalize().multiplyScalar(GLOBE_RADIUS + 0.5) // Arc height
    
    return new THREE.QuadraticBezierCurve3(startPos, mid, endPos)
  }, [start, end])

  // Create geometry for the line
  const points = useMemo(() => curve.getPoints(50), [curve])
  const lineGeometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points])

  return (
    <group>
      {/* The Arc Line (Faint) */}
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#3b82f6" transparent opacity={0.15} />
      </lineSegments>

      {/* The Moving Packets */}
      <Packet curve={curve} speed={0.5} />
      <Packet curve={curve} speed={0.7} delay={1000} />
    </group>
  )
}

function Packet({ curve, speed, delay = 0 }: { curve: THREE.QuadraticBezierCurve3, speed: number, delay?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [active, setActive] = useState(false)
  const progress = useRef(0)

  useEffect(() => {
    const t = setTimeout(() => setActive(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  useFrame((state, delta) => {
    if (!active || !meshRef.current) return

    progress.current += delta * speed
    if (progress.current > 1) progress.current = 0

    const pos = curve.getPoint(progress.current)
    meshRef.current.position.copy(pos)
  })

  if (!active) return null

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.025, 8, 8]} />
      <meshBasicMaterial color="#ffffff" />
    </mesh>
  )
}