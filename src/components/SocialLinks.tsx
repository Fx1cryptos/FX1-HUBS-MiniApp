const socialLinks = [
  {
    label: 'Warpcast',
    href: 'https://warpcast.com/fx1hubs',
    caption: 'Follow daily drops',
  },
  {
    label: 'X (Twitter)',
    href: 'https://twitter.com/fx1hubs',
    caption: 'Realtime updates',
  },
  {
    label: 'Zora',
    href: 'https://zora.co/fx1hubs',
    caption: 'Mint editions',
  },
]

export default function SocialLinks() {
  return (
    <div className="social-links">
      <h3 className="social-title">Connect with FX1</h3>
      <ul className="social-list">
        {socialLinks.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="social-link" target="_blank" rel="noreferrer">
              <span className="social-label">{item.label}</span>
              <span className="social-caption">{item.caption}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
