import React from 'react'

export default function Navbar({ handleMenu }) {
  return (
    <nav className="flex justify-between items-center px-4 md:px-32 lg:px-44 py-8">
      <h1 className="text-white text-2xl leading-none">
        Evergreen Real Estate
      </h1>
      <button
        onClick={handleMenu}
        className="block navbar-burger text-gray-100 hover:text-gray-200 rounded focus:outline-none"
      >
        <svg
          className="h-4 w-4"
          fill="currentColor "
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Mobile menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>
    </nav>
  )
}
