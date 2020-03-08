import React from 'react'
import Signin from '../styles/SigninStyles'
import { MarvelSVG } from '../images'

const SigninComponent = () => {
  return (
    <Signin>
      <Signin.Fieldset>
        <Signin.Image src={MarvelSVG} alt="marvel logo" />
        <Signin.H4>Collections</Signin.H4>
        <Signin.UsernameInput type="text" placeholder="Username" />
        <Signin.PasswordInput type="password" placeholder="Password" />
        <Signin.Submit type="submit">Submit</Signin.Submit>
        <Signin.Divider />
        <Signin.CreateAccount to="/signup">Create Account</Signin.CreateAccount>
      </Signin.Fieldset>
    </Signin>
  )
}

export default SigninComponent
