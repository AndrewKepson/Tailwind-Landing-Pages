import React from 'react'

import Classes from '../../../styles/classes'
const styles = Classes.arcaneRealty.components.mainHeading

const MainHeading = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <p className={styles.heading}>Own Your Own Future</p>
        <p className={styles.text}>
          Start with as little as $50. Own a piece of the world for as long as
          you want to hold onto it.
        </p>
      </div>
    </div>
  </div>
)

export default MainHeading
