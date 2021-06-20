import React from 'react'

export default function CupsDelivered() {
  return (
    <div className="p-4 w-full sm:w-6/12 lg:w-3/12">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-12 inline-block mb-6 w-12"
        fill="currentColor"
      >
        <path d="M5 3h15a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V4a1 1 0 0 1 1-1zm13 2v3h2V5h-2zM2 19h18v2H2v-2z" />
      </svg>
      <h2 className="font-bold mb-1 text-4xl">1,000,000+</h2>
      <h3>Cups of Coffee Delivered</h3>
    </div>
  )
}
