# Project: FX1 HUBS - Starter Next.js MiniApp (3D)

Below is a complete starter scaffold for a Next.js mini app that targets Farcaster MiniApp usage and includes a 3D interface (React Three Fiber) for showing NFT cards from your Pinata CID. Paste these files into your repository `fx1-hubs-miniapp`.

---

### FILE: package.json
```json
{
  "name": "fx1-hubs-miniapp",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.0.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "axios": "1.5.0",
    "three": "0.160.0",
    "@react-three/fiber": "8.12.0",
    "@react-three/drei": "9.48.0",
    "neynar": "^0.1.0" 
  }
}
```

---

### FILE: .gitignore
```
node_modules
.next
.env.local
.DS_Store
```

---

### FILE: README.md
```md
# FX1 HUBS MINIAPP

Styling the Blockchain. Designing the Future.

This starter includes:
- Next.js app (app router)
- Farcaster Frame API placeholder
- 3D NFT gallery powered by React Three Fiber
- Pinata IPFS integration (static CID usage)

Pinata CID: `bafybeigc6v5wizyuksl6wxninz76irvrfjscuzjgydkctbzirsu6oiro34`

## Run
1. `npm install`
2. `npm run dev`

Open http://localhost:3000

## Env vars
Create `.env.local` with any keys you need (Zora, Manifold, Pinata JWT). This starter reads the static CID from code; change as needed.
```

---

### FILE: public/README-assets.md
```txt
Place your assets here (logo.png, flyer.png). You can download the 3D flyer into public/flyer.png.
Flyer from Pinata CID is available at:
https://gateway.pinata.cloud/ipfs/bafybeigc6v5wizyuksl6wxninz76irvrfjscuzjgydkctbzirsu6oiro34
```

---

### FILE: next.config.js
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: ['gateway.pinata.cloud', 'gateway.ipfscdn.io']
  }
}
module.exports = nextConfig
```

---

### FILE: tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx"
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

---

### FILE: app/layout.tsx
```tsx
import './globals.css'

export const metadata = {
  title: 'FX1 HUBS MiniApp',
  description: 'Styling the Blockchain & Metaverse — FX1 HUBS'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
```

---

### FILE: app/globals.css
```css
:root{
  --navy: #041428;
  --gold: #c9a94b;
  --white: #ffffff;
  --electric: #0ab3ff;
}
html,body,#root{height:100%;}
body{margin:0;font-family:Inter,Arial,Helvetica,sans-serif;background:linear-gradient(180deg,var(--navy) 0%, #071a2a 100%);color:var(--white)}
main{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;gap:20px;padding:32px}
.header{width:100%;max-width:1200px;display:flex;align-items:center;justify-content:space-between}
.brand{display:flex;align-items:center;gap:12px}
.brand img{width:56px;height:56px;border-radius:8px}
.h1{font-size:20px;font-weight:700}
.card{background:rgba(255,255,255,0.04);padding:16px;border-radius:12px;box-shadow:0 6px 18px rgba(0,0,0,0.6);}

.canvas-wrap{width:100%;height:640px;max-width:1200px;border-radius:14px;overflow:hidden}
.info{max-width:1200px;color:#d9eaf6}
.btn{background:var(--gold);color:var(--navy);padding:10px 14px;border-radius:8px;font-weight:600}
.small{font-size:13px;opacity:0.9}
```

---

### FILE: app/page.tsx
```tsx
'use client'
import Scene from '../components/Scene'

export default function Page() {
  return (
    <main>
      <header className="header">
        <div className="brand">
          <img src="/flyer.png" alt="FX1 HUBS" />
          <div>
            <div className="h1">FX1 HUBS MINIAPP</div>
            <div className="small">Styling the Blockchain & Metaverse — Powered by $FDH</div>
          </div>
        </div>
        <div>
          <a className="btn" href="https://x.com/fx1_hubs?s=21" target="_blank">Follow @fx1_hubs</a>
        </div>
      </header>

      <section className="card canvas-wrap">
        <Scene />
      </section>

      <section className="info">
        <p>Pinata CID: <code>bafybeigc6v5wizyuksl6wxninz76irvrfjscuzjgydkctbzirsu6oiro34</code></p>
        <p>Farcaster: <a href="https://farcaster.xyz/fx1-faucet" target="_blank">fx1-faucet</a> • Zora: <a href="https://zora.co/@fx1_hubs" target="_blank">@fx1_hubs</a> • Manifold: <a href="https://manifold.xyz/@fx1hubs" target="_blank">@fx1hubs</a></p>
      </section>
    </main>
  )
}
```

---

### FILE: components/Scene.tsx
```tsx
'use client'
import React, { Suspense, useMemo } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import * as THREE from 'three'

// Use your Pinata CID here. We will fetch a set of images (example pattern) from that CID.
const PINATA_CID = 'bafybeigc6v5wizyuksl6wxninz76irvrfjscuzjgydkctbzirsu6oiro34'
const gateway = (path: string) => `https://gateway.pinata.cloud/ipfs/${PINATA_CID}/${path}`

function FloatingCard({ url, pos = [0, 0, 0], rot = [0, 0, 0] }: any) {
  const texture = useLoader(THREE.TextureLoader, url)
  return (
    <mesh position={pos} rotation={rot} castShadow>
      <planeGeometry args={[2.2, 2.8]} />
      <meshStandardMaterial map={texture} metalness={0.25} roughness={0.6} />
    </mesh>
  )
}

function Gallery() {
  // Example filenames — replace with actual filenames in your IPFS folder
  const files = useMemo(() => ['nft1.png', 'nft2.png', 'nft3.png', 'nft4.png'], [])

  return (
    <group>
      {files.map((f, i) => {
        const angle = (i / files.length) * Math.PI * 2
        const x = Math.cos(angle) * 4
        const z = Math.sin(angle) * 3
        const y = 1 - i * 0.2
        return <FloatingCard key={f} url={gateway(f)} pos={[x, y, z]} rot={[0, angle, 0]} />
      })}
    </group>
  )
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 1.5, 9], fov: 45 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <Suspense fallback={<Html center>Loading 3D Gallery...</Html>}>
        <Gallery />
      </Suspense>
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </Canvas>
  )
}
```

---

### FILE: app/api/frame/route.ts
```ts
import { NextResponse } from 'next/server'

export async function GET() {
  const metadata = {
    name: 'FX1 HUBS MiniApp',
    description: 'Styling the Blockchain & Metaverse — Powered by $FDH',
    image: 'https://gateway.pinata.cloud/ipfs/bafybeigc6v5wizyuksl6wxninz76irvrfjscuzjgydkctbzirsu6oiro34',
    button: 'Enter FX1 HUBS'
  }
  return NextResponse.json(metadata)
}
```

---

### FILE: app/api/mint/route.ts
```ts
import { NextResponse } from 'next/server'

// Placeholder endpoint for minting flow. Connect Zora or your chosen minting backend here.
export async function POST(req: Request) {
  const body = await req.json()
  // Validate body, perform mint transaction, sign with server key or instruct client
  // This is a stub — replace with Zora SDK / Base contract calls
  return NextResponse.json({ ok: true, message: 'Mint endpoint placeholder', payload: body })
}
```

---

### FILE: utils/ipfs.ts
```ts
export const pinataCID = 'bafybeigc6v5wizyuksl6wxninz76irvrfjscuzjgydkctbzirsu6oiro34'
export const ipfsGateway = (path: string) => `https://gateway.pinata.cloud/ipfs/${pinataCID}/${path}`
```

---

### FILE: public/flyer.png

(Place your promotional flyer image in `public/flyer.png`. You can download a copy from your Pinata CID gateway and save it here.)

---

### FILE: .env.example
```
# Example env vars
ZORA_API_KEY=
PINATA_JWT=
MANIFOLD_API_KEY=
NEYNAR_API_KEY=
```

---

## Notes & Next Steps
- This starter intentionally keeps minting / wallet signing light — it provides the UI, 3D scene, and placeholder backend endpoints where you plug in Zora SDK, Base RPC, and Farcaster authentication (Neynar).  
- Replace the sample `nft1.png` filenames in `components/Scene.tsx` with the actual filenames in your IPFS folder (or implement a server endpoint to list files from the CID).  
- To add Farcaster sign-in, install and configure Neynar or other Farcaster auth library in the frontend and use the Frame metadata endpoint (`/api/frame`) as the mini app manifest data source.  
- For real minting flows, implement server-side signing or use client-side wallet flows (e.g. via viem/wagmi) and integrate Zora's SDK.

---

Happy building — this canvas contains the full starter code. Paste it into your repo, run `npm install`, then `npm run dev`, and you should see the 3D gallery and the simple Farcaster frame metadata endpoint.
