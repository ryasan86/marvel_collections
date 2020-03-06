import styled from 'styled-components'
import { Input as InputComponent } from '../components/common'

const Signin = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 15%;
  padding: 5rem;
  background: white;
`

const Input = styled(InputComponent)`
  width: 30rem;
  border-radius: 0.3rem;
  height: 4rem;
  outline: none;
  border: 1px solid var(--gray);
  font-size: var(--large-font);
  padding: 0 1rem;
  margin-bottom: 1rem;
  &:focus {
    border: 2px solid var(--dark);
  }
`

Signin.Image = styled.img`
  height: auto;
  width: 100%;
  transform: scale(0.8);
`

Signin.H4 = styled.h4`
  color: var(--red);
  text-align: center;
  margin: 0;
`

Signin.UsernameInput = styled(Input)`
  margin-top: 5rem;
`

Signin.PasswordInput = Input

Signin.Divider = styled.hr`
  color: var(--gray);
  width: 70%;
  height: 1px;
  margin: 2rem 0;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`

const Button = styled.button`
  border: 0;
  border-radius: 0.3rem;
  height: 4rem;
  outline: 0;
  cursor: pointer;
`

Signin.Submit = styled(Button)`
  background: var(--red);
  color: white;
  &:hover {
    background: transparent;
    border: 2px solid var(--red);
    color: var(--red);
  }
`

Signin.CreateAccount = styled(Button)`
  background: white;
  color: var(--red);
  border: 2px solid var(--red);
  width: 75%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  &:hover {
    background: var(--red);
    color: white;
  }
`

export default Signin
