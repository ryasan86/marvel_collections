import styled from 'styled-components'
import { Input } from '../components/common'

const Form = styled.form`
  position: absolute;
  top: 15%;
  padding: 5rem;
  background: white;
`

Form.Fieldset = styled.fieldset`
  border: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`

Form.Input = styled(Input)`
  width: 30rem;
  height: 4rem;
  border-radius: 0.3rem;
  padding: 0 1rem;
  margin-bottom: 1rem;
  border: 1px solid var(--gray);
  outline: none;
  font-size: var(--large-font);
  &:focus {
    border: 2px solid var(--dark);
  }
`

Form.Button = styled.button`
  border: 0;
  border-radius: 0.3rem;
  height: 4rem;
  outline: 0;
  cursor: pointer;
`

export default Form
