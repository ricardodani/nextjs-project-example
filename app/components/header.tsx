"use client"

import Button from "next/link"
import Logo from "./logo";

export default function Header() {

  return (
    <header className="bg-white bg-opacity-80 backdrop-blur-md shadow-sm sticky top-0 z-10 py-4">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Logo className="h-6 w-6" />
            <span className="ml-2 text-xl font-bold">nossarede.org</span>
          </div>
          <Button href="" className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-4 py-2 rounded">
            Log In
          </Button>
        </div>
      </header>
  )
}
