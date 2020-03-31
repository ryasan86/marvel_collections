import styled from 'styled-components'
import { BackgroundImage } from '../components/common'
import PleaseWait from '../components/PleaseWait'

const ComicDetails = styled.div`
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
`

ComicDetails.PleaseWait = styled(PleaseWait)`
  margin: 5rem 0;
`

ComicDetails.BackgroundImage = BackgroundImage

ComicDetails.Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: var(--max-width);
  margin-top: 10rem;
  display: flex;
`

ComicDetails.ImageContainer = styled.div`
  width: 30%;
  max-height: 40rem;
  position: relative;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  button {
    margin-top: 1.2rem;
    display: block;
    border: none;
    border-radius: 3px;
    padding: 0.75rem 2.5rem;
    font-size: var(--large-font);
    background: transparent;
    color: #5dade2;
    border: 2px solid #5dade2;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    &:hover {
      color: white;
      background: #5dade2;
    }
  }
`

ComicDetails.TextContainer = styled.div`
  width: 70%;
  color: white;
  padding-left: 2rem;
`

ComicDetails.Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
  h3 {
    margin: 0;
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
  margin-bottom: 1.5rem;
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
