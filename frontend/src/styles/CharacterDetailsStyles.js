import styled from 'styled-components'

const StyledCharacterDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  img {
    display: flex;
  }
  h1 {
    color: white;
    text-align: center;
  }
  h3 {
    border-top: 1px solid var(--gray);
    margin-right: 10rem;
    padding: 2rem 0;
  }
  h4 {
    border-top: 1px solid var(--gray);
    font-size: 1.3rem;
    padding: 1.3rem 0;
  }
  p {
    text-align: center;
  }
`

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    transform-origin: 10%;
    transform: skewY(-1.5deg);
    z-index: -10;
  }
`

// sections
const Banner = styled.section`
  width: 100%;
  height: 100%;
  height: 40rem;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: -20;
  .banner-content {
    position: relative;
    display: flex;
    align-items: center;
    img {
      width: 100%;
    }
  }
`

const Description = styled.section`
  display: flex;
  width: 100%;
  max-width: var(--max-width);
  margin-top: 2rem;
  z-index: 10;
`

const CharacterComics = styled.section`
  width: 100%;
  max-width: var(--max-width);
  display: flex;
  flex-direction: column;
  .comics-list-row {
    width: 100%;
    align-items: center;
  }
`

// columns
const LeftColumn = styled.div`
  width: 30%;
`

const RightColumn = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
`

export {
  ContentContainer,
  Banner,
  Description,
  CharacterComics,
  LeftColumn,
  RightColumn
}
export default StyledCharacterDetails
