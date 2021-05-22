import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function HeroImage({ styles }) {
  const data = useStaticQuery(graphql`
    {
      NYCNight: file(name: { eq: "nycNightscape" }) {
        id
        childImageSharp {
          gatsbyImageData(
            quality: 80
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      NYCDay: file(name: { eq: "nycBuildings1" }) {
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
  `)
  const image = getImage(data.NYCNight)
  return (
    <div className={styles.imageWrapper}>
      <GatsbyImage
        className={styles.image}
        image={image}
        alt="Invest in tokenized properties in New York City"
      />
    </div>
  )
}

HeroImage.propTypes = {
  styles: PropTypes.object.isRequired
}
