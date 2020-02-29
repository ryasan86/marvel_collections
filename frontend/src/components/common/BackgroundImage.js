import styled, { css } from 'styled-components'

export const BackgroundImage = styled.div`
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
`
