// Stable backup version of the wave background
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

function Wave() {
  const points = useRef<THREE.Points>(null)
  const geometry = useRef<THREE.BufferGeometry>(null)

  // Create particles
  const particleCount = 10000
  const positions = new Float32Array(particleCount * 3)
  
  for (let i = 0; i < particleCount; i++) {
    const x = (Math.random() - 0.5) * 30
    const y = (Math.random() - 0.5) * 15
    const z = (Math.random() - 0.5) * 8
    
    positions[i * 3] = x
    positions[i * 3 + 1] = y
    positions[i * 3 + 2] = z
  }

  // Animation
  useFrame(({ clock }) => {
    if (!points.current || !geometry.current) return
    
    const positions = geometry.current.attributes.position.array as Float32Array
    const time = clock.getElapsedTime()

    for (let i = 0; i < particleCount; i++) {
      const x = positions[i * 3]
      const y = positions[i * 3 + 1]
      
      // Wave motion
      positions[i * 3 + 2] = Math.sin(x * 0.3 + time) * 3 + Math.sin(y * 0.5 + time * 0.8) * 2
    }

    geometry.current.attributes.position.needsUpdate = true
  })

  return (
    <points ref={points}>
      <bufferGeometry ref={geometry}>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        color="#ffffff"
        sizeAttenuation={true}
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

export default function BackgroundWave() {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
      height: '100vh',
      background: 'rgb(0, 0, 0)',
      pointerEvents: 'none',
      zIndex: 0,
    }}>
      <Canvas
        camera={{
          position: [0, -15, 25],
          fov: 75,
          near: 0.1,
          far: 1000,
          rotation: [0.3, 0, 0]
        }}
        dpr={[1, 2]}
      >
        <color attach="background" args={[0x000000]} />
        <Wave />
        <EffectComposer>
          <Bloom
            intensity={0.8}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            radius={0.5}
          />
        </EffectComposer>
      </Canvas>
    </div>
  )