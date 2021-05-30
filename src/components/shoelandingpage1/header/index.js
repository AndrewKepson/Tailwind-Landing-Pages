import React from 'react'

const navigation = [
  { name: 'Products', href: '#' },
  { name: 'Collections', href: '#' },
  { name: 'Retailers/Wholesalers', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'About Us', href: '#' }
]

export default function Header() {
  return (
    <header className="bg-indigo-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <h1 className="text-white">Shoes</h1>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-white hover:text-indigo-50"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
