import React from 'react'

import Quotation from './quotation'

export default function Testimonial() {
  return (
    <section className="pt-10">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="relative py-12 px-4 lg:px-24 mb-6 bg-gray-200 rounded-lg">
            <Quotation />
            <p className="text-lg text-gray-900 leading-loose">
              Evergreen Real Estate made it so easy to find the home of my
              dreams! All of the homes they sent me were vetted to match my
              needs and preferences. The agents were very responsive in
              answering questions, scheduling viewings, and supplying documents.
              I finally found my forever home.
            </p>
          </div>
          <p className="text-center text-lg text-gray-500">
            Customer Name, a Customer of Evergreen Realty
          </p>
        </div>
      </div>
    </section>
  )
}
