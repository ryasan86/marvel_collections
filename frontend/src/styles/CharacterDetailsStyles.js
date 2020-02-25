import styled from 'styled-components'

const StyledCharacterDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    display: flex;
  }
  h1 {
    color: white;
    text-align: center;
    font-size: 5rem;
  }
  h3 {
    padding: 2rem 0;
    border-top: 1px solid var(--gray);
    margin-right: 10rem;
    font-size: 2rem;
  }
  h4 {
    border-top: 1px solid var(--gray);
    font-size: 1.3rem;
    padding: 1.3rem 0;
  }
  p {
    text-align: center;
    font-size: var(--large-font);
  }
`

const BannerSection = styled.section`
  width: 100%;
  background: var(--blacker);
  display: flex;
  justify-content: center;
  & > div {
    display: flex;
    align-items: center;
  }
`

const DescriptionSection = styled.section`
  display: flex;
  margin-top: 2rem;
`

const ComicsSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(16.667%, 1fr));
    gap: 1rem;
  }
`

const LeftColumn = styled.div`
  width: 30%;
`

const RightColumn = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
`

export { BannerSection, DescriptionSection, ComicsSection, LeftColumn, RightColumn }
export default StyledCharacterDetails
