import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Signup from '../components/Signup'

const SignupPage = () => {
  return (
    <Layout>
      <SEO title="Sign Up" />
      <Signup />
    </Layout>
  )
}

export default SignupPage
