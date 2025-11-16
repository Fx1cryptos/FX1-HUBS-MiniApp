import { NextRequest, NextResponse } from 'next/server'

interface GenerateArtRequest {
  prompt: string
  style: string
}

export async function POST(request: NextRequest) {
  try {
    const body: GenerateArtRequest = await request.json()

    if (!body.prompt || !body.style) {
      return NextResponse.json(
        { error: 'Missing prompt or style' },
        { status: 400 }
      )
    }

    const enhancedPrompt = `${body.prompt}, style: ${body.style}, digital art, NFT, high quality, futuristic, vibrant colors, professional`

    const image = `https://via.placeholder.com/512x512.png?text=Generated+${encodeURIComponent(body.style)}+Art`

    return NextResponse.json(
      {
        image,
        prompt: enhancedPrompt,
        style: body.style,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Generation error:', error)
    return NextResponse.json(
      { error: 'Failed to generate art' },
      { status: 500 }
    )
  }
}
