'use client'

import { useState } from 'react'
import Button from '@/components/Button'
import Card from '@/components/Card'
import Modal from '@/components/Modal'

interface NFTForm {
  name: string
  description: string
  image: string
  prompt: string
  royaltyPercentage: number
  chain: 'base' | 'zora'
  supply: number
}

export default function MintPage() {
  const [form, setForm] = useState<NFTForm>({
    name: '',
    description: '',
    image: '',
    prompt: '',
    royaltyPercentage: 10,
    chain: 'zora',
    supply: 1,
  })

  const [isMinting, setIsMinting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [txHash, setTxHash] = useState('')

  const handleMint = async () => {
    if (!form.name || !form.image) {
      alert('Please fill in all required fields')
      return
    }

    setIsMinting(true)
    try {
      const response = await fetch('/api/mint-nft', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) throw new Error('Minting failed')
      const data = await response.json()
      setTxHash(data.txHash)
      setShowSuccess(true)
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Minting failed')
    } finally {
      setIsMinting(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-4">
            Mint Your NFT
          </h1>
          <p className="text-lg text-white/70">
            Create and launch your NFT on Base or Zora in minutes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <h2 className="text-xl font-bold uppercase tracking-widest mb-6">Basic Info</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold uppercase tracking-wider mb-2">
                    NFT Name *
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="My Digital Art"
                    className="w-full px-4 py-2 rounded-lg border border-white/20 bg-black/50 text-white placeholder:text-white/40 focus:border-sky-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold uppercase tracking-wider mb-2">
                    Description
                  </label>
                  <textarea
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    placeholder="Describe your NFT..."
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-white/20 bg-black/50 text-white placeholder:text-white/40 focus:border-sky-400 focus:outline-none resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold uppercase tracking-wider mb-2">
                    Original Prompt
                  </label>
                  <input
                    type="text"
                    value={form.prompt}
                    onChange={(e) => setForm({ ...form, prompt: e.target.value })}
                    placeholder="The AI prompt used to create this..."
                    className="w-full px-4 py-2 rounded-lg border border-white/20 bg-black/50 text-white placeholder:text-white/40 focus:border-sky-400 focus:outline-none"
                  />
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-xl font-bold uppercase tracking-widest mb-6">Minting Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold uppercase tracking-wider mb-2">
                    Select Chain
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {(['zora', 'base'] as const).map((chain) => (
                      <button
                        key={chain}
                        onClick={() => setForm({ ...form, chain })}
                        className={`p-4 rounded-xl border-2 transition-all uppercase tracking-wider font-semibold ${
                          form.chain === chain
                            ? 'border-sky-400 bg-sky-400/20'
                            : 'border-white/10 bg-white/5 hover:border-white/30'
                        }`}
                      >
                        {chain === 'zora' ? '🎨 Zora' : '🔷 Base'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold uppercase tracking-wider mb-2">
                      Edition Size
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={form.supply}
                      onChange={(e) => setForm({ ...form, supply: parseInt(e.target.value) })}
                      className="w-full px-4 py-2 rounded-lg border border-white/20 bg-black/50 text-white focus:border-sky-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold uppercase tracking-wider mb-2">
                      Royalty (%)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="50"
                      value={form.royaltyPercentage}
                      onChange={(e) => setForm({ ...form, royaltyPercentage: parseInt(e.target.value) })}
                      className="w-full px-4 py-2 rounded-lg border border-white/20 bg-black/50 text-white focus:border-sky-400 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </Card>

            <Button size="lg" onClick={handleMint} isLoading={isMinting} className="w-full">
              ⚡ Mint NFT
            </Button>
          </div>

          <div className="space-y-6">
            <Card>
              <h2 className="text-lg font-bold uppercase tracking-widest mb-4">Preview</h2>
              {form.image ? (
                <img
                  src={form.image}
                  alt="NFT preview"
                  className="w-full rounded-xl border border-white/10 mb-4"
                />
              ) : (
                <div className="w-full aspect-square rounded-xl border-2 border-dashed border-white/20 flex items-center justify-center mb-4 bg-white/5">
                  <span className="text-white/50">No image selected</span>
                </div>
              )}
              <div className="space-y-2 text-sm">
                <p>
                  <span className="text-white/60">Name:</span>{' '}
                  <span className="font-semibold">{form.name || 'Untitled'}</span>
                </p>
                <p>
                  <span className="text-white/60">Chain:</span>{' '}
                  <span className="font-semibold uppercase">{form.chain}</span>
                </p>
                <p>
                  <span className="text-white/60">Supply:</span>{' '}
                  <span className="font-semibold">{form.supply}</span>
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-lg font-bold uppercase tracking-widest mb-4">About Minting</h2>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex gap-2">
                  <span>🔗</span>
                  <span>Your NFT will be minted on-chain</span>
                </li>
                <li className="flex gap-2">
                  <span>⛓️</span>
                  <span>Fast & low-cost on Base</span>
                </li>
                <li className="flex gap-2">
                  <span>🎨</span>
                  <span>Integrated with Zora ecosystem</span>
                </li>
                <li className="flex gap-2">
                  <span>💵</span>
                  <span>Earn royalties from secondary sales</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="NFT Minted Successfully!"
      >
        <div className="space-y-4">
          <p className="text-white/80">Your NFT has been minted and is now live on-chain!</p>
          <div className="p-4 rounded-lg bg-white/5 border border-white/10">
            <p className="text-xs text-white/60 mb-1">Transaction Hash</p>
            <p className="text-sm font-mono text-sky-300 break-all">{txHash}</p>
          </div>
          <div className="flex gap-4">
            <Button className="flex-1">View on Explorer</Button>
            <Button variant="secondary" className="flex-1">
              Share NFT
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
