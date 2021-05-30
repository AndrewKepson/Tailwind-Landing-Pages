import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function Options() {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "juniper_loop" }) {
        id
        childImageSharp {
          gatsbyImageData(
            quality: 70
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  return (
    <section className="py-10">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-2/5 mb-12 lg:mb-0">
            <GatsbyImage
              image={data.file.childImageSharp.gatsbyImageData}
              alt="Ivywild School in Colorado Springs"
            />
            <p className="p-2">
              Photo by{' '}
              <a href="https://unsplash.com/@pbanselme?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Bailey Anselme
              </a>{' '}
              on{' '}
              <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </p>
          </div>
          <div className="w-full lg:w-3/5 px-4">
            <div className="max-w-xl lg:ml-auto">
              <h2 className="mb-12 text-4xl lg:text-5xl font-bold font-heading">
                Choosing a Home in Colorado Springs
              </h2>
              <div className="flex flex-wrap -mx-4 -mb-10 lg:-mb-12">
                <div className="w-full md:w-1/2 px-4 mb-10 lg:mb-12">
                  <span className="mb-2 flex items-center justify-center w-12 h-12 rounded-full bg-green-700 text-gray-50 font-bold text-xl leading-loose">
                    1
                  </span>
                  <p className="text-lg text-gray-500 leading-loose">
                    As a rapidly growing city, people are considering{' '}
                    <strong>proximity to work</strong> more than ever as they
                    choose where to live in Colorado Springs.
                  </p>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-10 lg:mb-12">
                  <span className="flex mb-2 items-center justify-center w-12 h-12 rounded-full bg-green-700 text-gray-50 font-bold text-xl leading-loose">
                    2
                  </span>
                  <p className="text-lg text-gray-500 leading-loose">
                    Are you an avid skier or hiker? Living on the west side
                    offers unparalleled access to trails, parks, and{' '}
                    <strong>Highway 24</strong>.
                  </p>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-10 lg:mb-12">
                  <span className="flex mb-2 items-center justify-center w-12 h-12 rounded-full bg-green-700 text-gray-50 font-bold text-xl leading-loose">
                    3
                  </span>
                  <p className="text-lg text-gray-500 leading-loose">
                    Are you a <strong>military</strong> professional? Our city
                    boasts many neighborhoods that prioritize base access while
                    remaining integrated with the local community.
                  </p>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-10 lg:mb-12">
                  <span className="flex mb-2 items-center justify-center w-12 h-12 rounded-full bg-green-700 text-gray-50 font-bold text-xl leading-loose">
                    4
                  </span>
                  <p className="text-lg text-gray-500 leading-loose">
                    Do you travel frequently? The Powers corridor offers quick
                    access to both the <strong>Colorado Springs Airport</strong>{' '}
                    and Denver International Airport.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
