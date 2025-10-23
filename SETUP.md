# FX1 DIGITAL HUBS - Developer Setup Guide

Complete guide to set up and run FX1 Digital Hubs locally and deploy to production.

---

## 📋 Prerequisites

- **Node.js**: 18.17 or later
- **npm**: 9+ or **yarn**: 1.22+
- **Git**: Latest version
- **Wallet**: MetaMask, Phantom, or Nightly wallet installed
- **Code Editor**: VS Code recommended

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/fx1cryptos/FX1-DIGITAL-HUBS.git
cd FX1-DIGITAL-HUBS
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Create Environment Variables

Copy the example environment file and fill in your API keys:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your API keys (see Configuration section below).

### 4. Run Development Server

```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:3000`

### 5. Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

---

## ⚙️ Configuration

### Essential API Keys

#### 1. Alchemy (RPC Provider)

1. Go to [alchemy.com](https://www.alchemy.com)
2. Sign up and create an app
3. Copy your API key and RPC URL
4. Add to `.env.local`:
   ```
   NEXT_PUBLIC_ALCHEMY_API_KEY=your_key
   ALCHEMY_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/your_key
   ```

#### 2. WalletConnect (Multi-Wallet Support)

1. Visit [walletconnect.com](https://walletconnect.com)
2. Create a project
3. Copy your Project ID
4. Add to `.env.local`:
   ```
   NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id
   ```

#### 3. OpenAI API (AI Art Generation)

1. Go to [openai.com](https://platform.openai.com)
2. Create an account and API key
3. Add to `.env.local`:
   ```
   OPENAI_API_KEY=sk-your_key
   ```

#### 4. Pinata (IPFS Storage)

1. Sign up at [pinata.cloud](https://www.pinata.cloud)
2. Generate API keys
3. Add to `.env.local`:
   ```
   PINATA_API_KEY=your_key
   PINATA_SECRET_KEY=your_secret
   ```

#### 5. Zora API (NFT Minting)

1. Register at [zora.co](https://zora.co)
2. Get your API key from dashboard
3. Add to `.env.local`:
   ```
   ZORA_API_KEY=your_key
   ```

---

## 🔗 Smart Contract Setup (Optional)

### Deploy Smart Contracts

If you want to use custom smart contracts:

1. Install Hardhat:
   ```bash
   npm install --save-dev hardhat
   npx hardhat
   ```

2. Place contracts in `contracts/` directory

3. Deploy to Base Sepolia:
   ```bash
   npx hardhat run scripts/deploy.js --network base-sepolia
   ```

4. Add contract addresses to `.env.local`:
   ```
   NEXT_PUBLIC_NFT_CONTRACT_ADDRESS=0x...
   NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS=0x...
   ```

---

## 🧪 Testing

### Run Tests

```bash
npm test
# or
yarn test
```

### Test Coverage

```bash
npm run test:coverage
```

---

## 📝 Code Structure & Conventions

### Directory Organization

- **`/src/app`** - Next.js App Router pages
- **`/src/components`** - Reusable React components
- **`/src/lib`** - Utility functions and configs
- **`/src/types`** - TypeScript interfaces
- **`/src/app/api`** - API routes

### Naming Conventions

- **Components**: PascalCase (e.g., `Button.tsx`)
- **Pages**: kebab-case folders (e.g., `/studio/page.tsx`)
- **Types/Interfaces**: PascalCase (e.g., `UserProfile`)
- **Utilities**: camelCase (e.g., `formatAddress()`)

### File Naming

```
/components
  ├── Button.tsx           # Single component
  ├── Card.tsx
  ├── Modal.tsx
  └── SocialLinks.tsx

/lib
  ├── web3-config.ts      # Configuration files
  ├── utils.ts             # Utility functions
  └── pinata.ts            # External service integrations

/types
  └── web3.ts             # Type definitions

/app/api
  ├── generate-art/route.ts
  ├── mint-nft/route.ts
  └── posts/route.ts
```

---

## 🎨 Styling Guidelines

### TailwindCSS Conventions

- Use TailwindCSS utility classes for styling
- Define custom component classes in `/app/globals.css`
- Use `@apply` directive for component abstractions

Example:

```css
@layer components {
  .btn-primary {
    @apply rounded-full px-6 py-3 text-sm uppercase tracking-widest font-semibold;
    background: linear-gradient(135deg, #38bdf8 0%, #22d3ee 50%, #a855f7 100%);
  }
}
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Connect GitHub Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select GitHub repository

2. **Add Environment Variables**
   - In Vercel dashboard, go to Settings > Environment Variables
   - Add all variables from `.env.local`

3. **Deploy**
   - Vercel automatically deploys on push to main branch

4. **Custom Domain** (Optional)
   - In Vercel Settings > Domains
   - Add your custom domain

### Deploy to Other Platforms

#### Netlify

```bash
npm run build
# Connect to Netlify and set build command: npm run build
# Set publish directory: .next
```

#### AWS Amplify

```bash
amplify init
amplify add hosting
amplify publish
```

#### Self-Hosted (Docker)

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 🐛 Debugging

### Local Debugging

1. **Browser DevTools**
   - Open DevTools (F12)
   - Check Console for errors
   - Use Network tab to inspect API calls

2. **VS Code Debugging**
   Add to `.vscode/launch.json`:
   ```json
   {
     "version": "0.2.0",
     "configurations": [
       {
         "name": "Next.js",
         "type": "node",
         "request": "launch",
         "program": "${workspaceFolder}/node_modules/.bin/next",
         "args": ["dev"],
         "console": "integratedTerminal"
       }
     ]
   }
   ```

3. **Logging**
   Use `console.log()` or install a logger like winston:
   ```bash
   npm install winston
   ```

---

## 📚 Useful Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Wagmi Docs](https://wagmi.sh)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Web3 Resources
- [Ethereum Docs](https://ethereum.org/developers)
- [Zora Docs](https://docs.zora.co)
- [Base Docs](https://docs.base.org)
- [Viem Docs](https://viem.sh)

### External APIs
- [OpenAI API Reference](https://platform.openai.com/docs/api-reference)
- [Pinata API Docs](https://docs.pinata.cloud)
- [Alchemy API](https://docs.alchemy.com)

---

## 🔐 Security Checklist

- [ ] Never commit `.env.local` to git
- [ ] Rotate API keys regularly
- [ ] Use environment variables for all secrets
- [ ] Validate all user inputs
- [ ] HTTPS only in production
- [ ] Enable CORS properly
- [ ] Use secure headers (CSP, X-Frame-Options)
- [ ] Keep dependencies updated
- [ ] Audit smart contracts before deployment

---

## 📊 Performance Optimization

### Image Optimization
```tsx
import Image from 'next/image'

<Image
  src="/image.webp"
  alt="Description"
  width={500}
  height={500}
  priority
/>
```

### Code Splitting
Next.js automatically splits code by route. Use dynamic imports:

```tsx
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('./Component'), {
  loading: () => <Spinner />,
})
```

### Caching
Set cache headers for API responses:

```ts
res.setHeader('Cache-Control', 'public, s-maxage=3600')
```

---

## ❓ Troubleshooting

### Port Already in Use

```bash
# On macOS/Linux
lsof -i :3000
kill -9 <PID>

# On Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Dependencies Not Installing

```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

```bash
npm run build
# Check for type errors
```

### Wallet Connection Issues

- Ensure wallet is on correct network (Base or Sepolia)
- Try refreshing the page
- Clear browser cache and cookies
- Switch to a different wallet provider

---

## 📞 Support

- **Issues**: Open GitHub Issues for bugs
- **Discussions**: Use GitHub Discussions for questions
- **Discord**: Join our community Discord
- **Email**: support@fx1.digital

---

**Happy building! 🚀**
