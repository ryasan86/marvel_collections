import styled from 'styled-components'

const ItemsList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  gap: 2rem;
  padding: 0 2rem;
`

export default ItemsList
