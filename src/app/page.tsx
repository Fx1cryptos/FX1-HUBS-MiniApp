'use client'

import { useEffect, useRef } from 'react'
import SocialLinks from '@/components/SocialLinks'

export default function Home() {
  const sceneRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const scene = sceneRef.current
    if (!scene) return

    const updateScene = (event: MouseEvent | TouchEvent) => {
      const rect = scene.getBoundingClientRect()
      const point =
        'touches' in event && event.touches.length > 0
          ? event.touches[0]
          : ('clientX' in event
              ? { clientX: event.clientX, clientY: event.clientY }
              : null)

      if (!point) return

      const x = point.clientX - rect.left - rect.width / 2
      const y = point.clientY - rect.top - rect.height / 2
      const px = x / rect.width
      const py = y / rect.height

      scene.style.setProperty('--px', px.toFixed(4))
      scene.style.setProperty('--py', py.toFixed(4))
    }

    const resetScene = () => {
      scene.style.setProperty('--px', '0')
      scene.style.setProperty('--py', '0')
    }

    const handleMouseMove = (event: MouseEvent) => updateScene(event)
    const handleTouchMove = (event: TouchEvent) => updateScene(event)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    window.addEventListener('mouseleave', resetScene)
    window.addEventListener('touchend', resetScene)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('mouseleave', resetScene)
      window.removeEventListener('touchend', resetScene)
    }
  }, [])

  return (
    <div className="page-root flex min-h-screen flex-col">
      <header className="page-header z-40 flex items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="logo-emblem flex h-10 w-10 items-center justify-center font-bold">FX1</div>
          <div>
            <h1 className="text-lg font-semibold tracking-[0.3em]">FX1 DIGITAL HUBS</h1>
            <p className="-mt-1 text-sm text-white/60">AI • Fashion • NFTs • Onchain</p>
          </div>
        </div>

        <nav className="flex items-center gap-3 text-sm">
          <a href="/marketplace" className="nav-link">
            Marketplace
          </a>
          <a href="/mint" className="nav-link">
            Mint
          </a>
          <a href="/ai-agent" className="nav-link">
            AI Agent
          </a>
        </nav>
      </header>

      <main className="relative flex-1 overflow-hidden">
        <section
          ref={sceneRef}
          className="parallax-scene"
          aria-hidden="false"
        >
          <div className="scene-bg" />
          <div className="stars layer layer-1" />
          <div className="layer layer-2" />

          <div className="card floating layer depth-3" style={{ '--d': 0.1 } as React.CSSProperties}>
            <h3 className="card-title">ONCHAIN FASHION</h3>
            <p className="card-copy">Wearable NFTs &amp; runway drops</p>
          </div>

          <div className="card floating layer depth-6" style={{ '--d': -0.06 } as React.CSSProperties}>
            <h3 className="card-title">AI COLLABS</h3>
            <p className="card-copy">FX1 FLUX — create with AI</p>
          </div>

          <div className="card floating layer depth-4" style={{ '--d': 0.02 } as React.CSSProperties}>
            <h3 className="card-title">MARKETPLACE</h3>
            <p className="card-copy">Mint, list &amp; trade</p>
          </div>

          <div className="hero-content layer z-30">
            <h2 className="hero-title">AI × Fashion × NFTs</h2>
            <p className="hero-sub">
              Building the future of onchain style — mint, create, and collaborate.
            </p>

            <div className="mt-6 flex justify-center gap-4">
              <a href="/marketplace" className="btn-primary">
                Explore Marketplace
              </a>
              <a href="/ai-agent" className="btn-outline">
                Launch FX1 FLUX AI
              </a>
            </div>

            <div className="mt-8 text-sm text-white/60">
              <span className="mr-3">Builders streak:</span>
              <span className="streak-pill">5 days 🔥</span>
            </div>
          </div>

          <div className="vignette layer z-20" />
        </section>

        <aside className="socials-panel z-40">
          <SocialLinks />
        </aside>
      </main>

      <footer className="page-footer">
        © {new Date().getFullYear()} FX1 DIGITAL HUBS — Built on Base &amp; Zora
      </footer>
    </div>
  )
}
