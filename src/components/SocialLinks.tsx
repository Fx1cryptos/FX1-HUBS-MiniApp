type SocialLink = {
  name: string
  href: string
  icon: string
}

const links: SocialLink[] = [
  { name: 'Website', href: 'https://fx1hubs.short.gy', icon: WEBSITE },
  { name: 'X', href: 'https://x.com/fx1_hubs?s=21', icon: X_ICON },
  { name: 'Farcaster', href: 'https://farcaster.xyz/fx1-faucet', icon: FARCASTER },
  { name: 'Zora', href: 'https://zora.co/@fx1_hubs', icon: ZORA },
  { name: 'Manifold', href: 'https://manifold.xyz/@fx1hubs', icon: MANIFOLD },
  { name: 'ArtStation', href: 'https://fx1hubs.artstation.com', icon: ARTSTATION },
  { name: 'Drip', href: 'https://drip.haus/profile/Fx1Hubs', icon: DRIP },
  { name: 'Telegram', href: 'https://t.me/fx1digitalhub', icon: TELEGRAM },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/olamide-olayemi-97998937a', icon: LINKEDIN },
  { name: 'Discord', href: 'https://discord.gg/5hRKNcv4', icon: DISCORD },
  { name: 'YouTube', href: 'https://youtube.com/@fx1_hubs?si=0zBkm_8suXRn41S0', icon: YOUTUBE },
  { name: 'TikTok', href: 'https://www.tiktok.com/@fx1_hubs', icon: TIKTOK },
]

export default function SocialLinks() {
  return (
    <div className="social-directory">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noreferrer noopener"
          className="social-directory__link"
        >
          <span
            className="social-directory__icon"
            aria-hidden="true"
            dangerouslySetInnerHTML={{ __html: link.icon }}
          />
          <span className="social-directory__label">{link.name}</span>
        </a>
      ))}
    </div>
  )
}

const WEBSITE = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.2"/><path d="M3 12h18" stroke="currentColor" stroke-width="1.2"/></svg>`
const X_ICON = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 4L10 14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M4 20L14 10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`
const FARCASTER = WEBSITE
const ZORA = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18" stroke="currentColor" stroke-width="1.4"/><path d="M3 12h18" stroke="currentColor" stroke-width="1.4"/></svg>`
const MANIFOLD = WEBSITE
const ARTSTATION = WEBSITE
const DRIP = WEBSITE
const TELEGRAM = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 4L2 12.5l5 1.8 1.6 5L11 18l10 6V4z" stroke="currentColor" stroke-width="0.8" fill="currentColor"/></svg>`
const LINKEDIN = WEBSITE
const DISCORD = WEBSITE
const YOUTUBE = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" stroke-width="1.2"/><path d="M10 9l6 3-6 3V9z" fill="currentColor"/></svg>`
const TIKTOK = WEBSITE
