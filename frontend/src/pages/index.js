import React from 'react'
import { Link } from 'gatsby'
import StyledHomePage from '../styles/home-page.styles'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <StyledHomePage>
      <Link to='characters'>CHARACTERS</Link>
      <Link to='comics'>COMICS</Link>
    </StyledHomePage>
  </Layout>
)

export default IndexPage
