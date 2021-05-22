import React from 'react'
import PropTypes from 'prop-types'

import CTAs from './ctas'

export default function Content({ styles }) {
  return (
    <div className={styles.heroContentContainer}>
      <div className={styles.heroContentWrapper}>
        <h1 className={styles.header}>
          <span className="block xl:inline">
            Invest In World-Class Properties
          </span>{' '}
          <span className="block text-indigo-600 xl:inline">
            With Any Amount of Starting Capital
          </span>
        </h1>
        <p className={styles.content}>
          Utilizing tokenized property titles and smart contract investing
          strategies, this is social mobility investing for the 21st century.
        </p>
        <CTAs styles={styles} />
      </div>
    </div>
  )
}

Content.propTypes = {
  styles: PropTypes.object.isRequired
}
