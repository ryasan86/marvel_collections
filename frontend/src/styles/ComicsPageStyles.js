import styled from 'styled-components'
import { MaxWidth, ListHeader } from '../components/common'

const ComicsList = styled(MaxWidth)`
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
`

ComicsList.Header = ListHeader

ComicsList.PleaseWaitContainer = styled.div`
  margin: 5rem 0;
`

export default ComicsList
