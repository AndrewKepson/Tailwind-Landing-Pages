import React from 'react'

export default function DeliveryTime() {
  return (
    <div className="p-4 w-full sm:w-6/12 lg:w-3/12">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-12 inline-block mb-6 w-12"
        fill="currentColor"
      >
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1-10V7h-2v7h6v-2h-4z" />
      </svg>
      <h2 className="font-bold mb-1 text-4xl">1.5 Hours</h2>
      <h3> Average Time Roast to Door </h3>
    </div>
  )
}
