import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Header from './header'
import Footer from './footer'
import Main from '../styles/main.styles'
import '../styles/global.css'

const StyledLayout = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Layout = ({ children }) => (
  <StyledLayout>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </StyledLayout>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
