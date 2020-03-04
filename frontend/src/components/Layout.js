import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
import Main from '../styles/MainStyles'
import { CityBG, MeshPattern } from '../images'

const StyledLayout = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${CityBG}), url(${MeshPattern});
  background-repeat: no-repeat, repeat;
  background-size: contain, initial;
  background-position: center -20%, left top;
  background-attachment: fixed, fixed;
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
