import styled, { css } from 'styled-components'

const opacityCSS = isVisible => css`
  transition: opacity 0.7s;
  transition-delay: 0.5s;
  opacity: ${isVisible ? 1 : 0};
`

const ItemStyles = styled.li`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${props => opacityCSS(props.isVisible)}
  img {
    width: 100%;
    cursor: pointer;
    box-shadow: 0px 25px 18px -18px rgba(0, 0, 0, 0.4);
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: translateY(-1rem);
    }
  }
  .text-row {
    margin-top: 2rem;
    font-size: var(--small-font);
    font-weight: bold;
  }
  a {
    text-decoration: none;
    color: initial;
  }
`

export default ItemStyles
