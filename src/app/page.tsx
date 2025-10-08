'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import SocialLinks from '@/components/SocialLinks'

type FeedItem = {
  author: string
  message: string
}

type MarketplaceItem = {
  title: string
  description: string
  cta: string
  href: string
}

const navLinks = [
  { label: '🔥 Streaks', href: '#streaks' },
  { label: '📡 Social Feed', href: '#feed' },
  { label: '🛒 Marketplace', href: '#marketplace' },
  { label: '🤖 FX1 FLUX AI', href: '#flux-ai' },
]

const feedItems: FeedItem[] = [
  {
    author: '@fx1_builder',
    message: 'Just dropped a new NFT on Zora 🔥',
  },
  {
    author: '@fdh_holders',
    message: 'Earning streaks now live — connect wallet to start ⚡',
  },
]

const marketplaceItems: MarketplaceItem[] = [
  {
    title: 'FX1 Builder Pass',
    description: 'Access exclusive creator tools + $FDH boosts',
    cta: 'Mint Now',
    href: '/marketplace',
  },
  {
    title: 'FX1 Flux Avatar',
    description: 'Your onchain identity across Base & Farcaster',
    cta: 'Buy on Zora',
    href: 'https://zora.co/@fx1_hubs',
  },
]

const responseTemplates = [
  (prompt: string) => `Here\'s a content idea for your Web3 feed about ${prompt}.`,
  (prompt: string) => `You could post a Farcaster thread: “${prompt} — powered by builders on Base.”`,
  (prompt: string) => `Consider turning “${prompt}” into an NFT drop teaser.`,
  (prompt: string) => `Let\'s amplify ${prompt} with a storytelling post on Zora + Warpcast.`,
  (prompt: string) => `FX1 recommends tying ${prompt} to $FDH rewards this week!`,
]

export default function Home() {
  const sceneRef = useRef<HTMLDivElement | null>(null)
  const timeoutsRef = useRef<number[]>([])
  const [streakCount, setStreakCount] = useState(5)
  const [prompt, setPrompt] = useState('')
  const [aiOutput, setAiOutput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

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

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((id) => window.clearTimeout(id))
      timeoutsRef.current = []
    }
  }, [])

  const handleClaimStreak = () => {
    setStreakCount((prev) => {
      const next = prev + 1
      if (typeof window !== 'undefined') {
        window.alert('🔥 Streak updated! You’ve earned +1 $FDH Boost!')
      }
      return next
    })
  }

  const pickResponse = (topic: string) => {
    const template = responseTemplates[Math.floor(Math.random() * responseTemplates.length)]
    return template(topic)
  }

  const clearTypingQueue = () => {
    timeoutsRef.current.forEach((id) => window.clearTimeout(id))
    timeoutsRef.current = []
  }

  const typeResponse = (text: string) => {
    clearTypingQueue()
    setIsTyping(true)
    setAiOutput('')

    Array.from(text).forEach((char, index) => {
      const timeoutId = window.setTimeout(() => {
        setAiOutput((prev) => prev + char)
        if (index === text.length - 1) {
          setIsTyping(false)
        }
      }, index * 40)

      timeoutsRef.current.push(timeoutId)
    })
  }

  const handleGenerate = () => {
    const trimmed = prompt.trim()
    if (!trimmed) {
      setAiOutput('Please type your question first.')
      return
    }

    setAiOutput('⚙️ Generating...')
    clearTypingQueue()

    const idea = pickResponse(trimmed)
    const delayId = window.setTimeout(() => {
      typeResponse(`FX1 FLUX AI: ${idea}`)
    }, 220)

    timeoutsRef.current.push(delayId)
  }

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
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="relative flex-1 overflow-hidden">
        <section ref={sceneRef} className="parallax-scene" aria-labelledby="hero-title">
          <div className="scene-bg" />
          <div className="stars layer layer-1" />
          <div className="layer layer-2" />

          <div className="card floating layer depth-3" style={{ '--d': 0.1 } as CSSProperties}>
            <h3 className="card-title">ONCHAIN FASHION</h3>
            <p className="card-copy">Wearable NFTs &amp; runway drops</p>
          </div>

          <div className="card floating layer depth-6" style={{ '--d': -0.06 } as CSSProperties}>
            <h3 className="card-title">AI COLLABS</h3>
            <p className="card-copy">FX1 FLUX — create with AI</p>
          </div>

          <div className="card floating layer depth-4" style={{ '--d': 0.02 } as CSSProperties}>
            <h3 className="card-title">MARKETPLACE</h3>
            <p className="card-copy">Mint, list &amp; trade</p>
          </div>

          <div className="hero-content layer z-30" id="hero">
            <h2 className="hero-title" id="hero-title">
              Welcome to FX1 Digital Hubs
            </h2>
            <p className="hero-sub">
              Earn. Build. Grow. — Powered by Web3 + AI.
            </p>

            <div className="hero-actions">
              <button type="button" className="btn-primary">
                Connect Wallet
              </button>
              <a href="#marketplace" className="btn-outline">
                Explore Marketplace
              </a>
              <a href="#flux-ai" className="btn-outline">
                Launch FX1 FLUX AI
              </a>
            </div>

            <div className="hero-streak">
              <span className="mr-3">Builders streak:</span>
              <span className="streak-pill">{streakCount} days 🔥</span>
            </div>
          </div>

          <div className="vignette layer z-20" />
        </section>

        <section id="streaks" className="content-section">
          <div className="section-shell">
            <div className="section-header">
              <h3 className="section-heading">Daily Streaks</h3>
              <p className="section-subhead">Stay consistent to unlock boosts and builder perks.</p>
            </div>
            <div className="streak-card">
              <div>
                <p className="streak-label">Your current streak</p>
                <p className="streak-value">{streakCount} days</p>
              </div>
              <button type="button" className="btn-secondary" onClick={handleClaimStreak}>
                Claim Daily Reward
              </button>
            </div>
          </div>
        </section>

        <section id="feed" className="content-section">
          <div className="section-shell">
            <div className="section-header">
              <h3 className="section-heading">Onchain Feed</h3>
              <p className="section-subhead">Live snapshots from FX1 builders across Farcaster.</p>
            </div>
            <div className="feed-grid">
              {feedItems.map((item) => (
                <article key={item.author} className="feed-card">
                  <span className="feed-author">{item.author}</span>
                  <p className="feed-message">{item.message}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="marketplace" className="content-section">
          <div className="section-shell">
            <div className="section-header">
              <h3 className="section-heading">FX1 Marketplace</h3>
              <p className="section-subhead">Mint, collect, and trade across Base &amp; Zora.</p>
            </div>
            <div className="market-grid">
              {marketplaceItems.map((item) => (
                <article key={item.title} className="market-card">
                  <div className="market-visual" aria-hidden="true" />
                  <h4 className="market-title">{item.title}</h4>
                  <p className="market-copy">{item.description}</p>
                  <a href={item.href} className="btn-primary" target="_blank" rel="noreferrer">
                    {item.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="flux-ai" className="content-section">
          <div className="section-shell">
            <div className="section-header">
              <h3 className="section-heading">FX1 FLUX AI Agent</h3>
              <p className="section-subhead">Generate ideas, trends, and posts to grow your reach.</p>
            </div>
            <div className="ai-panel">
              <textarea
                id="ai-input"
                className="ai-textarea"
                placeholder="Ask FX1 FLUX anything..."
                value={prompt}
                onChange={(event) => setPrompt(event.target.value)}
              />
              <button type="button" className="btn-primary" onClick={handleGenerate} disabled={isTyping}>
                {isTyping ? 'Generating…' : 'Generate'}
              </button>
              <div id="ai-response" className="ai-response" aria-live="polite">
                {aiOutput}
              </div>
            </div>
          </div>
        </section>

        <aside className="socials-panel z-40">
          <SocialLinks />
        </aside>
      </main>

      <footer className="page-footer">
        © {new Date().getFullYear()} FX1 DIGITAL HUBS — Built for Builders on Base &amp; Farcaster
      </footer>
    </div>
  )
}
