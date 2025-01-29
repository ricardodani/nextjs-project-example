import { Heart, Image, MessageCircle, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function LoggedOffPage({ onLogin }: { onLogin: () => void }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <Heart className="mx-auto h-12 w-12 text-red-500" />
          <h1 className="mt-4 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Welcome to nossarede.org
          </h1>
          <p className="mt-3 text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
            Connect, share, and discover with our vibrant community
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Image className="h-6 w-6" />}
              title="Share Your Moments"
              description="Post photos and videos to share your life with friends and followers."
            />
            <FeatureCard
              icon={<MessageCircle className="h-6 w-6" />}
              title="Engage in Conversations"
              description="Comment on posts, reply to others, and have meaningful discussions."
            />
            <FeatureCard
              icon={<Users className="h-6 w-6" />}
              title="Build Your Network"
              description="Follow friends, family, and interesting people to grow your network."
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6" />}
              title="Discover Trending Content"
              description="Explore popular posts and stay updated with the latest trends."
            />
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <button className="mr-4">
            <Link href="/signup">Sign Up</Link>
          </button>
          <button onClick={onLogin}>
            Log In
          </button>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">{icon}</div>
      <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-base text-gray-500 dark:text-gray-300">{description}</p>
    </div>
  )
}
