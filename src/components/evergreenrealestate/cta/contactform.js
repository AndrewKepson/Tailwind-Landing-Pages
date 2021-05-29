import React, { useState } from 'react'

export default function ContactForm() {
  const [contact, setContact] = useState({ email: '', name: '' })

  const handleChange = e => {
    const { name, value } = e.target
    setContact({ ...contact, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    alert(`Thank you for your interest, ${contact.name}!`)
  }

  return (
    <form>
      <div className="flex flex-wrap">
        <input
          className="w-full lg:w-2/5 lg:mr-4 mb-2 lg:mb-0 pl-3 py-3 border rounded"
          type="e-mail"
          value={contact.email}
          onChange={handleChange}
          name="email"
          disabled
          placeholder="Type your e-mail"
        />
        <input
          className="w-full lg:w-2/5 lg:mr-4 mb-4 lg:mb-0 pl-3 py-3 border rounded"
          type="name"
          value={contact.name}
          onChange={handleChange}
          name="name"
          placeholder="Your name"
        />
        <button
          onClick={handleSubmit}
          className="inline-block my-2 px-6 py-2 w-full lg:w-auto text-sm text-white font-bold leading-loose bg-green-700 hover:bg-green-600 rounded transition duration-200"
        >
          Sign Up Today
        </button>
      </div>
    </form>
  )
}
