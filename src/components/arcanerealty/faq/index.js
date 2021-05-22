import React from 'react'

import Heading from './heading'
import FAQs from './faqs'

import Classes from '../../../styles/classes'
const styles = Classes.arcaneRealty.components.faq

const FAQ = () => (
  <div className="bg-white">
    <div className={styles.faqWrapper}>
      <div className={styles.main}>
        <Heading styles={styles} />
        <FAQs styles={styles} />
      </div>
    </div>
  </div>
)

export default FAQ
