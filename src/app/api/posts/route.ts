import { NextRequest, NextResponse } from 'next/server'

interface CreatePostRequest {
  content: string
  image?: string
  hashtags?: string[]
  authorAddress: string
}

interface PostResponse {
  id: string
  author: string
  content: string
  image?: string
  hashtags: string[]
  likes: number
  comments: number
  tips: number
  createdAt: string
}

export async function POST(request: NextRequest) {
  try {
    const body: CreatePostRequest = await request.json()

    if (!body.content) {
      return NextResponse.json(
        { error: 'Content is required' },
        { status: 400 }
      )
    }

    const post: PostResponse = {
      id: Date.now().toString(),
      author: body.authorAddress,
      content: body.content,
      image: body.image,
      hashtags: body.hashtags || [],
      likes: 0,
      comments: 0,
      tips: 0,
      createdAt: new Date().toISOString(),
    }

    return NextResponse.json(post, { status: 201 })
  } catch (error) {
    console.error('Post creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const limit = parseInt(searchParams.get('limit') || '10')
    const offset = parseInt(searchParams.get('offset') || '0')

    const samplePosts: PostResponse[] = [
      {
        id: '1',
        author: '@creator1',
        content: 'Just minted my first NFT on FX1!',
        hashtags: ['#NFT', '#FX1'],
        likes: 150,
        comments: 25,
        tips: 50,
        createdAt: new Date(Date.now() - 3600000).toISOString(),
      },
      {
        id: '2',
        author: '@artist2',
        content: 'Creating digital fashion with FX1 FLUX AI',
        hashtags: ['#Fashion', '#Web3'],
        likes: 320,
        comments: 45,
        tips: 120,
        createdAt: new Date(Date.now() - 7200000).toISOString(),
      },
    ]

    return NextResponse.json(
      {
        posts: samplePosts.slice(offset, offset + limit),
        total: samplePosts.length,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Post retrieval error:', error)
    return NextResponse.json(
      { error: 'Failed to retrieve posts' },
      { status: 500 }
    )
  }
}
