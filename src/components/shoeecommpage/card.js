import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { GatsbyImage } from 'gatsby-plugin-image'

export default function Card({
  index,
  feature: { feature, tagline, image, altText }
}) {
  const data = useStaticQuery(graphql`
    {
      getShoes: allFile(filter: { dir: { regex: "/shoeecommpagephotos/" } }) {
        edges {
          node {
            id
            name
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
      }
    }
  `)

  const images = [...data.getShoes.edges]

  const getImage = title => {
    return images.find(image => image.node.name === title).node.childImageSharp
      .gatsbyImageData
  }

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
      <div className="h-full p-12 bg-white shadow rounded">
        <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
          {index + 1}
        </div>
        <GatsbyImage
          className="h-48 mx-auto my-4"
          image={getImage(image)}
          alt={altText}
        />
        <h3 className="mb-2 font-bold font-heading">{feature}</h3>
        <p className="text-sm text-blueGray-400 leading-relaxed">{tagline}</p>
      </div>
    </div>
  )
}
