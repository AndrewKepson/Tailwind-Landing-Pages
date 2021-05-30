import React from 'react'

import Card from './card'

const shoeFeatures = [
  {
    feature: 'Bold Familiarity',
    tagline: `A fresh take on a classic shape acts as a buffer against repressive ideologies in fashion.`,
    image: 'nike-airmax-1',
    altText: 'Nike Air Max Shoe'
  },
  {
    feature: 'Responsibly Sustainable',
    tagline: `Today's consumer is concerned with the impact of their choices on the world around them.`,
    image: 'nike-airmax-2',
    altText: 'Nike Air Max Shoe'
  },
  {
    feature: 'Unmatched Performance',
    tagline: `Don't mistake style for inefficiency. If you're going to do something hard, look good doing it.`,
    image: 'nike-airmax-3',
    altText: 'Nike Air Max Shoe'
  }
]

export default function ShoeEcommPageContent() {
  return (
    <section className="h-screen py-20 bg-blueGray-50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-start justify-between max-w-2xl lg:max-w-full mb-12">
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              <span>Finally get </span>
              <span className="text-pink-600">the shoes</span>
              <span> you really want</span>
            </h2>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-16">
            <p className="text-blueGray-400 leading-loose">
              Shoes are more than protection for our feet. Shoes take us places.
              Shoes lift us up, make us feel supported. Shoes are expressions of
              ourself and our passion. Only you can walk in your shoes. This is
              not a real store, and I am in no way associated with Nike. Images
              by{' '}
              <a
                href="https://pixabay.com/users/grailify-15961668/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5041717"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                grailify
              </a>{' '}
              from{' '}
              <a
                href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5041717"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                Pixabay
              </a>
            </p>
            <p className="font-semibold">$179</p>
            <button className="inline-block bg-indigo-800 hover:bg-pink-700 py-4 px-8 text-xs text-white text-center font-semibold leading-none align-self-center rounded">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 -mb-6 text-center">
          {shoeFeatures.map((feature, i) => (
            <Card key={i} index={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
