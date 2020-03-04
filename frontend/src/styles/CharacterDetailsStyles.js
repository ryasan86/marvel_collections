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
    text-align: center;
    color: white;
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

// sections
const StyledBanner = styled.section`
  width: 100%;
  height: 40rem;
  display: flex;
  justify-content: center;
  position: relative;
  background: transparent;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  h1 {
    display: flex;
    align-items: center;
  }
  .bg {
    position: absolute;
    z-index: 0;
  }
`

const StyledDescription = styled.section`
  display: flex;
  width: 100%;
  max-width: var(--max-width);
  padding-top: 2rem;
  background: white;
`

const StyledCharacterComics = styled.section`
  width: 100%;
  max-width: var(--max-width);
  display: flex;
  flex-direction: column;
  background: white;
  .comics-list-row {
    width: 100%;
    align-items: center;
  }
`

// columns
const LeftColumn = styled.div`
  width: 30%;
  position: relative;
`

const RightColumn = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  position: relative;
`

export {
  StyledBanner,
  StyledDescription,
  StyledCharacterComics,
  LeftColumn,
  RightColumn
}
export default StyledCharacterDetails
