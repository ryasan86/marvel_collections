import styled from 'styled-components'
import { MaxWidth } from '../components/common'

const Home = styled(MaxWidth)`
  display: grid;
  grid-gap: 5rem;
  justify-items: center;
  background: transparent;
`

Home.Section = styled.section`
  width: 100%;
  display: block;
  background: white;
  padding: 0;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
`

export default Home
