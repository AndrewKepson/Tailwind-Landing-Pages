import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

export default function ListItem({ item }) {
  return (
    <Disclosure as="div" className="pt-6">
      {({ open }) => (
        <>
          <dt className="text-lg">
            <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
              <span className="font-medium text-gray-900">{item.question}</span>
              <span className="ml-6 h-7 flex items-center">
                <ChevronDownIcon
                  className={classNames(
                    open ? '-rotate-180' : 'rotate-0',
                    'h-6 w-6 transform'
                  )}
                  aria-hidden="true"
                />
              </span>
            </Disclosure.Button>
          </dt>
          <Disclosure.Panel as="dd" className="mt-2 pr-12">
            <p className="text-base text-gray-500">{item.answer}</p>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
