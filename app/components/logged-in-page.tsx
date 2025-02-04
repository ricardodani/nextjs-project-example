"use client"

import Feed from "./feed"
import Sidebar from "./sidebar"

export default function LoggedInPage() {

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <Feed />
      <Sidebar />
    </div>
  );
}
