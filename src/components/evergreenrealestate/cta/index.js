import React from 'react'

import Icon from './icon'
import ContactForm from './contactform'

export default function CTA() {
  return (
    <section className="py-10">
      <div className="container px-4 mx-auto text-center">
        <Icon />
        <div className="max-w-2xl mx-auto">
          <span className="inline-block mb-2 text-xs text-gray-300 uppercase">
            Evergreen Real Estate
          </span>
          <h2 className="mb-6 text-4xl lg:text-5xl font-bold font-heading">
            Sign Up Today to Find Your Next Home
          </h2>
          <p className="mb-6 lg:mb-12 text-lg text-gray-500 leading-loose">
            Enter your email and name below and we'll send you a questionnaire
            to get started. You'll be viewing curated listings in no time.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
