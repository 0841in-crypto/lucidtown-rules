"use client"

import { useEffect, useRef } from "react"

type Star = {
  x: number
  y: number
  r: number
  twinkle: number
  speed: number
}

export function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let frame = 0
    let raf = 0
    let stars: Star[] = []

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(window.innerWidth * dpr)
      canvas.height = Math.floor(window.innerHeight * dpr)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.round((window.innerWidth * window.innerHeight) / 9000)
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.4 + 0.2,
        twinkle: Math.random() * Math.PI * 2,
        speed: 0.008 + Math.random() * 0.02,
      }))
    }

    const draw = () => {
      frame += 1
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      for (const star of stars) {
        const alpha = 0.25 + Math.abs(Math.sin(frame * star.speed + star.twinkle)) * 0.75
        ctx.beginPath()
        ctx.fillStyle = `rgba(236, 228, 255, ${alpha})`
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = window.requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener("resize", resize)

    return () => {
      window.cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#080711]" />
      <div className="absolute -top-24 left-[-10%] h-[420px] w-[520px] rounded-full bg-[#9b73ff]/20 blur-[90px]" />
      <div className="absolute top-[8%] right-[-8%] h-[380px] w-[460px] rounded-full bg-[#62dfff]/16 blur-[100px]" />
      <div className="absolute top-[42%] left-[20%] h-[240px] w-[70%] rotate-[-18deg] rounded-full bg-[#b995ff]/10 blur-[80px]" />
      <div className="absolute bottom-[-10%] right-[10%] h-[360px] w-[420px] rounded-full bg-[#7a5cff]/18 blur-[110px]" />
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}
