import styled, { css } from 'styled-components'

const StyledComicDetails = styled.div`
  flex: 1 1 auto;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
  .background {
    width: 100%;
    height: 100%;
    position: absolute;
    transform: scale(1.2);
    filter: blur(12px);
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    ${props =>
      props.bg
        ? css`
            background-image: linear-gradient(
                rgba(0, 0, 0, 0.85),
                rgba(0, 0, 0, 0.85)
              ),
              url(${props.bg});
          `
        : css`
            background-image: initial;
          `};
  }
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
    margin: 0;
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
