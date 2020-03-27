import styled from 'styled-components'
import PleaseWait from '../components/PleaseWait'
import { MaxWidth } from '../components/common'

const Home = styled(MaxWidth)`
  background: transparent;
`

Home.Section = styled.section`
  margin-bottom: 5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;
  padding: 0;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
  &:last-child {
    margin-bottom: 0;
  }
`

Home.PleaseWait = PleaseWait

export default Home
