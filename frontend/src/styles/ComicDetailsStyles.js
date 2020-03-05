import styled from 'styled-components'
import { BackgroundImage } from '../components/common'

const ComicDetails = styled.div`
  flex: 1 1 auto;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
`

ComicDetails.BackgroundImage = BackgroundImage

ComicDetails.Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: var(--max-width);
  margin-top: 10rem;
  display: flex;
  img {
    width: 30%;
  }
`

ComicDetails.TextContainer = styled.div`
  width: 70%;
  color: white;
  padding-left: 8rem;
  h3 {
    margin: 0 0 1rem 0;
    font-size: 4rem;
  }
`

ComicDetails.MetaItemsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 50rem;
`

ComicDetails.MetaItem = styled.li`
  margin-top: 1.5rem;
  max-width: 30rem;
  strong {
    font-size: 2.5rem;
  }
  p {
    margin: 1rem 0;
    font-weight: lighter;
  }
`

export default ComicDetails
