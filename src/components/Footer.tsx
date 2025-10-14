export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/90">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs uppercase tracking-[0.35em] text-white/60 md:flex-row">
        <span>&copy; {new Date().getFullYear()} FX1 Digital Hubs</span>
        <span>Onchain Fashion · AI Innovation · Web3 Culture</span>
      </div>
    </footer>
  )
}
