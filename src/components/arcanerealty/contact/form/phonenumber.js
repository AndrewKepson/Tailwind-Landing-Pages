import React from 'react'
import PropTypes from 'prop-types'

export default function PhoneNumber({ styles, handler }) {
  return (
    <div>
      <label htmlFor="phone" className="sr-only">
        Phone
      </label>
      <input
        type="text"
        name="phone"
        id="phone"
        autoComplete="tel"
        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
        placeholder="Phone"
        onChange={handler}
      />
    </div>
  )
}

PhoneNumber.propTypes = {
  styles: PropTypes.object.isRequired,
  handler: PropTypes.func.isRequired
}
