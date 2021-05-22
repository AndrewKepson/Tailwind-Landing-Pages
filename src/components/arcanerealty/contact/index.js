import React from 'react'

import GetStarted from './getstarted'
import Form from './form/index.js'

import Classes from '../../../styles/classes'
const styles = Classes.arcaneRealty.components.form

export default function Contact() {
  const [contactUs, setContactUs] = React.useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setContactUs({ ...contactUs, [name]: value })
  }

  const onSubmit = state =>
    alert(
      `Thank you for your interest, ${state.fullName}! This is not a real company; this just exists to demonstrate that I can build websites.`
    )

  return (
    <div className={styles.container}>
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-indigo-200" />
      </div>
      <div className={styles.contentWrapper}>
        <GetStarted styles={styles} />
        <Form
          styles={styles}
          state={contactUs}
          handler={handleChange}
          submit={onSubmit}
        />
      </div>
    </div>
  )
}
