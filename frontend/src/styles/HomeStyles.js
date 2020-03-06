import styled from 'styled-components'
import { MaxWidth } from '../components/common'

const Home = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
`

Home.H4 = styled.h4`
  margin: 0;
  padding: 0;
  background: var(--red);
  color: white;
  padding: 1.2rem;
`

Home.MaxWidth = MaxWidth

export default Home
