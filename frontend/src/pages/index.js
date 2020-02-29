import React from 'react'
import { Link } from 'gatsby'
import StyledHomePage from '../styles/HomePageStyles'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

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
