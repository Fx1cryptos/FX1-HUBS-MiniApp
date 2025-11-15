import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'FX1 Digital Hubs',
  description: 'Web3 Digital Wardrobe & Creator Hub on Base',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
