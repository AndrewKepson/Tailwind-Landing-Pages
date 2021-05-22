import React from 'react'

import Navbar from './navbar'

export default function ArcaneLayout({ children }) {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <main>{children}</main>
    </div>
  )
}
