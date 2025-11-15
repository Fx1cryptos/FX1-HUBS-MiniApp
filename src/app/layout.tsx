import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'FX1 Digital Hubs - Web3 Digital Wardrobe & Creator Hub on Base',
  description: 'Create on-chain fashion, mint NFT wearables, and connect with creators on Base. Powered by Zora, Farcaster, and $FX1_HUBS token.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta charSet="utf-8" />
      </head>
      <body className="page-root text-white m-0 p-0">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
