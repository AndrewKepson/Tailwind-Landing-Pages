import React from 'react'

export default function Hero() {
  return (
    <section className="bg-gray-800 relative text-white">
      <img
        src="https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDE5fHxjb2ZmZWV8ZW58MHx8fHwxNjI0MjIyNTQ3&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=1440&fit=max"
        className="absolute h-full inset-0 object-cover object-left-bottom w-full"
        alt="..."
        width="1080"
        height="720"
      />
      <div className="bg-gray-100 bg-opacity-30 container mx-auto px-4 py-48 relative">
        <div className="flex flex-wrap -mx-4">
          <div className="mx-auto px-4 text-center w-full lg:w-8/12">
            <h1 className="font-extrabold mb-4 text-6xl text-green-400">
              Brewed With Love
            </h1>
            <p className="font-light mb-6 text-xl">
              Premium, organic coffee beans.
            </p>
            <a
              href="#"
              className="bg-green-400 font-light hover:bg-green-500 inline-block px-5 py-2 rounded-sm text-white uppercase"
            >
              Get It Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
