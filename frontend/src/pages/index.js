import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const Home = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home></Home>
  </Layout>
)

export default IndexPage
