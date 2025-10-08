import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'FX1 Digital Hubs',
  description: 'Onchain Fashion, AI & Web3 Innovation Hub',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main className="min-h-screen px-6 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
