# FX1 Digital Hubs - Complete Setup Guide

## 🚀 Welcome to FX1 Digital Hubs

**FX1 Digital Hubs** is an all-in-one AI-powered NFT and social platform connecting creators, traders, and Web3 explorers across Zora, Base, Lens, and Farcaster.

This guide covers installation, configuration, and usage of all features.

---

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Project Structure](#project-structure)
3. [Feature Overview](#feature-overview)
4. [API Routes](#api-routes)
5. [Environment Variables](#environment-variables)
6. [Web3 Integration](#web3-integration)
7. [Deployment](#deployment)

---

## 🏃 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn package manager
- Wallet with Base mainnet access (MetaMask, Phantom, or Nightly)

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables (see section below)
# Copy .env.example to .env.local and fill in your keys

# Run development server
npm run dev

# Visit http://localhost:3000
```

### Environment Variables

Copy these into your `.env.local` file:

```env
# Web3 & Blockchain
NEXT_PUBLIC_RPC_URL=https://mainnet.base.org
PRIVATE_KEY=your_private_key_here
WALLET_ADDRESS=your_wallet_address

# AI & Art Generation
RUNWARE_API_KEY=your_runware_api_key
ALCHEMY_API_KEY=your_alchemy_api_key

# NFT Platforms
ZORA_API_KEY=your_zora_api_key
PINATA_API_KEY=your_pinata_api_key
PINATA_SECRET_API_KEY=your_pinata_secret

# Blockchain Explorers
BASE_SCAN_API=your_basescan_api_key

# Web3 Services
COINBASE_API=your_coinbase_api_key
COINBASE_SECRET=your_coinbase_secret

# Social Integration
THIRDWEB_CLIENT_ID=your_thirdweb_client_id
THIRDWEB_SECRET=your_thirdweb_secret
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── generate-art/          # AI art generation endpoint
│   │   ├── mint-nft/              # NFT minting endpoint
│   │   ├── nft/
│   │   │   └── zora/              # Zora integration
│   │   ├── posts/                 # Social feed posts
│   │   └── user/[address]/        # User profile endpoints
│   ├── about/                     # About page
│   ├── dashboard/                 # User dashboard
│   ├── ecosystem/                 # Ecosystem & projects page
│   ├── feed/                      # Social feed
│   ├── mint/                      # NFT minting interface
│   ├── profile/[username]/        # Creator profiles
│   ├── studio/                    # AI art studio
│   ├── token/                     # Token dashboard
│   ├── globals.css                # Global styles
│   ├── layout.tsx                 # Root layout
│   └── page.tsx                   # Home page
├── components/
│   ├── Badge.tsx                  # Badge component
│   ├── Button.tsx                 # Button component
│   ├── Card.tsx                   # Card component
│   ├── Footer.tsx                 # Footer
│   ├── Input.tsx                  # Input field
│   ├── Modal.tsx                  # Modal dialog
│   ├── Navbar.tsx                 # Navigation
│   └── SocialLinks.tsx            # Social media links
├── lib/
│   ├── ai-utils.ts                # AI & art generation utilities
│   ├── social-utils.ts            # Social sharing functions
│   ├── token-utils.ts             # Token & blockchain utilities
│   └── web3-config.ts             # Web3 configuration
├── types/
│   └── web3.ts                    # TypeScript types
├── utils/
│   └── pinata.ts                  # Pinata IPFS utilities
├── tailwind.config.ts             # TailwindCSS config
├── tsconfig.json                  # TypeScript config
└── next.config.js                 # Next.js config
```

---

## ✨ Feature Overview

### 1. **AI Studio** (`/studio`)

Generate stunning NFT art using AI with customizable styles:

- **Text-to-Image**: Describe what you want, get instant AI art
- **Style Options**: Fashion, Metaverse, Meme, DeFi, Avatar, NFT Card, Runway
- **One-Click Mint**: Directly mint generated art as NFTs
- **Prompt Library**: Pre-built examples for inspiration

**Example Usage:**

```typescript
// Generate art with FX1 FLUX AI
const result = await generateArtWithRunware({
  prompt: "Digital fashion with gold accents",
  style: "Fashion",
  width: 512,
  height: 512,
});
```

### 2. **Minting Hub** (`/mint`)

Mint NFTs directly to Zora or Base:

- **Wallet Connect**: MetaMask, Phantom, Nightly
- **Chain Selection**: Base or Zora
- **Metadata Management**: Name, description, royalties
- **Edition Size**: Create limited editions or unlimited supply
- **Transaction Tracking**: View mint status and explorer links

**Example Usage:**

```typescript
// Mint NFT on Zora
const response = await fetch('/api/mint-nft', {
  method: 'POST',
  body: JSON.stringify({
    name: "My Digital Art",
    description: "Created with FX1 AI",
    image: "ipfs://...",
    chain: "zora",
    supply: 1,
    royaltyPercentage: 10,
  }),
});
```

### 3. **Social Feed** (`/feed`)

Share and engage with creator community:

- **Create Posts**: Share your NFTs and ideas
- **Engagement**: Like, comment, and tip in $FDH
- **Hashtags**: Auto-discover trending topics
- **Social Sharing**: Share to X, Lens, Farcaster
- **Creator Rewards**: Earn $FDH from community tips

**Example Usage:**

```typescript
// Share post to Twitter
shareToTwitter({
  url: "https://fx1-hubs.app/nft/my-art",
  title: "My NFT",
  text: "Check out my new NFT!",
  hashtags: ["#NFT", "#Web3", "#FX1"],
});
```

### 4. **Dashboard** (`/dashboard`)

Track your creator journey:

- **NFT Collections**: View and manage your creations
- **Wallet Info**: Connected wallet and balance
- **$FDH Staking**: Earn rewards by staking tokens
- **Activity Timeline**: Track all interactions
- **Analytics**: Engagement metrics and earnings

### 5. **Token Dashboard** (`/token`)

$FDH token hub:

- **Live Metrics**: Price, market cap, volume, holders
- **Reward Tiers**: Creator, Artist, Founder with APY
- **Tokenomics**: Supply distribution
- **Buy Interface**: Purchase $FDH directly
- **Staking**: Earn passive income

### 6. **Creator Profiles** (`/profile/[username]`)

Showcase your work:

- **Custom Profile**: Banner, avatar, bio
- **NFT Gallery**: Display all your creations
- **Stats**: Floor price, volume, unique collectors
- **Social Links**: X, Lens, Farcaster connections
- **Creator Tier**: Display your FX1 tier

### 7. **Ecosystem Page** (`/ecosystem`)

Discover FX1 projects:

- **FX1 FLUX AI**: AI assistant for creators
- **Digital Wardrobe**: Virtual fashion NFTs
- **SolHubs**: Solana expansion
- **Creator Academy**: Educational platform
- **Technology Stack**: Full architecture overview

---

## 🔌 API Routes

### Art Generation

**POST** `/api/generate-art`

Generate AI art with specified style.

```json
{
  "prompt": "futuristic fashion design",
  "style": "Fashion"
}
```

Response:

```json
{
  "image": "https://...",
  "prompt": "enhanced prompt",
  "style": "Fashion"
}
```

### Minting

**POST** `/api/mint-nft`

Mint NFT on selected blockchain.

```json
{
  "name": "My NFT",
  "description": "Description",
  "image": "ipfs://...",
  "prompt": "original prompt",
  "royaltyPercentage": 10,
  "chain": "base",
  "supply": 1
}
```

### Zora Integration

**POST** `/api/nft/zora`

Mint directly on Zora.

```json
{
  "tokenName": "My NFT",
  "tokenDescription": "Description",
  "imageUrl": "ipfs://...",
  "royaltyPercentage": 10,
  "chainId": 7777777
}
```

### Social Posts

**GET** `/api/posts?limit=10&offset=0`

Fetch feed posts.

**POST** `/api/posts`

Create new post.

```json
{
  "content": "Check out my NFT!",
  "image": "ipfs://...",
  "hashtags": ["#NFT", "#Web3"],
  "authorAddress": "0x..."
}
```

### User Profile

**GET** `/api/user/[address]`

Fetch user profile.

**PUT** `/api/user/[address]`

Update user profile.

```json
{
  "username": "@creator",
  "bio": "Digital artist",
  "avatar": "ipfs://...",
  "fdhBalance": "15000"
}
```

---

## 🌐 Web3 Integration

### Wallet Connection

The app supports three wallet providers:

1. **MetaMask** - Browser extension
2. **Phantom** - Multi-chain wallet
3. **Nightly** - Web3 wallet

### Configuration

```typescript
// src/lib/web3-config.ts
import { createConfig, http } from 'wagmi'
import { base, baseSepolia } from 'wagmi/chains'

export const wagmiConfig = createConfig({
  chains: [base, baseSepolia],
  transports: {
    [base.id]: http(),
    [baseSepolia.id]: http(),
  },
})
```

### Using Web3 Utilities

```typescript
import {
  formatTokenAmount,
  parseTokenAmount,
  shortenAddress,
  fetchTokenPrice,
} from '@/lib/token-utils'

// Format token for display
const display = formatTokenAmount('1000000000000000000', 18) // "1.0000"

// Parse user input
const amount = parseTokenAmount('100', 18)

// Shorten wallet address
const short = shortenAddress('0x1234...5678') // "0x12...78"

// Get current price
const price = await fetchTokenPrice('FDH')
```

---

## 🎨 Styling & Design

### Colors

- **Primary**: Sky blue (`#38bdf8`)
- **Secondary**: Purple (`#8b5cf6`)
- **Accent**: Gold (`#d4af37`)
- **Background**: Navy black (`#0b0f1a`)

### Typography

- **Font**: Inter + Space Grotesk
- **Weights**: 400, 600, 700
- **Tracking**: 0.3em - 0.4em for headers

### Components

All UI components extend the base design system:

```typescript
// Button variants
<Button variant="primary" size="lg">Create</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="outline">Learn More</Button>
<Button variant="ghost">Link</Button>

// Card usage
<Card>
  <h3>Title</h3>
  <p>Content</p>
</Card>

// Badge
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>

// Input
<Input label="Email" type="email" placeholder="your@email.com" />
```

---

## 📦 Deployment

### Deploy to Vercel

```bash
# Push to GitHub
git push origin main

# Vercel auto-deploys from GitHub

# Or manual deploy
vercel deploy --prod
```

### Environment Variables on Vercel

1. Go to Project Settings → Environment Variables
2. Add all variables from your `.env.local`
3. Mark sensitive keys appropriately

### Pre-deployment Checklist

- [ ] All API keys configured
- [ ] Wallet addresses verified
- [ ] Gas settings optimized for Base
- [ ] IPFS pinning set up (Pinata)
- [ ] Social links updated
- [ ] Domain configured
- [ ] Analytics set up

---

## 🔐 Security Best Practices

1. **Never commit secrets** to git
2. **Use environment variables** for all credentials
3. **Validate all inputs** on backend
4. **Use HTTPS only** in production
5. **Enable wallet signing** for transactions
6. **Rate limit** API endpoints
7. **Sanitize user content** before storing

---

## 🐛 Troubleshooting

### Dev Server Won't Start

```bash
# Clear cache and node_modules
rm -rf node_modules .next
npm install
npm run dev
```

### Wallet Connection Fails

- Check network is set to Base mainnet
- Clear browser cache and restart MetaMask
- Ensure sufficient balance for gas

### API Routes Not Working

- Check environment variables are set
- Verify API keys are active
- Check browser console for errors
- Test endpoints with curl/Postman

### Build Fails

```bash
# Build with verbose output
npm run build -- --debug

# Check for TypeScript errors
npx tsc --noEmit
```

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS](https://tailwindcss.com)
- [Wagmi Documentation](https://wagmi.sh)
- [Base Network](https://base.org)
- [Zora Protocol](https://zora.co)
- [Pinata IPFS](https://pinata.cloud)

---

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

---

## 💬 Support & Community

- **Discord**: [Join Community](https://discord.gg/fx1)
- **Twitter**: [@fx1_hubs](https://twitter.com/fx1_hubs)
- **Email**: support@fx1-hubs.app
- **Docs**: https://docs.fx1-hubs.app

---

## 🌟 Roadmap

### Q1 2024

- [ ] Farcaster Frame integration
- [ ] Enhanced AI model support
- [ ] Creator referral program

### Q2 2024

- [ ] DAO governance
- [ ] Advanced analytics dashboard
- [ ] Creator marketplace

### Q3 2024

- [ ] Mobile app launch
- [ ] Metaverse integration
- [ ] Cross-chain swaps

---

**Built with ❤️ by FX1 Digital Hubs**

_"Styling the Blockchain. Designing the Future."_
