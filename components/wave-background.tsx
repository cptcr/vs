"use client"

import { useEffect, useRef } from "react"

export function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resizeCanvas = () => {
      const container = canvas.parentElement
      if (container) {
        const rect = container.getBoundingClientRect()
        canvas.width = rect.width
        canvas.height = rect.height
      }
    }

    const animate = () => {
      ctx.fillStyle = "#000"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Calculate columns based on screen width to ensure full coverage
      const baseSpacing = 14 // Increased spacing for smoother waves
      const cols = Math.ceil(canvas.width / baseSpacing) + 6 // More extra columns for wider waves
      const rows = 90 // More rows for better depth

      const startX = -baseSpacing * 3 // Start further left for smoother entry
      const startY = canvas.height * 0.65 // Slightly lower starting point

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const depthRatio = row / rows
          const perspective = 0.15 + depthRatio * 0.85 // More dramatic perspective

          const spacing = baseSpacing * perspective
          const x = startX + col * spacing
          const baseY = startY + row * spacing * 0.35 // Reduced vertical spacing

          // Enhanced wave patterns with slower, more fluid motion
          const timeScale = 0.0008 // Slower overall movement
          const primaryWave = Math.sin(col * 0.05 + time * timeScale) * 22 * perspective
          const secondaryWave = Math.sin(row * 0.03 + time * timeScale * 0.7) * 18 * perspective
          const tertiaryWave = Math.sin((col + row) * 0.04 + time * timeScale * 1.2) * 15 * perspective
          
          // Cross-wave patterns for more organic movement
          const crossWave1 = Math.cos(col * 0.06 - row * 0.03 + time * timeScale * 0.9) * 12 * perspective
          const crossWave2 = Math.sin(col * 0.04 + row * 0.05 - time * timeScale * 1.1) * 10 * perspective
          
          // Additional subtle fluctuations
          const microWave1 = Math.sin(col * 0.1 + time * timeScale * 1.5) * 5 * perspective
          const microWave2 = Math.cos(row * 0.08 - time * timeScale * 1.3) * 4 * perspective

          const y = baseY + 
            primaryWave + 
            secondaryWave + 
            tertiaryWave + 
            crossWave1 + 
            crossWave2 + 
            microWave1 * 0.5 + // Reduced impact of micro waves
            microWave2 * 0.5

          // More dynamic dot sizing and opacity
          const size = 0.3 + perspective * 2.2
          const waveHeight = Math.abs(primaryWave + secondaryWave) / (40 * perspective)
          const dynamicOpacity = Math.pow(perspective, 1.8) * (0.4 + waveHeight * 0.3)

          if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) {
            ctx.fillStyle = `rgba(255, 255, 255, ${dynamicOpacity})`
            ctx.beginPath()
            ctx.arc(x, y, size, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      }

      time += 0.75
      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full pointer-events-none z-0" 
        style={{ background: "#000" }} 
      />
    </div>
  )
}
