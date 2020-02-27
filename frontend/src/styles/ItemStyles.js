import styled from 'styled-components'

const ItemStyles = styled.li`
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
    padding: 3rem 0;
    font-size: var(--small-font);
    font-weight: bold;
  }
`

export default ItemStyles
