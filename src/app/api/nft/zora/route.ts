import { NextRequest, NextResponse } from 'next/server'

interface ZoraMintRequest {
  contractAddress?: string
  tokenName: string
  tokenDescription: string
  imageUrl: string
  royaltyPercentage: number
  chainId: number
}

export async function POST(request: NextRequest) {
  try {
    const body: ZoraMintRequest = await request.json()

    if (!body.tokenName || !body.imageUrl) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const zoraApiKey = process.env.ZORA_API_KEY

    if (!zoraApiKey) {
      return NextResponse.json(
        { error: 'Zora API not configured' },
        { status: 500 }
      )
    }

    const metadata = {
      name: body.tokenName,
      description: body.tokenDescription,
      image: body.imageUrl,
      attributes: [
        {
          trait_type: 'Minted on',
          value: 'FX1 Digital Hubs',
        },
        {
          trait_type: 'Royalty',
          value: `${body.royaltyPercentage}%`,
        },
      ],
    }

    const mockTxHash = `0x${Math.random().toString(16).slice(2)}${Math.random().toString(16).slice(2)}`

    return NextResponse.json(
      {
        success: true,
        transactionHash: mockTxHash,
        contractAddress: body.contractAddress || `0x${Math.random().toString(16).slice(2)}`,
        tokenId: Math.floor(Math.random() * 10000),
        metadata,
        zoraUrl: `https://zora.co/collect/base/${body.contractAddress}/${Math.floor(Math.random() * 10000)}`,
        chain: 'zora',
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Zora minting error:', error)
    return NextResponse.json(
      { error: 'Failed to mint on Zora' },
      { status: 500 }
    )
  }
}
