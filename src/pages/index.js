import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Index</h1>
    <ul>
      <li>
        <Link to="/arcane-realty-investors">Arcane Realty Investors</Link>
      </li>
      <li>
        <Link to="/evergreen-real-estate">Evergreen Real Estate</Link>
      </li>
      <li>
        <Link to="/shoe-landing-page-1">
          Ecommerce Product Page - Shoes/Sneakers
        </Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
