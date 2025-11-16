'use client'

import { useState } from 'react'
import Button from '@/components/Button'
import Card from '@/components/Card'

type ArtStyle = 'Fashion' | 'Metaverse' | 'Meme' | 'DeFi' | 'Avatar' | 'NFT Card' | 'Runway'

interface GenerationState {
  prompt: string
  style: ArtStyle
  isGenerating: boolean
  generatedImage: string | null
  error: string | null
}

const styles: { label: ArtStyle; description: string; icon: string }[] = [
  { label: 'Fashion', description: 'Digital fashion designs & wearables', icon: '👗' },
  { label: 'Metaverse', description: '3D metaverse environments', icon: '🌐' },
  { label: 'Meme', description: 'Viral meme art & culture', icon: '😂' },
  { label: 'DeFi', description: 'Financial & blockchain art', icon: '💰' },
  { label: 'Avatar', description: 'Digital avatars & characters', icon: '👤' },
  { label: 'NFT Card', description: 'Trading card designs', icon: '🎴' },
  { label: 'Runway', description: 'High fashion runway concepts', icon: '✨' },
]

const promptExamples = [
  'Generate futuristic 3D NFT fashion with gold glow and digital runway.',
  'Create DeFi poster art showing liquidity energy streams.',
  'Design metaverse avatar with neon jacket and onchain accessories.',
  'A holographic digital model wearing impossible fashion.',
  'Cyberpunk fashion collection for the blockchain era.',
]

export default function StudioPage() {
  const [state, setState] = useState<GenerationState>({
    prompt: '',
    style: 'Fashion',
    isGenerating: false,
    generatedImage: null,
    error: null,
  })

  const handleGenerate = async () => {
    if (!state.prompt.trim()) {
      setState((prev) => ({ ...prev, error: 'Please enter a prompt' }))
      return
    }

    setState((prev) => ({ ...prev, isGenerating: true, error: null }))

    try {
      const response = await fetch('/api/generate-art', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: state.prompt,
          style: state.style,
        }),
      })

      if (!response.ok) throw new Error('Generation failed')
      const data = await response.json()
      setState((prev) => ({ ...prev, generatedImage: data.image, isGenerating: false }))
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Generation failed',
        isGenerating: false,
      }))
    }
  }

  const usePromptExample = (example: string) => {
    setState((prev) => ({ ...prev, prompt: example }))
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-4">
            FX1 AI Studio
          </h1>
          <p className="text-lg text-white/70">
            Transform your ideas into stunning AI-generated NFT art
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <h2 className="text-xl font-bold uppercase tracking-widest mb-6">Your Prompt</h2>
              <textarea
                value={state.prompt}
                onChange={(e) => setState((prev) => ({ ...prev, prompt: e.target.value }))}
                placeholder="Describe the art you want to create..."
                className="w-full h-40 rounded-xl border border-white/20 bg-black/50 px-4 py-3 text-white placeholder:text-white/40 focus:border-sky-400 focus:outline-none resize-none"
              />
              {state.error && (
                <p className="mt-3 text-sm text-red-400">{state.error}</p>
              )}
            </Card>

            <Card>
              <h2 className="text-xl font-bold uppercase tracking-widest mb-6">Art Style</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {styles.map((s) => (
                  <button
                    key={s.label}
                    onClick={() => setState((prev) => ({ ...prev, style: s.label }))}
                    className={`p-4 rounded-xl border-2 transition-all text-center ${
                      state.style === s.label
                        ? 'border-sky-400 bg-sky-400/20'
                        : 'border-white/10 bg-white/5 hover:border-white/30'
                    }`}
                  >
                    <div className="text-3xl mb-2">{s.icon}</div>
                    <div className="text-sm font-semibold uppercase tracking-wider">{s.label}</div>
                    <p className="text-xs text-white/50 mt-1">{s.description}</p>
                  </button>
                ))}
              </div>
            </Card>

            <Button
              size="lg"
              onClick={handleGenerate}
              isLoading={state.isGenerating}
              className="w-full"
            >
              ✨ Generate Art
            </Button>

            {state.generatedImage && (
              <Card>
                <h2 className="text-xl font-bold uppercase tracking-widest mb-4">Generated Image</h2>
                <img
                  src={state.generatedImage}
                  alt="Generated art"
                  className="w-full rounded-2xl border border-white/10"
                />
                <div className="flex gap-4 mt-6">
                  <Button variant="primary" size="md" className="flex-1">
                    Mint as NFT
                  </Button>
                  <Button variant="secondary" size="md" className="flex-1">
                    Post to Feed
                  </Button>
                  <Button variant="outline" size="md" className="flex-1">
                    Download
                  </Button>
                </div>
              </Card>
            )}
          </div>

          <div className="space-y-8">
            <Card>
              <h2 className="text-lg font-bold uppercase tracking-widest mb-4">Prompt Ideas</h2>
              <div className="space-y-3">
                {promptExamples.map((example, i) => (
                  <button
                    key={i}
                    onClick={() => usePromptExample(example)}
                    className="text-left p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-sm text-white/80"
                  >
                    "{example}"
                  </button>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-lg font-bold uppercase tracking-widest mb-4">Quick Tips</h2>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex gap-2">
                  <span>💡</span>
                  <span>Be specific about colors, styles, and moods</span>
                </li>
                <li className="flex gap-2">
                  <span>🎨</span>
                  <span>Combine style descriptions for unique results</span>
                </li>
                <li className="flex gap-2">
                  <span>⚡</span>
                  <span>Use Web3 terminology for crypto-themed art</span>
                </li>
                <li className="flex gap-2">
                  <span>✨</span>
                  <span>Higher detail = better NFT results</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
