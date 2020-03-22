import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

const opacityCSS = isVisible => css`
  transition: opacity 0.7s;
  transition-delay: 0.5s;
  opacity: ${isVisible ? 1 : 0};
`

const Item = styled.li`
  margin: 2rem 0 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${props => opacityCSS(props.isVisible)}
`

Item.Link = styled(Link)`
  text-decoration: none;
  color: initial;
`

Item.Row = styled.div`
  margin-top: 1.2rem;
  font-size: var(--small-font);
  font-weight: bold;
`

Item.Image = styled.img`
  width: 100%;
  max-height: 32rem;
  object-fit: cover;
  cursor: pointer;
  box-shadow: 0px 25px 18px -18px rgba(0, 0, 0, 0.4);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-1rem);
  }
`

export default Item
