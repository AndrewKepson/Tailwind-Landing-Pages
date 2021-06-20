import React from 'react'

export default function KwhSaved() {
  return (
    <div className="p-4 w-full sm:w-6/12 lg:w-3/12">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-12 inline-block mb-6 w-12"
        fill="currentColor"
      >
        <path d="M7.941 18c-.297-1.273-1.637-2.314-2.187-3a8 8 0 1 1 12.49.002c-.55.685-1.888 1.726-2.185 2.998H7.94zM16 20v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1h8zm-3-9.995V6l-4.5 6.005H11v4l4.5-6H13z" />
      </svg>
      <h2 className="font-bold mb-1 text-4xl">16,000+</h2>
      <h3>Kilowatt-hours Saved</h3>
    </div>
  )
}
