import styled from 'styled-components'

const StyledComicDetails = styled.div`
  flex: 1 1 auto;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
`

const ContentContainer = styled.div`
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

const TextContainer = styled.div`
  width: 70%;
  color: white;
  padding-left: 8rem;
  h3 {
    margin: 0 0 1rem 0;
    font-size: 4rem;
  }
  .meta-info {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
    height: 100%;
    max-height: 50rem;
  }
`

const MetaItem = styled.li`
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

export { ContentContainer, TextContainer, MetaItem }
export default StyledComicDetails
