import React from 'react'

import FacebookLogo from './facebook'
import InstagramLogo from './instagram'
import LinkedInLogo from './linkedin'
import TwitterLogo from './twitter'
import YoutubeLogo from './youtube'

export default function Logos() {
  return (
    <div className="flex-wrap inline-flex space-x-3">
      <FacebookLogo /> <TwitterLogo />
      <InstagramLogo /> <LinkedInLogo /> <YoutubeLogo />
    </div>
  )
}
