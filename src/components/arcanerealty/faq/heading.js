import React from 'react'

export default function Heading({ styles: { heading, support, supportLink } }) {
  return (
    <div>
      <h2 className={heading}>Frequently asked questions</h2>
      <p className={support}>
        Can’t find the answer you’re looking for? Reach out to our{' '}
        <a href="#" className={supportLink}>
          customer support
        </a>{' '}
        team.
      </p>
    </div>
  )
}
