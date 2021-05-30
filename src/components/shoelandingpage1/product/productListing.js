import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import TextContent from './textcontent'
import SidebarGallery from './sidebargallery'

export default function ProductListing() {
  // const data = useStaticQuery(graphql`
  //   {
  //     mainImage: file(name: { eq: "nikeShoe1" }) {
  //       id
  //       name
  //       childImageSharp {
  //         gatsbyImageData
  //       }
  //     }
  //     secondaryImage: file(name: { eq: "nikeairmax3" }) {
  //       id
  //       childImageSharp {
  //         gatsbyImageData
  //       }
  //     }
  //     tertiaryImage: file(name: { eq: "nikeairmax2" }) {
  //       id
  //       childImageSharp {
  //         gatsbyImageData
  //       }
  //     }
  //   }
  // `)
  const data = useStaticQuery(graphql`
    query getShoePhotos {
      allFile(filter: { dir: { regex: "/shoelander1/" } }) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)
  const images = [...data.allFile.edges]
  const mainImageSource = images.find(
    image => image.node.id === '277d77ba-bc34-55bd-b9e6-395ee1582252'
  )
  console.log(images)
  console.log(mainImageSource)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center place-content-center">
      <div className="grid grid-cols-1 justify-items-center">
        <TextContent />
        <GatsbyImage
          className="w-full md:w-2/3 shadow-lg"
          image={getImage(mainImageSource.node.childImageSharp.gatsbyImageData)}
          alt="0"
        />
      </div>
      {/* <SidebarGallery  /> */}
    </div>
  )
}
