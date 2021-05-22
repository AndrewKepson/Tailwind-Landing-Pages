import React from 'react'
import PropTypes from 'prop-types'

import Name from './name'
import Email from './email'
import MessageInput from './messageinput'
import PhoneNumber from './phonenumber'
import SubmitButton from './submitbutton'

export default function Form({ styles, state, handler, submit }) {
  return (
    <div className={styles.formContainer}>
      <div className={styles.formWrapper}>
        <form className={styles.form}>
          <Name styles={styles} handler={handler} />
          <Email styles={styles} handler={handler} />
          <PhoneNumber styles={styles} handler={handler} />
          <MessageInput styles={styles} handler={handler} />
          <SubmitButton
            styles={styles}
            state={state}
            handler={handler}
            submit={submit}
          />
        </form>
      </div>
    </div>
  )
}

Form.propTypes = {
  state: PropTypes.object.isRequired,
  handler: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
}
