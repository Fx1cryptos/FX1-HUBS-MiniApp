import { NextRequest, NextResponse } from 'next/server'

interface MintNFTRequest {
  name: string
  description: string
  image: string
  prompt: string
  royaltyPercentage: number
  chain: 'base' | 'zora'
  supply: number
}

export async function POST(request: NextRequest) {
  try {
    const body: MintNFTRequest = await request.json()

    if (!body.name || !body.image) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const metadata = {
      name: body.name,
      description: body.description,
      image: body.image,
      prompt: body.prompt,
      attributes: [
        { trait_type: 'Style', value: body.prompt.split(' ')[0] },
        { trait_type: 'Chain', value: body.chain.toUpperCase() },
        { trait_type: 'Royalty', value: `${body.royaltyPercentage}%` },
      ],
    }

    const txHash = `0x${Math.random().toString(16).slice(2)}${Math.random().toString(16).slice(2)}`

    return NextResponse.json(
      {
        success: true,
        txHash,
        contractAddress: `0x${Math.random().toString(16).slice(2)}`,
        tokenId: Math.floor(Math.random() * 10000),
        metadata,
        chain: body.chain,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Minting error:', error)
    return NextResponse.json(
      { error: 'Failed to mint NFT' },
      { status: 500 }
    )
  }
}
