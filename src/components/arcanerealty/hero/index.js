import React from 'react'

import HeroImage from './heroimage'
import Content from './content'

import Classes from '../../../styles/classes'
const styles = Classes.arcaneRealty.components.hero

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <main className={styles.heroWrapper}>
        <Content styles={styles} />
        <HeroImage styles={styles} />
      </main>
    </div>
  )
}
