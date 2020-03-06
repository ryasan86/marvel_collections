import React from 'react'
import Signin from '../styles/SigninStyles'
import { MarvelSVG } from '../images'

const SigninComponent = () => {
  return (
    <Signin>
      <Signin.Image src={MarvelSVG} alt="marvel logo" />
      <Signin.UsernameInput type="text" placeholder="Username" />
      <Signin.PasswordInput type="password" placeholder="Password" />
      <Signin.Submit>Submit</Signin.Submit>
      <Signin.Divider />
      <Signin.CreateAccount>Create Account</Signin.CreateAccount>
    </Signin>
  )
}

export default SigninComponent
