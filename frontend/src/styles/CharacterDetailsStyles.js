import styled, { css } from 'styled-components'

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
    padding: 2rem 0;
    border-top: 1px solid var(--gray);
    margin-right: 10rem;
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
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    transform-origin: -20%;
    transform: skewY(-1.5deg);
    z-index: -10;
  }
`

// sections
const Banner = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: -20;
  ${props =>
    props.bg
      ? css`
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.7)
            ),
            url(${props.bg});
        `
      : css`
          background-image: initial;
        `};
  & > div {
    display: flex;
    align-items: center;
  }
`

const Description = styled.section`
  display: flex;
  width: 100%;
  max-width: var(--max-width);
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
