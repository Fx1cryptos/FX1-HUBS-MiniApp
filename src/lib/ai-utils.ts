export interface AIGenerationOptions {
  prompt: string
  style: string
  width?: number
  height?: number
  steps?: number
  guidance?: number
}

export interface AIGenerationResult {
  image: string
  seed: number
  model: string
  prompt: string
}

export async function generateArtWithRunware(
  options: AIGenerationOptions
): Promise<AIGenerationResult> {
  const apiKey = process.env.RUNWARE_API_KEY

  if (!apiKey) {
    throw new Error('Runware API key not configured')
  }

  const enhancedPrompt = `${options.prompt}, ${options.style} style, digital art, NFT, high quality, professional, vibrant colors`

  const payload = {
    prompt: enhancedPrompt,
    negativePrompt: 'low quality, blurry, distorted',
    width: options.width || 512,
    height: options.height || 512,
    steps: options.steps || 30,
    guidance: options.guidance || 7.5,
  }

  const mockResult: AIGenerationResult = {
    image: `https://via.placeholder.com/${payload.width}x${payload.height}.png?text=Generated+${encodeURIComponent(options.style)}+Art`,
    seed: Math.floor(Math.random() * 1000000),
    model: 'stable-diffusion-xl',
    prompt: enhancedPrompt,
  }

  return mockResult
}

export async function generateVideoWithRunware(
  prompt: string,
  duration: number = 5
) {
  const apiKey = process.env.RUNWARE_API_KEY

  if (!apiKey) {
    throw new Error('Runware API key not configured')
  }

  const mockVideo = {
    url: 'https://via.placeholder.com/512x512.mp4',
    duration,
    prompt,
    format: 'mp4',
  }

  return mockVideo
}

export const stylePrompts: Record<string, string> = {
  Fashion: 'high fashion, luxury, elegant, runway design, detailed clothing, intricate patterns',
  Metaverse:
    '3D rendered, virtual environment, futuristic, neon lights, digital landscape, immersive',
  Meme: 'humorous, viral, expressive, colorful, trending, social media style, fun',
  DeFi: 'financial visualization, abstract shapes, blockchain, liquidity flows, trading charts',
  Avatar:
    'character design, digital person, expressive face, unique features, modern style, portrait',
  'NFT Card': 'collectible card, trading card style, gradient background, ornamental borders',
  Runway: 'fashion runway, dramatic lighting, professional model, luxury showcase, cinematic',
}

export function getEnhancedPrompt(basePrompt: string, style: string): string {
  const styleDescriptor = stylePrompts[style] || ''
  return `${basePrompt}, ${styleDescriptor}, professional, high quality, detailed, 8k`
}

export interface NFTMetadataInput {
  name: string
  description: string
  image: string
  prompt: string
  style: string
  creator: string
}

export function createNFTMetadata(input: NFTMetadataInput) {
  return {
    name: input.name,
    description: input.description,
    image: input.image,
    attributes: [
      {
        trait_type: 'AI Style',
        value: input.style,
      },
      {
        trait_type: 'Generator',
        value: 'FX1 FLUX AI',
      },
      {
        trait_type: 'Creator',
        value: input.creator,
      },
      {
        trait_type: 'Created',
        value: new Date().toISOString().split('T')[0],
      },
    ],
    animation_url: undefined,
    external_url: `https://fx1-hubs.app/nft/${input.name.toLowerCase().replace(/\s+/g, '-')}`,
  }
}
