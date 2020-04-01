import styled from 'styled-components'
import PleaseWait from '../components/PleaseWait'
import { MaxWidth, ListHeader } from '../styles/shared'

const ComicsList = styled(MaxWidth)`
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
`

ComicsList.Header = ListHeader

ComicsList.PleaseWait = styled(PleaseWait)`
  margin: 5rem 0;
`

export default ComicsList
