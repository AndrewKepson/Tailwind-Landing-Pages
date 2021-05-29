import React from 'react'

export default function Menu({ hidden, handleMenu }) {
  const classes = {}

  return (
    <div className={`${hidden} navbar-menu relative z-50`}>
      <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
      <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
        <div className="flex items-center mb-8">
          <h2 className="mr-auto text-2xl font-semibold leading-none">
            Evergreen Real Estate
          </h2>
          <button onClick={handleMenu} className="navbar-close">
            <svg
              className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <ul>
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-semibold text-gray-900 hover:bg-green-700 hover:text-gray-50 rounded"
                href="#"
              >
                About
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-semibold text-gray-900 hover:bg-green-700 hover:text-gray-50 rounded"
                href="#"
              >
                Agents
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-semibold text-gray-900 hover:bg-green-700 hover:text-gray-50 rounded"
                href="#"
              >
                Neighborhoods
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-semibold text-gray-900 hover:bg-green-700 hover:text-gray-50 rounded"
                href="#"
              >
                Testimonials
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-auto">
          <div className="pt-6">
            <input
              className="w-full lg:mr-4 mb-2  pl-3 py-3 border rounded"
              type="e-mail"
              placeholder="Enter Your Email"
              disabled
            />
            <a
              className="block px-6 py-2 mb-2 text-sm text-center text-gray-500 font-bold leading-loose border border-gray-100 hover:border-gray-200 hover:bg-green-700 hover:text-gray-100 rounded"
              href="#"
            >
              Sign up
            </a>
          </div>
          <p className="mt-6 mb-4 text-sm text-center text-gray-400">
            <span>© 2021 All rights reserved.</span>
          </p>
        </div>
      </nav>
    </div>
  )
}
