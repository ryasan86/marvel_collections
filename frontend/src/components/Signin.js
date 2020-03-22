import React from 'react'
import Sign from '../styles/SignStyles'
import { MarvelSVG } from '../images'

const SigninComponent = () => {
  return (
    <Sign>
      <Sign.Fieldset>
        <Sign.Image src={MarvelSVG} alt="marvel logo" />
        <Sign.H4>Collections</Sign.H4>
        <Sign.UsernameInput type="text" placeholder="Username" />
        <Sign.PasswordInput type="password" placeholder="Password" />
        <Sign.Submit type="submit">Submit</Sign.Submit>
        <Sign.Divider />
        <Sign.CreateAccount to="signup">Create account</Sign.CreateAccount>
      </Sign.Fieldset>
    </Sign>
  )
}

export default SigninComponent
