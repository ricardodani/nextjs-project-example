"use client"

import Link from "next/link"
import { Heart, Search, PlusSquare, Compass, MessageCircle } from "lucide-react"

export default function Header({ isLoggedIn = false, onLogin }: { isLoggedIn?: boolean; onLogin: () => void }) {

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 z-10 shadow-sm">
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        <Link href="/" className="flex items-center">
          <Heart className="h-8 w-8 text-red-500 mr-2" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">nossarede.org</span>
        </Link>
        {isLoggedIn ? (
          <>
            <div className="hidden md:block">
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-md px-3 py-1 focus:outline-none"
              />
            </div>
            <nav className="flex items-center space-x-4">
              <Link href="/">
                <Search className="h-6 w-6 text-gray-900 dark:text-white" />
              </Link>
              <Link href="/explore">
                <Compass className="h-6 w-6 text-gray-900 dark:text-white" />
              </Link>
              <Link href="/new-post">
                <PlusSquare className="h-6 w-6 text-gray-900 dark:text-white" />
              </Link>
              <Link href="/messages">
                <MessageCircle className="h-6 w-6 text-gray-900 dark:text-white" />
              </Link>
              <Link href="/profile">
                <img src="/placeholder.svg?height=32&width=32" alt="Profile" className="h-8 w-8 rounded-full" />
              </Link>
            </nav>
          </>
        ) : (
          <nav className="flex items-center space-x-4">
            <button onClick={onLogin}>
              <Link href="#">Log In</Link>
            </button>
            <button>
              <Link href="/signup">Sign Up</Link>
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
