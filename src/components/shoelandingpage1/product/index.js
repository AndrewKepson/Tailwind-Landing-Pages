import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import ProductListing from './productListing'

export default function Product() {
  const data = useStaticQuery(graphql`
    query getShoePhotos {
      allFile(filter: { dir: { regex: "/shoelander1/" } }) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData(
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
  return (
    <div className="bg-gray-100 p-6 h-full">
      <ProductListing data={data} />
    </div>
  )
}
