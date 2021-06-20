import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Index</h1>
    <ul>
      <li className="hover:text-purple-400">
        <Link to="/arcane-realty-investors">Arcane Realty Investors</Link>
      </li>
      <li className="hover:text-purple-400">
        <Link to="/evergreen-real-estate">Evergreen Real Estate</Link>
      </li>
      <li className="hover:text-purple-400">
        <Link to="/shoe-ecommerce-page">Ecommerce Product Page (Shoes)</Link>
      </li>
      <li className="hover:text-purple-400">
        <Link to="/sustainable-roasters">Sustainable Coffee Roasters</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
