# 🚀 FX1 DIGITAL HUBS

**Powering the Future of Web3 Creation**

FX1 DIGITAL HUBS is a comprehensive, all-in-one AI-powered NFT and social platform that connects creators, traders, and Web3 explorers. Blend NFT creation, 3D art generation, social media posting, wallet integration, token economy ($FDH), and AI assistance — designed to empower creators to build, earn, and connect across Zora, Base, Lens, and Farcaster.

---

## ✨ Features

### 1. **AI Studio** 🎨
- Text-to-Image generator with multiple style options
- 7 art styles: Fashion, Metaverse, Meme, DeFi, Avatar, NFT Card, Runway
- Preview-to-mint workflow
- Share directly to social platforms

### 2. **Minting Hub** 🪙
- Multi-wallet support (MetaMask, Phantom, Nightly)
- Mint NFTs on Base or Zora chains
- Automatic metadata handling with prompt preservation
- Royalty configuration (0-50%)
- Edition size control

### 3. **Social Feed** 📱
- Onchain post creation with captions and hashtags
- Like, comment, and share functionality
- $FDH tipping system
- Direct sharing to X, Lens, and Farcaster
- Hashtag discovery

### 4. **Dashboard** 📊
- NFT collection tracking and statistics
- Wallet balance monitoring
- $FDH staking with APY calculation
- Earnings and engagement analytics
- Activity timeline

### 5. **Token Economy** 💰
- Live $FDH price and market data
- Tiered reward system (Creator, Artist, Founder)
- Staking pool with APY rewards
- Tokenomics transparency
- Easy purchase flow

### 6. **Creator Profiles** 👥
- Customizable creator pages
- NFT collection showcase
- Social statistics and follower tracking
- Creator tier badges
- Social media links

### 7. **Ecosystem Overview** 🌐
- FX1 vision and mission statement
- Project portfolio (FLUX AI, Digital Wardrobe, SolHubs)
- Partner integrations
- Technology stack details
- Community resources

### 8. **FX1 FLUX AI** 🤖
- AI-powered creative assistant
- Prompt suggestions and refinement
- Caption generation
- Hashtag recommendations

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **TailwindCSS** - Styling and design system
- **Framer Motion** - Advanced animations
- **Wagmi + Viem** - Web3 interaction

### Backend & Services
- **Next.js API Routes** - Backend endpoints
- **OpenAI API** - AI art generation (for production)
- **Pinata IPFS** - Decentralized asset storage
- **Supabase** - Database and authentication (optional)

### Web3 Integration
- **Wagmi** - React hooks for Ethereum
- **Viem** - Ethereum library
- **ethers.js** - Blockchain interactions
- **RainbowKit** - Wallet connection UI
- **Zora API** - NFT minting on Zora
- **Base Chain** - L2 blockchain

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── generate-art/       # AI art generation endpoint
│   │   ├── mint-nft/           # NFT minting endpoint
│   │   ├── posts/              # Social feed posts API
│   │   └── users/[address]/    # User profile API
│   ├── studio/                 # AI Studio page
│   ├── mint/                   # NFT Minting page
│   ├── feed/                   # Social Feed page
│   ├���─ dashboard/              # User Dashboard page
│   ├── token/                  # Token Economics page
│   ├── profile/[username]/     # Creator Profile page
│   ├── ecosystem/              # Ecosystem Overview page
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   └── globals.css             # Global styles
├── components/
│   ├── Button.tsx              # Reusable button
│   ├── Card.tsx                # Reusable card
│   ├── Modal.tsx               # Modal dialog
│   ├── Navbar.tsx              # Navigation bar
│   ├── Footer.tsx              # Footer
│   └── SocialLinks.tsx         # Social media links
├── lib/
│   ├── web3-config.ts          # Wagmi configuration
│   └── pinata.ts               # IPFS integration
├── types/
│   └── web3.ts                 # TypeScript interfaces
└── utils/
    └── pinata.ts               # Utility functions

```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- MetaMask or any EVM wallet for testing

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/fx1cryptos/FX1-DIGITAL-HUBS.git
   cd fx1-digital-hubs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```
   NEXT_PUBLIC_ALCHEMY_API_KEY=your_alchemy_api_key
   NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_wallet_connect_project_id
   OPENAI_API_KEY=your_openai_api_key
   ZORA_API_KEY=your_zora_api_key
   PINATA_API_KEY=your_pinata_api_key
   PINATA_SECRET_KEY=your_pinata_secret_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

---

## 📋 Available Pages

| Route | Purpose | Features |
|-------|---------|----------|
| `/` | Home | Hero, features overview, quick start |
| `/studio` | AI Art Studio | Generate images with AI |
| `/mint` | NFT Minting | Mint NFTs on Base/Zora |
| `/feed` | Social Feed | Share creations, tips, engagement |
| `/dashboard` | User Dashboard | Stats, collections, staking |
| `/token` | Token Page | $FDH metrics, tiers, purchase |
| `/profile/[username]` | Creator Profile | Portfolio, stats, social links |
| `/ecosystem` | Ecosystem | Vision, projects, partnerships |

---

## 🔐 Web3 Wallet Integration

Currently supports:
- **MetaMask**
- **Phantom**
- **Nightly**

Future integrations:
- WalletConnect
- Ledger
- Coinbase Wallet

---

## 💡 Core Workflows

### Create & Mint an NFT
1. Go to `/studio`
2. Enter an art prompt and select a style
3. Click "Generate Art"
4. Review the generated image
5. Click "Mint as NFT"
6. Connect your wallet and approve the transaction
7. NFT is minted and listed on your profile

### Share to Social
1. Create a post on `/feed`
2. Add hashtags and optional image
3. Click "Post"
4. Use "Share" to post to X, Lens, or Farcaster
5. AI generates captions and hashtags

### Earn with $FDH
1. Visit `/token` to understand reward tiers
2. On `/dashboard`, stake $FDH to earn APY
3. Receive tips from community posts
4. Claim daily streaks for bonuses
5. Reach higher tiers for increased rewards

---

## 🎨 Design System

### Colors
- **Primary**: Sky Blue (#38bdf8)
- **Secondary**: Purple (#a855f7)
- **Background**: Black (#000000)
- **Surface**: White/5-10% opacity
- **Accent**: Gold (#d4af37)

### Typography
- **Headings**: Space Grotesk / Inter (Bold, Uppercase, Wide Tracking)
- **Body**: Inter / System Sans-serif
- **Monospace**: Courier / SF Mono (for wallet addresses)

### Components
- **Buttons**: Gradient primary, outline secondary, ghost tertiary
- **Cards**: Glassmorphic with border and backdrop blur
- **Input**: Dark background with white/20 border
- **Modal**: Dark overlay with centered card

---

## 🔗 API Endpoints

### Art Generation
**POST** `/api/generate-art`
```json
{
  "prompt": "futuristic fashion nft",
  "style": "Fashion"
}
```

### NFT Minting
**POST** `/api/mint-nft`
```json
{
  "name": "My NFT",
  "description": "Description",
  "image": "ipfs://...",
  "chain": "base",
  "supply": 1,
  "royaltyPercentage": 10
}
```

### Create Post
**POST** `/api/posts`
```json
{
  "content": "Just minted an NFT!",
  "authorAddress": "0x...",
  "hashtags": ["#NFT", "#Web3"]
}
```

### Get User Profile
**GET** `/api/users/[address]`

### Update User Profile
**PATCH** `/api/users/[address]`
```json
{
  "username": "my_creator",
  "bio": "Digital artist"
}
```

---

## 🚀 Deployment

### Deploy to Vercel

1. Push code to GitHub
   ```bash
   git push origin main
   ```

2. Connect GitHub to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variables
   - Deploy

3. Access your live app
   ```
   https://your-project.vercel.app
   ```

### Deploy to Other Platforms

The app is optimized for any Node.js hosting:
- Netlify
- AWS Amplify
- Railway
- Render
- Heroku

---

## 🔒 Security & Best Practices

- ✅ Environment variables for sensitive keys
- ✅ IPFS for decentralized asset storage
- ✅ Smart contract best practices (future)
- ✅ Input validation on all forms
- ✅ XSS protection with Next.js
- ✅ CSRF tokens on state-changing operations

---

## 📚 Documentation & Resources

- **FX1 Website**: https://fx1.digital
- **Zora Docs**: https://docs.zora.co
- **Base Docs**: https://docs.base.org
- **Next.js Docs**: https://nextjs.org/docs
- **Wagmi Docs**: https://wagmi.sh
- **OpenAI API**: https://platform.openai.com/docs

---

## 🤝 Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📞 Support & Community

- **Discord**: [Join our community](https://discord.gg/fx1)
- **Twitter**: [@fx1_hubs](https://twitter.com/fx1_hubs)
- **Email**: support@fx1.digital
- **GitHub Issues**: Report bugs and request features

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🎉 Roadmap

- [x] AI Art Studio MVP
- [x] NFT Minting on Base/Zora
- [x] Social Feed with tipping
- [x] Dashboard and analytics
- [x] Creator profiles
- [ ] DAO governance features
- [ ] Advanced staking mechanisms
- [ ] Mobile app (React Native)
- [ ] Creator marketplace
- [ ] Metaverse integration

---

## 💬 Questions?

Feel free to reach out:
- Open an issue on GitHub
- Join our Discord
- Email us at support@fx1.digital

---

**Built with ❤️ for Web3 Creators**

**FX1 DIGITAL HUBS — Create, Mint, Connect. All in One Decentralized Hub.**
