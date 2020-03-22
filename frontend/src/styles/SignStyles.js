import styled from 'styled-components'
import { Link } from 'gatsby'
import Form from './FormStyles'

const Sign = Form

Sign.Fieldset = Form.Fieldset

Sign.Image = styled.img`
  height: auto;
  width: 100%;
  transform: scale(0.8);
`

Sign.H4 = styled.h4`
  color: var(--red);
  text-align: center;
  margin: 0 0 5rem 0;
`

Sign.UsernameInput = Form.Input
Sign.EmailInput = Form.Input
Sign.PasswordInput = Form.Input

Sign.Divider = styled.hr`
  color: var(--gray);
  width: 70%;
  height: 1px;
  margin: 2rem 0;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`

Sign.Submit = styled(Form.Button)`
  background: var(--red);
  color: white;
  width: 100%;
  &:hover {
    background: transparent;
    border: 2px solid var(--red);
    color: var(--red);
  }
`

Sign.CreateAccount = styled(Link)`
  height: 4rem;
  width: 75%;
  position: relative;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-50%);
  text-decoration: none;
  color: var(--red);
  background: white;
  border: 2px solid var(--red);
  border-radius: 0.3rem;
  &:hover {
    background: var(--red);
    color: white;
  }
`

export default Sign
