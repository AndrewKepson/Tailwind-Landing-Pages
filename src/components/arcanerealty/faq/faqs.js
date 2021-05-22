import React from 'react'

import { faqs } from '../../../data/arcanerealty/data'

export default function FAQs({
  styles: { faqsWrapper, descriptionList, question, answer }
}) {
  return (
    <div className={faqsWrapper}>
      <dl className={descriptionList}>
        {faqs.map(faq => (
          <div key={faq.question}>
            <dt className={question}>{faq.question}</dt>
            <dd className={answer}>{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
