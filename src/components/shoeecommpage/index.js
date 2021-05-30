import React from 'react'

import Card from './card'

const shoeFeatures = [
  {
    feature: 'Donec fermentum',
    tagline: `Sed ac magna sit amet risus tristique interdum at vel velit. In hac
    habitasse platea dictumst.`,
    image: 'nike-airmax-1',
    altText: 'Nike Air Max Shoe'
  },
  {
    feature: 'Donec fermentum',
    tagline: `Sed ac magna sit amet risus tristique interdum at vel velit. In hac
    habitasse platea dictumst.`,
    image: 'nike-airmax-2',
    altText: 'Nike Air Max Shoe'
  },
  {
    feature: 'Donec fermentum',
    tagline: `Sed ac magna sit amet risus tristique interdum at vel velit. In hac
    habitasse platea dictumst.`,
    image: 'nike-airmax-3',
    altText: 'Nike Air Max Shoe'
  }
]

export default function ShoeEcommPageContent() {
  return (
    <section className="py-20 bg-blueGray-50">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus eget justo et iaculis. Quisque vitae nulla malesuada,
              auctor arcu vitae, luctus nisi. Sed elementum vitae ligula id
              imperdiet.
            </p>
            <p className="font-semibold">$179</p>
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
