import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Signin from '../components/Signin'

const SigninPage = () => {
  return (
    <Layout>
      <SEO title="Sign In" />
      <Signin />
    </Layout>
  )
}

export default SigninPage
