'use client'

import { useState } from 'react'
import Button from '@/components/Button'
import Card from '@/components/Card'
import { shareToTwitter, shareToLens, shareToFarcaster, generateHashtags } from '@/lib/social-utils'

interface Post {
  id: string
  author: string
  avatar: string
  content: string
  image?: string
  hashtags: string[]
  likes: number
  comments: number
  tips: number
  isLiked: boolean
  createdAt: string
}

const samplePosts: Post[] = [
  {
    id: '1',
    author: '@fx1_creator',
    avatar: '👨‍🎨',
    content: 'Just minted my first generative fashion NFT collection on Base! 🔥',
    hashtags: ['#NFTFashion', '#Base', '#Web3'],
    likes: 234,
    comments: 42,
    tips: 15,
    isLiked: false,
    createdAt: '2 hours ago',
  },
  {
    id: '2',
    author: '@digital_artist',
    avatar: '🎨',
    content: 'Using FX1 FLUX AI to generate avatars for the metaverse. The results are insane!',
    hashtags: ['#AI', '#Metaverse', '#FX1'],
    likes: 567,
    comments: 89,
    tips: 42,
    isLiked: false,
    createdAt: '4 hours ago',
  },
]

export default function FeedPage() {
  const [posts, setPosts] = useState<Post[]>(samplePosts)
  const [newPost, setNewPost] = useState('')
  const [isPosting, setIsPosting] = useState(false)

  const handleLike = (id: string) => {
    setPosts(posts.map((post) =>
      post.id === id
        ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
        : post
    ))
  }

  const handlePost = async () => {
    if (!newPost.trim()) return

    setIsPosting(true)
    try {
      const newPostObj: Post = {
        id: Date.now().toString(),
        author: '@your_address',
        avatar: '👤',
        content: newPost,
        hashtags: newPost.match(/#\w+/g) || [],
        likes: 0,
        comments: 0,
        tips: 0,
        isLiked: false,
        createdAt: 'just now',
      }
      setPosts([newPostObj, ...posts])
      setNewPost('')
    } finally {
      setIsPosting(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-2">
            Onchain Feed
          </h1>
          <p className="text-white/70">Share your creations and earn $FDH tips from the community</p>
        </div>

        <div className="space-y-6">
          <Card>
            <h2 className="text-lg font-bold uppercase tracking-widest mb-4">Create Post</h2>
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="Share your creation with the FX1 community... (use #hashtags)"
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-white/20 bg-black/50 text-white placeholder:text-white/40 focus:border-sky-400 focus:outline-none resize-none mb-4"
            />
            <div className="flex gap-3 justify-end">
              <Button variant="secondary">📎 Attach Image</Button>
              <Button onClick={handlePost} isLoading={isPosting}>
                📤 Post
              </Button>
            </div>
          </Card>

          <div className="space-y-4">
            {posts.map((post) => (
              <Card key={post.id}>
                <div className="flex gap-4 mb-4">
                  <div className="text-4xl">{post.avatar}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-white">{post.author}</div>
                    <div className="text-sm text-white/50">{post.createdAt}</div>
                  </div>
                </div>

                <p className="text-white/90 mb-3 leading-relaxed">{post.content}</p>

                {post.hashtags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.hashtags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-sm text-sky-300 hover:text-sky-200 cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex gap-2 text-sm text-white/60 py-4 border-y border-white/10">
                  <span className="hover:text-sky-300 cursor-pointer flex items-center gap-1">
                    💬 {post.comments}
                  </span>
                  <span className="hover:text-rose-300 cursor-pointer flex items-center gap-1">
                    ❤️ {post.likes}
                  </span>
                  <span className="hover:text-yellow-300 cursor-pointer flex items-center gap-1">
                    💰 {post.tips} $FDH
                  </span>
                </div>

                <div className="flex gap-2 mt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLike(post.id)}
                    className={post.isLiked ? 'text-rose-400' : ''}
                  >
                    {post.isLiked ? '❤️ Liked' : '🤍 Like'}
                  </Button>
                  <Button variant="ghost" size="sm">
                    💬 Reply
                  </Button>
                  <Button variant="ghost" size="sm">
                    💰 Tip with $FDH
                  </Button>
                  <Button variant="ghost" size="sm">
                    🔗 Share
                  </Button>
                </div>

                <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-xs text-white/60 mb-2">Share to:</p>
                  <div className="flex gap-2">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() =>
                        shareToTwitter({
                          url: window.location.href,
                          title: 'FX1 Digital Hubs',
                          text: post.content,
                          hashtags: post.hashtags,
                        })
                      }
                    >
                      𝕏 Twitter
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() =>
                        shareToLens({
                          url: window.location.href,
                          title: 'FX1 Digital Hubs',
                          text: post.content,
                          hashtags: post.hashtags,
                        })
                      }
                    >
                      🟣 Lens
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() =>
                        shareToFarcaster({
                          url: window.location.href,
                          title: 'FX1 Digital Hubs',
                          text: post.content,
                          hashtags: post.hashtags,
                        })
                      }
                    >
                      👾 Farcaster
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
