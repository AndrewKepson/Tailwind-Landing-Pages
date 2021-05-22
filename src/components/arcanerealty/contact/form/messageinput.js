import React from 'react'
import PropTypes from 'prop-types'

export default function MessageInput({ styles, handler }) {
  return (
    <div>
      <label htmlFor="message" className="sr-only">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={4}
        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
        placeholder="Message"
        defaultValue={''}
        onChange={handler}
      />
    </div>
  )
}

MessageInput.propTypes = {
  styles: PropTypes.object.isRequired,
  handler: PropTypes.func.isRequired
}
