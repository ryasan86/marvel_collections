import styled from 'styled-components'
import PleaseWait from '../components/PleaseWait'
import { MaxWidth } from '../components/common'

const Home = styled(MaxWidth)`
  display: grid;
  grid-gap: 5rem;
  justify-items: center;
  background: transparent;
`

Home.Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;
  padding: 0;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
`

Home.PleaseWait = PleaseWait

export default Home
