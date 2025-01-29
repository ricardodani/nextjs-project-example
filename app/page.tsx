"use client"

import { useState } from "react"
import Header from "./components/header"
import Feed from "./components/feed"
import Sidebar from "./components/sidebar"
import LoggedOffPage from "./components/logged-off-page"

export default function Home() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  return (
    <div className={`min-h-screen bg-gray-50`}>
      <Header isLoggedIn={isLoggedIn} onLogin={handleLogin} />
      <main className="container mx-auto pt-24 px-4 sm:px-6 lg:px-8">
        {isLoggedIn ? (
          <div className="flex flex-col md:flex-row gap-8">
            <Feed />
            <Sidebar />
          </div>
        ) : (
          <LoggedOffPage onLogin={handleLogin} />
        )}
      </main>
    </div>
  );
}
