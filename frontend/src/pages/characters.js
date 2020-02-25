import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/Layout'
import Main from '../components/CharacterMain'
import Details from '../components/CharacterDetails'

const CharactersMain = props => {
  return (
    <Layout>
      <Main {...props} />
    </Layout>
  )
}

const CharacterDetails = props => {
  return (
    <Layout>
      <Details {...props} />
    </Layout>
  )
}

const CharactersPage = props => (
  <Router>
    <CharactersMain path='/characters' />
    <CharacterDetails path='/characters/:name' />
  </Router>
)

export default CharactersPage
