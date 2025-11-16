# FX1 DIGITAL HUBS - Architecture & Development Guide

Technical architecture, design patterns, and development guidelines.

---

## 🏗️ System Architecture

### High-Level Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    Browser / Client Side                     │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Next.js / React Frontend                │   │
│  │  (Pages, Components, State Management)              │   │
│  │  - /studio, /mint, /feed, /dashboard, etc.         │   │
│  └──────────────────────────────────────────────────────┘   │
│                          ↓                                    │
│  ┌──────────────────────────────────────────────────────┐   │
│  │         Web3 Integration Layer (Wagmi/Viem)         │   │
│  │  - Wallet Connection (MetaMask, Phantom, Nightly)   │   │
│  │  - Chain Interaction (Base, Zora)                   │   │
│  │  - Smart Contract Calls                             │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────��───────────────────────────┐
│                      Backend / API Layer                     │
│  ┌──────────────────────────────────────────────────────┐   │
│  │          Next.js API Routes (/app/api)              │   │
│  │  - /api/generate-art (AI art generation)            │   │
│  │  - /api/mint-nft (NFT minting)                      │   │
│  │  - /api/posts (social feed)                         │   │
│  │  - /api/users/[address] (profiles)                  │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│                   External Services & APIs                   │
│  ┌──────────┬──────────┬──────────┬──────────┐              │
│  │ OpenAI   │ Pinata   │ Alchemy  │  Zora    │              │
│  │ (AI Art) │ (IPFS)   │ (RPC)    │ (NFTs)   │              │
│  └──────────┴──────────┴──────────┴──────────┘              │
│  ┌──────────┬──────────┬──────────┐                         │
│  │ Supabase │ CoinGecko│ Etherscan│                         │
│  │(Database)│ (Prices) │ (Data)   │                         │
│  └──────────┴──────────┴──────────┘                         │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│               Blockchain / Smart Contracts                   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Base Network (L2) / Zora Protocol                   │   │
│  │  - NFT Contracts                                     │   │
│  │  - $FDH Token Contract                               │   │
│  │  - Staking/Reward Contracts                          │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

---

## 📁 Directory Structure in Detail

```
fx1-digital-hubs/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── generate-art/route.ts       # OpenAI integration
│   │   │   ├── mint-nft/route.ts           # NFT minting
│   │   │   ├── posts/route.ts              # Social feed posts
│   │   │   └── users/[address]/route.ts    # User profiles
│   │   ├── studio/                         # AI art studio page
│   │   │   └── page.tsx
│   │   ├── mint/                           # NFT minting page
│   │   │   └── page.tsx
│   │   ├── feed/                           # Social feed page
│   │   │   └── page.tsx
│   │   ├── dashboard/                      # User dashboard
│   │   │   └── page.tsx
│   │   ├── token/                          # Token economics
│   │   │   └── page.tsx
│   │   ├── profile/
│   │   │   └── [username]/
│   │   │       └── page.tsx                # Creator profiles
│   │   ├── ecosystem/                      # Ecosystem overview
│   │   │   └── page.tsx
│   │   ├── layout.tsx                      # Root layout
│   │   ├── page.tsx                        # Home page
│   │   └── globals.css                     # Global styles
│   ├── components/
│   │   ├── Button.tsx                      # Reusable button
│   │   ├── Card.tsx                        # Reusable card
│   │   ├── Modal.tsx                       # Modal dialog
│   │   ├── Input.tsx                       # Input field
│   │   ├── Badge.tsx                       # Badge tag
│   │   ├── Spinner.tsx                     # Loading spinner
│   │   ├── Navbar.tsx                      # Navigation
│   │   ├── Footer.tsx                      # Footer
│   │   └── SocialLinks.tsx                 # Social links
│   ├── lib/
│   │   ├── web3-config.ts                  # Wagmi config
│   │   ├── utils.ts                        # Utility functions
│   │   └── pinata.ts                       # IPFS integration
│   ├── types/
│   │   └── web3.ts                         # Type definitions
│   └── utils/
│       └── pinata.ts                       # Pinata helpers
├── public/                                 # Static assets
├── contracts/                              # Smart contracts
├── .env.example                            # Environment template
├── package.json                            # Dependencies
├── tsconfig.json                           # TypeScript config
├── tailwind.config.ts                      # Tailwind config
├── next.config.js                          # Next.js config
├── README.md                               # Main documentation
├── SETUP.md                                # Setup guide
└── ARCHITECTURE.md                         # This file
```

---

## 🔄 Data Flow

### Art Generation Flow

```
User Input (Studio)
    ↓
POST /api/generate-art
    ↓
OpenAI API Call
    ↓
Generate Image
    ↓
Return Image URL
    ↓
Display in Preview
    ↓
User Action: "Mint as NFT"
```

### NFT Minting Flow

```
User Input (Mint Form)
    ↓
User Connects Wallet
    ↓
POST /api/mint-nft
    ↓
Upload to Pinata (IPFS)
    ↓
Create Metadata
    ↓
Call Smart Contract
    ↓
Wagmi/Viem handles transaction
    ↓
Wallet Approval
    ↓
Transaction on Base/Zora
    ↓
Show Success with TX Hash
```

### Social Post Flow

```
User Input (Feed)
    ↓
POST /api/posts
    ↓
Extract Hashtags
    ↓
Store in Database
    ↓
Return Post Data
    ↓
Render in Feed
    ↓
User Actions (Like, Tip, Share)
    ↓
Update Counts
```

---

## 🔌 Component Patterns

### Reusable Component Example

```tsx
// components/Button.tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  children: React.ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  ...props
}: ButtonProps) {
  // Implementation
}
```

### Page Component Pattern

```tsx
// src/app/studio/page.tsx
'use client'

import { useState } from 'react'
import Button from '@/components/Button'
import Card from '@/components/Card'

export default function StudioPage() {
  const [state, setState] = useState<State>({...})

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Page content */}
      </div>
    </div>
  )
}
```

### API Route Pattern

```ts
// src/app/api/example/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    // Validation
    // Processing
    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error message' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    // Fetch and return data
    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error message' },
      { status: 500 }
    )
  }
}
```

---

## 🧩 State Management

### Local Component State

For simple component state, use `useState`:

```tsx
const [formData, setFormData] = useState({
  name: '',
  description: '',
})

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  })
}
```

### Complex State (Future Enhancement)

For complex app state, consider:
- **Zustand**: Lightweight state management
- **Redux**: Full-featured state management
- **Context API**: Built-in React solution

Example with Context:

```tsx
// lib/UserContext.tsx
import { createContext, useContext, useState } from 'react'

interface User {
  address: string
  balance: string
}

const UserContext = createContext<User | null>(null)

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const user = useContext(UserContext)
  if (!user) throw new Error('useUser must be used within UserProvider')
  return user
}
```

---

## 🔗 API Integration Examples

### Calling API Routes

```tsx
// Client-side API call
const handleGenerate = async () => {
  try {
    const response = await fetch('/api/generate-art', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, style }),
    })

    if (!response.ok) throw new Error('Failed')
    const data = await response.json()
    setImage(data.image)
  } catch (error) {
    setError(error instanceof Error ? error.message : 'Error')
  }
}
```

### External API Integration

```ts
// lib/openai.ts
export async function generateImage(prompt: string) {
  const response = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      prompt,
      n: 1,
      size: '512x512',
    }),
  })

  if (!response.ok) throw new Error('Failed to generate')
  return response.json()
}
```

---

## 🌐 Web3 Integration Guide

### Wallet Connection

```tsx
// Components using wagmi (future integration)
import { useAccount, useConnect, useDisconnect } from 'wagmi'

export function WalletConnector() {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()

  if (isConnected) {
    return (
      <div>
        Connected: {address}
        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    )
  }

  return (
    <div>
      {connectors.map((connector) => (
        <button
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          {connector.name}
        </button>
      ))}
    </div>
  )
}
```

### Smart Contract Interaction

```ts
// lib/contracts.ts
import { getContract } from 'viem'
import { wagmiConfig } from './web3-config'

export async function mintNFT(metadata: NFTMetadata) {
  const contract = getContract({
    address: process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS as `0x${string}`,
    abi: NFT_ABI,
    client: wagmiConfig,
  })

  const tx = await contract.write.mint([metadata])
  return tx
}
```

---

## 📊 Database Schema (Supabase)

### Users Table

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  address TEXT UNIQUE NOT NULL,
  username TEXT UNIQUE,
  bio TEXT,
  avatar_url TEXT,
  followers INT DEFAULT 0,
  following INT DEFAULT 0,
  fdh_balance DECIMAL DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Posts Table

```sql
CREATE TABLE posts (
  id UUID PRIMARY KEY,
  author_id UUID REFERENCES users(id),
  content TEXT NOT NULL,
  image_url TEXT,
  hashtags TEXT[],
  likes INT DEFAULT 0,
  comments INT DEFAULT 0,
  tips DECIMAL DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### NFTs Table

```sql
CREATE TABLE nfts (
  id UUID PRIMARY KEY,
  creator_id UUID REFERENCES users(id),
  token_id INT,
  contract_address TEXT,
  name TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  metadata JSONB,
  chain TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 🔐 Security Best Practices

### Environment Variables

```tsx
// ✅ DO: Use environment variables
const apiKey = process.env.OPENAI_API_KEY

// ❌ DON'T: Hardcode secrets
const apiKey = 'sk-xxxxx'
```

### Input Validation

```tsx
// ✅ DO: Validate user input
function validateAddress(address: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(address)
}

// Use in forms
if (!validateAddress(input)) {
  setError('Invalid address')
}
```

### Error Handling

```tsx
// ✅ DO: Handle errors gracefully
try {
  const data = await fetchData()
} catch (error) {
  console.error('Error:', error)
  setError('Failed to load data')
}

// ❌ DON'T: Expose error details to users
throw error // Exposes sensitive info
```

---

## 🚀 Performance Optimization

### Code Splitting

```tsx
// Dynamic imports for large components
import dynamic from 'next/dynamic'

const StudioComponent = dynamic(() => import('./Studio'), {
  loading: () => <Spinner />,
})
```

### Image Optimization

```tsx
import Image from 'next/image'

// Always use Next.js Image component
<Image
  src="/image.webp"
  alt="Description"
  width={500}
  height={500}
  priority // For above-the-fold images
/>
```

### API Caching

```ts
// Set cache headers
export async function GET(request: NextRequest) {
  const data = await fetchData()
  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
```

---

## 🧪 Testing Strategy

### Unit Tests

```tsx
// __tests__/utils.test.ts
import { formatAddress } from '@/lib/utils'

describe('formatAddress', () => {
  it('should format address correctly', () => {
    const address = '0x1234567890123456789012345678901234567890'
    expect(formatAddress(address)).toBe('0x1234...7890')
  })
})
```

### Component Tests

```tsx
// __tests__/Button.test.tsx
import { render, screen } from '@testing-library/react'
import Button from '@/components/Button'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
})
```

---

## 📚 Useful Commands

```bash
# Development
npm run dev                 # Start dev server
npm run build              # Build for production
npm run start              # Start production server
npm test                   # Run tests
npm run lint              # Run linter

# Utilities
npm run format            # Format code with Prettier
npm run type-check        # Check TypeScript types
npm run clean             # Clean build artifacts
```

---

## 🔄 Git Workflow

```bash
# Create feature branch
git checkout -b feature/amazing-feature

# Make changes and commit
git add .
git commit -m "feat: add amazing feature"

# Push and create PR
git push origin feature/amazing-feature
```

---

## 📖 Additional Resources

- [Next.js Best Practices](https://nextjs.org/learn)
- [React Patterns](https://react.dev/learn)
- [TailwindCSS Tips](https://tailwindcss.com/docs)
- [Wagmi Hooks](https://wagmi.sh/docs)

---

**Last Updated**: 2024  
**Version**: 1.0.0
