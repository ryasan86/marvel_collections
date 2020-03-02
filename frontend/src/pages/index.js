import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
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
    <Home>
      <Link className=".home-link" to="characters">
        CHARACTERS
      </Link>
      <Link className=".home-link" to="comics">
        COMICS
      </Link>
    </Home>
  </Layout>
)

export default IndexPage
