import React from 'react'

import ListItem from './listitem'
import { accordionItems } from '../../../data/evergreenrealestate/data'

export default function Accordion() {
  return (
    <section className="lg:py-10">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto">
          <h2 className="mb-12 text-3xl font-bold font-heading"></h2>
          <ul>
            {accordionItems.map((item, i) => (
              <ListItem key={i} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
