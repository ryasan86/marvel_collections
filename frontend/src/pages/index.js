import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { MaxWidth } from '../components/common'
// import '../styles/lib/nprogress.css'

const Home = styled(Layout)``
Home.MaxWidth = MaxWidth

const IndexPage = () => (
  <Home>
    <SEO title="Home" />
    <Home.MaxWidth>Home Page</Home.MaxWidth>
  </Home>
)

export default IndexPage
