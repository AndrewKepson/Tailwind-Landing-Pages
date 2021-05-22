import React from 'react'
import PropTypes from 'prop-types'

export default function Name({ styles, handler }) {
  return (
    <div>
      <label htmlFor="full_name" className="sr-only">
        Full name
      </label>
      <input
        type="text"
        name="fullName"
        id="full_name"
        autoComplete="name"
        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
        placeholder="Full name"
        onChange={handler}
      />
    </div>
  )
}

Name.propTypes = {
  styles: PropTypes.object.isRequired,
  handler: PropTypes.func.isRequired
}
