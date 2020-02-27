import styled from 'styled-components'

const ItemStyles = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: opacity 0.7s;
  transition-delay: 0.5s;
  opacity: ${props => props.isVisible ? '1' : '0'};
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
    padding: 2rem 0;
    font-size: var(--small-font);
    font-weight: bold;
  }
`

export default ItemStyles
