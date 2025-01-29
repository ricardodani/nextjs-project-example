"use client"

import { useState } from 'react'
import { Heart, MessageCircle, Send, Bookmark, ChevronLeft, ChevronRight } from 'lucide-react'

type Comment = {
  id: number
  user: string
  content: string
  likes: number
  subComments: { id: number; user: string; content: string }[]
}

type Post = {
  id: number
  user: string
  images: string[]
  likes: number
  comments: Comment[]
  shares: number
  caption: string
  hasStory: boolean
}

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      user: 'johndoe',
      images: ['/placeholder.svg?height=400&width=400', '/placeholder.svg?height=400&width=400&text=Image+2'],
      likes: 123,
      comments: [
        {
          id: 1,
          user: 'janedoe',
          content: 'Great photo!',
          likes: 5,
          subComments: [
            { id: 1, user: 'bobsmith', content: 'I agree!' },
          ]
        },
        {
          id: 2,
          user: 'alicegreen',
          content: 'Where was this taken?',
          likes: 2,
          subComments: []
        }
      ],
      shares: 10,
      caption: 'Beautiful day!',
      hasStory: true
    },
    {
      id: 2,
      user: 'janedoe',
      images: ['/placeholder.svg?height=400&width=400&text=Single+Image'],
      likes: 456,
      comments: [
        {
          id: 3,
          user: 'johndoe',
          content: 'Amazing view!',
          likes: 8,
          subComments: []
        }
      ],
      shares: 25,
      caption: 'Sunset vibes',
      hasStory: false
    },
  ])

  const [activeImageIndex, setActiveImageIndex] = useState<{ [key: number]: number }>({})

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ))
  }

  const handleCommentLike = (postId: number, commentId: number) => {
    setPosts(posts.map(post => 
      post.id === postId ? {
        ...post,
        comments: post.comments.map(comment =>
          comment.id === commentId ? { ...comment, likes: comment.likes + 1 } : comment
        )
      } : post
    ))
  }

  const handleImageNav = (postId: number, direction: 'prev' | 'next') => {
    setActiveImageIndex(prev => {
      const currentIndex = prev[postId] || 0
      const post = posts.find(p => p.id === postId)
      if (!post) return prev
      const newIndex = direction === 'next' 
        ? (currentIndex + 1) % post.images.length
        : (currentIndex - 1 + post.images.length) % post.images.length
      return { ...prev, [postId]: newIndex }
    })
  }

  return (
    <div className="w-full md:w-2/3 space-y-8">
      {posts.map((post) => (
        <div key={post.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md">
          <div className="flex items-center p-4">
            <div className="relative">
              <img className="h-10 w-10" src={`/placeholder.svg?height=40&width=40&text=${post.user}`} alt={post.user} />
              {post.hasStory && (
                <div className="absolute inset-0 rounded-full border-2 border-green-500"></div>
              )}
            </div>
            <span className="ml-3 font-semibold text-gray-900 dark:text-white">{post.user}</span>
          </div>
          <div className="relative">
            <img 
              src={post.images[activeImageIndex[post.id] || 0]} 
              alt={`Post by ${post.user}`} 
              className="w-full"
            />
            {post.images.length > 1 && (
              <>
                <button 
                  onClick={() => handleImageNav(post.id, 'prev')}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button 
                  onClick={() => handleImageNav(post.id, 'next')}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </div>
          <div className="p-4">
            <div className="flex justify-between mb-2">
              <div className="flex space-x-4">
                <button onClick={() => handleLike(post.id)} className="flex items-center space-x-1">
                  <Heart className={`h-6 w-6 ${post.likes % 2 === 0 ? 'text-gray-500' : 'text-red-500 fill-current'}`} />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{post.likes}</span>
                </button>
                <button className="flex items-center space-x-1">
                  <MessageCircle className="h-6 w-6 text-gray-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{post.comments.length}</span>
                </button>
                <button className="flex items-center space-x-1">
                  <Send className="h-6 w-6 text-gray-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{post.shares}</span>
                </button>
              </div>
              <Bookmark className="h-6 w-6 text-gray-500" />
            </div>
            <p className="text-gray-900 dark:text-white"><span className="font-semibold">{post.user}</span> {post.caption}</p>
            <div className="mt-4 space-y-4">
              {post.comments.map((comment) => (
                <div key={comment.id} className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <img className="h-8 w-8" src={`/placeholder.svg?height=32&width=32&text=${comment.user}`} alt={comment.user} />
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 dark:text-white">
                        <span className="font-semibold">{comment.user}</span> {comment.content}
                      </p>
                      <div className="flex items-center space-x-2 mt-1">
                        <button 
                          onClick={() => handleCommentLike(post.id, comment.id)}
                          className="text-xs text-gray-500 dark:text-gray-400"
                        >
                          Like
                        </button>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{comment.likes} likes</span>
                        <button className="text-xs text-gray-500 dark:text-gray-400">Reply</button>
                      </div>
                    </div>
                  </div>
                  {comment.subComments.length > 0 && (
                    <div className="ml-10 space-y-2">
                      {comment.subComments.map((subComment) => (
                        <div key={subComment.id} className="flex items-start space-x-2">
                          <img className="h-6 w-6" src={`/placeholder.svg?height=24&width=24&text=${subComment.user}`} alt={subComment.user} />
                          <p className="text-sm text-gray-900 dark:text-white">
                            <span className="font-semibold">{subComment.user}</span> {subComment.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
