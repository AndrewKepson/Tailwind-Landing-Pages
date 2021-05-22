import React from 'react'
import PropTypes from 'prop-types'

import { MailIcon, PhoneIcon } from '@heroicons/react/outline'

export default function GetStarted({ styles }) {
  return (
    <div className={styles.getStartedContainer}>
      <div className={styles.getStartedWrapper}>
        <h2 className={styles.getStartedHeader}>Get Started Today</h2>
        <p className={styles.getStarted}>
          Contact us and a member of our team will be in touch shortly. Please
          have KYC information available to send on request. Due to exceptional
          demand, our onboarding process currently requires 14-21 days from
          initial contact.
        </p>
        <dl className="mt-8 text-base text-gray-600">
          <div>
            <dt className="sr-only">Postal address</dt>
            <dd>
              <p>46 Magnolia Ave.</p>
              <p>Brooklyn, NY 11235</p>
            </dd>
          </div>
          <div className="mt-6">
            <dt className="sr-only">Phone number</dt>
            <dd className="flex">
              <PhoneIcon
                className="flex-shrink-0 h-6 w-6 text-gray-600"
                aria-hidden="true"
              />
              <span className="ml-3">+1 (555) 555-5555</span>
            </dd>
          </div>
          <div className="mt-3">
            <dt className="sr-only">Email</dt>
            <dd className="flex">
              <MailIcon
                className="flex-shrink-0 h-6 w-6 text-gray-600"
                aria-hidden="true"
              />
              <span className="ml-3">support@arcaneinvestments.com</span>
            </dd>
          </div>
        </dl>
        <p className={styles.careers}>
          Looking for careers?{' '}
          <a href="#" className={styles.careersLink}>
            View all job openings
          </a>
          .
        </p>
      </div>
    </div>
  )
}

GetStarted.propTypes = {
  styles: PropTypes.object.isRequired
}
