import React from 'react'

import { cardData } from '../../../data/sustainableroasters/data'

export default function Cards() {
  return (
    <section className="bg-gray-50 py-20 text-center text-gray-500">
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-wrap -mx-4  items-center mb-4">
          <div className="mx-auto px-4 w-full lg:w-8/12">
            <h2 className="font-medium mb-1 text-green-400">
              About Our Coffee
            </h2>
            <h3 className="font-bold mb-1 text-3xl text-gray-900">
              What Makes Our Coffee Better?
            </h3>
            <p className="mb-4">
              Organically grown. Fresh roasted. Direct to consumer.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          {cardData.map((card, i) => (
            <div key={i} className="w-full p-4 sm:w-6/12">
              <div className="py-4">
                <span className="bg-white border-4 inline-block mb-4 p-12">
                  <img src={card.photo} />
                </span>
                <h4 className="font-bold mb-2 text-gray-900 text-xl">
                  {card.heading}
                </h4>
                <p className="mb-4">{card.content}</p>
                <a href="#" className="hover:text-green-700 text-green-500">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
