import React from 'react'

import AddToCart from './addtocart'

export default function TextContent() {
  return (
    <div className="p-12 grid grid-cols-1">
      <h1>The Shoe You Deserve</h1>
      <p>
        <strong>$240</strong>
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est hic magni
        aut cum eum! Assumenda laudantium quod nesciunt obcaecati quas rem
        accusantium vel consectetur beatae suscipit molestias minima, blanditiis
        repellendus!
      </p>
      <AddToCart />
    </div>
  )
}
