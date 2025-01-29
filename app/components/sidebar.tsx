"use client"

export default function Sidebar() {
  const suggestions = [
    { id: 1, user: 'alice', image: '/placeholder.svg?height=32&width=32', hasStory: true },
    { id: 2, user: 'bob', image: '/placeholder.svg?height=32&width=32', hasStory: false },
    { id: 3, user: 'charlie', image: '/placeholder.svg?height=32&width=32', hasStory: true },
  ]

  return (
    <div className="w-full md:w-1/3">
      <div className="flex items-center mb-6">
        <div className="relative">
          <img className="h-14 w-14" src="/placeholder.svg?height=56&width=56" alt="Your profile" />
          <div className="absolute inset-0 rounded-full border-2 border-green-500"></div>
        </div>
        <div className="ml-4">
          <p className="font-semibold text-gray-900 dark:text-white">yourUsername</p>
          <p className="text-gray-500 dark:text-gray-400">Your Name</p>
        </div>
      </div>
      <div>
        <h3 className="text-gray-500 dark:text-gray-400 font-semibold mb-4">Suggestions For You</h3>
        {suggestions.map((suggestion) => (
          <div key={suggestion.id} className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <div className="relative">
                <img className="h-8 w-8" src={suggestion.image} alt={suggestion.user} />
                {suggestion.hasStory && (
                  <div className="absolute inset-0 rounded-full border-2 border-green-500"></div>
                )}
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-900 dark:text-white">{suggestion.user}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Suggested for you</p>
              </div>
            </div>
            <button className="text-blue-500 dark:text-blue-400 font-semibold text-sm">Follow</button>
          </div>
        ))}
      </div>
    </div>
  )
}
