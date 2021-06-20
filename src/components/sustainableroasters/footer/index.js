import React from 'react'

import Logos from './logos'

export default function Footer() {
  return (
    <footer className="bg-gray-50 font-light pt-12 text-gray-500">
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full p-4">
            <h3 className="font-medium inline-block mb-6 mr-auto text-3xl text-green-400 uppercase">
              About Sustainable roasters
            </h3>
            <p className="mb-4 text-sm">
              Are you interested in learning more about our sustainably-sourced,
              fresh-roasted, direct-to-door coffee? Call or email us today for
              more information and join the sustainable coffee revolution.
            </p>
            <div className="mb-6">
              <a href="#" className="hover:text-green-500">
                +1 555 555-8555
              </a>
              <br />
              <a href="#" className="hover:text-green-500">
                coffee@sustainableroasters.com
              </a>
            </div>
            <Logos />
          </div>
        </div>
        <div className="py-4 text-center">
          <hr className="border-gray-400 mb-4" />
          <p className="text-sm">Copyright &copy; 2021 Andrew Kepson</p>
        </div>
      </div>
    </footer>
  )
}
