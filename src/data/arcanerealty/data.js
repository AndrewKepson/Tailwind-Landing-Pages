import {
  BookmarkAltIcon,
  ChartBarIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon
} from '@heroicons/react/outline'

export const features = [
  {
    name: 'Analytics',
    href: '#',
    description:
      'View your custom dashboard anytime, or schedule a call with your representative.',
    icon: ChartBarIcon
  },
  {
    name: 'Security',
    href: '#',
    description:
      'All investments are immutably stored on the blockchain ledger.',
    icon: ShieldCheckIcon
  },
  {
    name: 'Automate Investments',
    href: '#',
    description:
      'Automatically contribute to your portfolio on a regular cadence.',
    icon: RefreshIcon
  }
]
export const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon }
]
export const resources = [
  {
    name: 'Help Center',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon
  },
  {
    name: 'Guides',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkAltIcon
  },
  {
    name: 'Security',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
    icon: ShieldCheckIcon
  }
]
export const recentPosts = [
  {
    id: 1,
    name: 'Making the Non-Fungible Fungible Again',
    href: '#'
  },
  {
    id: 2,
    name: 'Postmodern Design in Blockchain Development',
    href: '#'
  },
  {
    id: 3,
    name: `Properties as NFTs - What the World Doesn't Understand`,
    href: '#'
  }
]

export const faqs = [
  {
    question: `What does it mean for property to be 'tokenized' ?`,
    answer: `A tokenized property is a digital asset corresponding to a physical piece of property that proves ownership of that property. Property tokens are nearly infinitesimally divisible, making the dream of property ownership - and the economic rewards of increasing property values - accessible to anyone.`
  },
  {
    question: 'What is a smart contract?',
    answer: `A smart contract is a contract initiated on a blockchain, that is also stored immutably on the blockchain's ledger.`
  }
]
