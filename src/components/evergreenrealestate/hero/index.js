import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Menu from '../menu'
import Navbar from '../navbar'

export default function Hero() {
  const [hidden, setHidden] = useState('hidden')

  const handleMenu = () =>
    hidden === 'hidden' ? setHidden('block') : setHidden('hidden')

  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "rockrimmon" }) {
        id
        childImageSharp {
          gatsbyImageData(
            width: 700
            quality: 80
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)
  return (
    <div className="bg-green-800 px-12">
      <Navbar handleMenu={handleMenu} />
      <section className="relative bg-green-800 overflow-x-hidden">
        <div className="container flex flex-col-reverse md:flex-row px-4 mx-auto justify-around">
          <div className="lg:mt-16 lg:mb-24 max-w-md flex flex-col">
            <div className="max-w-2xl lg:max-w-md mb-6">
              <h2 className="mb-8 text-4xl md:text-5xl text-white font-bold font-heading">
                Enjoy finding the home of your dreams.
              </h2>
              <p className="text-lg text-gray-200 leading-loose">
                Simply complete our survey designed to help us target homes that
                meet your requirements. We'll send curated listings to your
                email every week, with an option to schedule a time to view them
                with one of our agents.
              </p>
            </div>
            <div className="flex flex-wrap flex-row">
              <input
                className="mb-2 md:mb-0 w-full md:w-2/3 py-3 pl-4 text-sm text-gray-900 rounded"
                type="text"
                placeholder="Type your e-mail"
              />
              <button className="w-full md:w-auto my-4 py-3 px-6 md:ml-2 text-sm text-gray-50 font-semibold border-2 border-green-600 bg-green-800 hover:bg-green-600 rounded">
                Start&nbsp;for&nbsp;free
              </button>
            </div>
          </div>
          <div className="flex flex-col place-content-center">
            <GatsbyImage
              image={data.file.childImageSharp.gatsbyImageData}
              alt="Colorado Springs, CO"
            />
            <p className="p-1 text-gray-200">
              Photo by{' '}
              <a href="https://unsplash.com/@djdangeruss?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Russell Smith
              </a>{' '}
              on{' '}
              <a href="https://unsplash.com/s/photos/colorado-springs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </p>
          </div>
        </div>

        <Menu handleMenu={handleMenu} hidden={hidden} />
      </section>
    </div>
  )
}
