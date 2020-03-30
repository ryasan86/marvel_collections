import styled from 'styled-components'
import PleaseWait from '../components/PleaseWait'
import { MaxWidth, ListHeader } from '../components/common'

const CharactersList = styled(MaxWidth)`
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
`

CharactersList.Header = ListHeader

CharactersList.PleaseWaitContainer = styled.div`
  margin: 5rem 0;
`

CharactersList.PleaseWait = PleaseWait

export default CharactersList
