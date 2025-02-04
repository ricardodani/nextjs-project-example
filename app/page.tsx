"use client"

import { useState } from "react"
import Header from "./components/header"
import LoggedOffPage from "./components/logged-off-page"
import LoggedInPage from "./components/logged-in-page"

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
          <LoggedInPage />
        ) : (
          <LoggedOffPage onLogin={handleLogin} />
        )}
      </main>
    </div>
  );
}
