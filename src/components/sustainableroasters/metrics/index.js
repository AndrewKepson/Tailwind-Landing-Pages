import React from 'react'

import Partners from './partners'
import CupsDelivered from './cupsDelivered'
import KwhSaved from './kwhSaved'
import DeliveryTime from './deliveryTime'

export default function Metrics() {
  return (
    <section className="bg-gray-50 py-20 text-center text-gray-700">
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-wrap -mx-4">
          <Partners />
          <CupsDelivered />
          <KwhSaved />
          <DeliveryTime />
        </div>
      </div>
    </section>
  )
}
