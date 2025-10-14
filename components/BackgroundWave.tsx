import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { AdaptiveDpr, AdaptiveEvents, useDetectGPU } from '@react-three/drei'
import * as THREE from 'three'

// Performance configuration based on device capabilities
const getDeviceConfig = (gpu: any, isMobile: boolean) => {
  // Base configuration
  const config = {
    particleRows: 100,
    particleCols: 100,
    particleSize: 0.12,
    updateRate: 1, // Normal speed
  }

  // Adjust for mobile
  if (isMobile) {
    config.particleRows = 50
    config.particleCols = 50
    config.particleSize = 0.15 // Slightly larger particles to compensate for fewer of them
  }

  // Further adjust based on GPU tier
  if (gpu.tier === 3) {
    // High-end GPUs (like RX 9070XT)
    config.particleRows = isMobile ? 75 : 150
    config.particleCols = isMobile ? 75 : 150
  } else if (gpu.tier === 2) {
    // Mid-range GPUs
    config.particleRows = isMobile ? 60 : 100
    config.particleCols = isMobile ? 60 : 100
  } else {
    // Low-end GPUs
    config.particleRows = isMobile ? 40 : 75
    config.particleCols = isMobile ? 40 : 75
    config.updateRate = 0.75 // Slower updates
  }

  return config
}

function Wave() {
  const points = useRef<THREE.Points>(null)
  const gpuTier = useDetectGPU()
  const [config] = useState(() => 
    getDeviceConfig(gpuTier, /iPhone|iPad|Android/i.test(navigator.userAgent))
  )

  // Create a grid of particles
  const { positions, indices } = useMemo(() => {
    const { particleRows: rows, particleCols: cols } = config
    const positions = new Float32Array(rows * cols * 3)
    const indices = new Float32Array(rows * cols)
    
    const rowSize = 40  // Total width
    const colSize = 40  // Total height
    
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const index = i * cols + j
        
        // Create a grid with slight random offset
        positions[index * 3] = (j / cols - 0.5) * rowSize + (Math.random() - 0.5) * 0.5
        positions[index * 3 + 1] = (i / rows - 0.5) * colSize + (Math.random() - 0.5) * 0.5
        positions[index * 3 + 2] = 0
        
        indices[index] = index
      }
    }
    
    return { positions, indices }
  }, [])

  // FPS and visibility management
  const lastUpdate = useRef(0)
  const visibleRef = useRef(true)
  
  useEffect(() => {
    const handleVisibility = () => {
      visibleRef.current = !document.hidden
    }
    document.addEventListener('visibilitychange', handleVisibility)
    return () => document.removeEventListener('visibilitychange', handleVisibility)
  }, [])

  // Animation with performance optimizations
  useFrame(({ clock }) => {
    if (!points.current || !visibleRef.current) return

    const currentTime = clock.getElapsedTime()
    const deltaTime = currentTime - lastUpdate.current
    
    // Limit updates based on visibility and device capability
    if (deltaTime < (1 / 60) / config.updateRate) return
    
    const time = currentTime
    const positionAttribute = points.current.geometry.attributes.position
    const array = positionAttribute.array as Float32Array

    for (let i = 0; i < array.length; i += 3) {
      const x = array[i]
      const y = array[i + 1]
      
      // Complex wave pattern
      array[i + 2] = 
        Math.sin(x * 0.5 + time * 0.7) * 2 +
        Math.sin(y * 0.5 + time * 0.8) * 2 +
        Math.sin((x + y) * 0.3 + time) * 1.5 +
        Math.sin(Math.sqrt(x * x + y * y) * 0.2 + time) * 1
    }

    lastUpdate.current = currentTime

    positionAttribute.needsUpdate = true
  })

  return (
    <points ref={points}>
      <bufferGeometry>
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
      bottom: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#000000',
      pointerEvents: 'none',
    }}>
      <Canvas
        camera={{
          position: [0, -15, 25],
          fov: 75,
          near: 0.1,
          far: 1000,
          rotation: [0.3, 0, 0]
        }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
      >
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
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
}