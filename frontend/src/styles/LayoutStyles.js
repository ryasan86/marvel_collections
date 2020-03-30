import styled from 'styled-components'
import { CityBG, MeshPattern } from '../images'

const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

Layout.Inner = styled.div`
  flex-grow: 1;
  height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  background-image: url(${CityBG}), url(${MeshPattern});
  background-repeat: no-repeat, repeat;
  background-size: contain, initial;
  background-position: center -20%, left top;
  background-attachment: fixed, fixed;
  transition: all 0.3 ease;
  filter: ${props => (props.modalOpen ? 'grayscale(1)' : 'none')};
`

export default Layout
