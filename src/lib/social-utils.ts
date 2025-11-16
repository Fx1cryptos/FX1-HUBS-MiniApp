export interface SocialShareOptions {
  url: string
  title: string
  text: string
  image?: string
  hashtags?: string[]
}

export function generateTwitterShareUrl(options: SocialShareOptions): string {
  const hashtags = options.hashtags?.join(' ') || ''
  const text = `${options.text} ${hashtags} #FX1DigitalHubs #NFT #Web3`
  const url = new URL('https://twitter.com/intent/tweet')
  url.searchParams.set('text', text)
  url.searchParams.set('url', options.url)
  return url.toString()
}

export function generateLensShareUrl(options: SocialShareOptions): string {
  const hashtags = options.hashtags?.map((tag) => `#${tag.replace('#', '')}`).join(' ') || ''
  const text = `${options.text}\n\n${hashtags}\n\n#NFT #Web3 #FX1DigitalHubs`
  const url = new URL('https://lens.xyz')
  return `${url.toString()}?post=${encodeURIComponent(text)}`
}

export function generateFarcasterShareUrl(options: SocialShareOptions): string {
  const hashtags = options.hashtags?.map((tag) => `#${tag.replace('#', '')}`).join(' ') || ''
  const text = `${options.text}\n\n${hashtags}\n\n#NFT #FX1DigitalHubs`
  return `https://warpcast.com/~/compose?text=${encodeURIComponent(text)}&embeds=${encodeURIComponent(options.url)}`
}

export function shareToTwitter(options: SocialShareOptions): void {
  if (typeof window !== 'undefined') {
    window.open(generateTwitterShareUrl(options), '_blank', 'width=550,height=420')
  }
}

export function shareToLens(options: SocialShareOptions): void {
  if (typeof window !== 'undefined') {
    window.open(generateLensShareUrl(options), '_blank', 'width=550,height=420')
  }
}

export function shareToFarcaster(options: SocialShareOptions): void {
  if (typeof window !== 'undefined') {
    window.open(generateFarcasterShareUrl(options), '_blank', 'width=550,height=420')
  }
}

export function generateShareCaption(nftName: string, style: string): string {
  const captions = [
    `Just minted "${nftName}" on FX1 Digital Hubs! Created with AI in ${style} style.`,
    `New NFT drop: ${nftName} - A ${style} creation powered by FX1 FLUX AI ���`,
    `Presenting ${nftName}, a ${style} digital art piece minted on Base via FX1 🚀`,
    `${nftName} is now live! ${style} artistry meets blockchain on FX1 Digital Hubs 💎`,
  ]

  return captions[Math.floor(Math.random() * captions.length)]
}

export function generateHashtags(style: string): string[] {
  const baseHashtags = ['#NFT', '#FX1', '#Web3', '#CreatorEconomy']

  const styleHashtags: Record<string, string[]> = {
    Fashion: ['#DigitalFashion', '#Wearables', '#FashionNFT'],
    Metaverse: ['#Metaverse', '#3DArt', '#VirtualWorld'],
    Meme: ['#MemeNFT', '#ViralArt', '#Community'],
    DeFi: ['#DeFi', '#Crypto', '#FinanceArt'],
    Avatar: ['#AvatarNFT', '#DigitalIdentity', '#CharacterDesign'],
    'NFT Card': ['#TradingCard', '#CollectorItem', '#NFTCard'],
    Runway: ['#FashionRunway', '#LuxuryNFT', '#HighFashion'],
  }

  const specific = styleHashtags[style] || []
  return [...baseHashtags, ...specific]
}
