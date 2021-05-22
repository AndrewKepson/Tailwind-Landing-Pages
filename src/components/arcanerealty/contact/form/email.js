import React from 'react'
import PropTypes from 'prop-types'

export default function Email({ styles, handler }) {
  return (
    <div>
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
        placeholder="Email"
        onChange={handler}
      />
    </div>
  )
}

Email.propTypes = {
  styles: PropTypes.object.isRequired,
  handler: PropTypes.func.isRequired
}
