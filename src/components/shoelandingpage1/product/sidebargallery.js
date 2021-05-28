import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function SidebarGallery({ images }) {
  const getClasses = i => {
    if (i.node.id === '277d77ba-bc34-55bd-b9e6-395ee1582252')
      return 'hidden md:inline w-1/3'
    else return 'h-auto w-full md:w-1/3 box-border'
  }

  return (
    <div className="grid grid-flow-col grid-cols-1 grid-rows-2 md:grid-rows-3 gap-4 place-items-center mt-4 box-border">
      {images.map((image, i) => (
        <GatsbyImage
          key={i}
          className={getClasses(image)}
          name={image.node.id}
          image={image.node.childImageSharp.gatsbyImageData}
          alt="Alt"
        />
      ))}
    </div>
  )
}
