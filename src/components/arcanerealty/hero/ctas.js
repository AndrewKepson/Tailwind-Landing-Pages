import React from 'react'
import PropTypes from 'prop-types'

export default function CTAs({ styles }) {
  return (
    <div className={styles.ctaWrapper}>
      <div className={styles.cta1}>
        <a href="#" className={styles.a1}>
          Get started
        </a>
      </div>
      <div className={styles.cta2}>
        <a href="#" className={styles.a2}>
          Learn More
        </a>
      </div>
    </div>
  )
}

CTAs.propTypes = {
  styles: PropTypes.object.isRequired
}
