import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import TextContent from './textcontent'
import SidebarGallery from './sidebargallery'

export default function ProductListing() {
  const [mainImage, setMainImage] = useState('')

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

  const images = Array.from(data.allFile.edges)

  useEffect(() => {
    setMainImage(
      getImage(
        images.find(
          image => image.node.id === '277d77ba-bc34-55bd-b9e6-395ee1582252'
        ).node.childImageSharp.gatsbyImageData
      )
    )
  }, [])

  const getMainImage = e => {
    setMainImage(
      getImage(
        images.find(image => image.node.id === e.target.name).node
          .childImageSharp.gatsbyImageData
      )
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center place-content-center">
      <div className="grid grid-cols-1 justify-items-center">
        <TextContent />
        <GatsbyImage
          className="w-full md:w-2/3 shadow-lg"
          image={mainImage}
          alt="0"
        />
      </div>
      <SidebarGallery
        mainImage={mainImage}
        setMainImage={getMainImage}
        images={images}
      />
    </div>
  )
}
