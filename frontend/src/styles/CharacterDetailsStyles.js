import styled from 'styled-components'
import SortByComponent from '../components/SortBy'
import { BackgroundImage } from '../components/common'

const CharacterDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  h3 {
    padding: 4rem 1.2rem;
    margin: 0;
    border-top: 1px solid var(--gray);
  }
`

const Banner = styled.section`
  width: 100%;
  height: 40rem;
  display: flex;
  overflow: hidden;
  position: relative;
`

Banner.Image = styled.img`
  width: 30%;
  height: 100%;
  position: relative;
  object-fit: cover;
`

Banner.H1 = styled.h1`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-block-start: 0;
  margin-block-end: 0;
  position: relative;
`

Banner.BackgroundImage = BackgroundImage

const Description = styled.section`
  display: flex;
  width: 100%;
  padding-top: 5rem;
  background: white;
`

Description.H3 = styled.h3`
  width: 30rem;
`

Description.P = styled.p`
  width: 70%;
  margin: 0;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const CharacterComics = styled.section`
  width: 100%;
  max-width: var(--max-width);
  background: white;
  display: grid;
  grid-template-areas:
    'title sort-by'
    'comics-list comics-list';
`

CharacterComics.H3 = styled.h3`
  grid-area: title;
  width: 30rem;
`

CharacterComics.List = styled.div`
  grid-area: comics-list;
  width: 100%;
`

CharacterComics.SortBy = styled(SortByComponent)`
  grid-area: sort-by;
  display: flex;
  justify-content: flex-end;
  margin-right: 1.2rem;
`

export { Banner, Description, CharacterComics }
export default CharacterDetails
