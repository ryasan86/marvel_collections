import React, { useEffect, useState } from 'react'
import { Router } from '@reach/router'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import ItemsList from '../components/ItemsList'
import CharacterDeets from '../components/CharacterDetails'
import SEO from '../components/SEO'
import ErrorBoundary from '../components/ErrorBoundary'
import Controls from '../components/Controls'
import { MaxWidth } from '../components/common'
import { Characters } from '../client'

const CharactersMain = ({ path: endpoint }) => {
  const [isAscending, setIsAscending] = useState(true)
  const [characters, setCharacters] = useState(null)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState(null)

  useEffect(() => {
    setCharacters(null)
    const charactersPromise = search ? Characters.byName : Characters.getAll
    charactersPromise({ page: null, isAscending, search })
      .then(setCharacters)
      .catch(setError)
  }, [isAscending, search])

  return (
    <Layout>
      <SEO title='Characters' />
      <MaxWidth>
        <h1>CHARACTERS LIST</h1>
        <Controls
          setSearch={setSearch}
          isAscending={isAscending}
          setIsAscending={setIsAscending}
          total={characters && characters.total}
        />
        <ErrorBoundary error={error}>
          <ItemsList
            items={characters && characters.results}
            endpoint={endpoint}
          />
        </ErrorBoundary>
      </MaxWidth>
    </Layout>
  )
}

Characters.propTypes = {
  endpoint: PropTypes.string
}

const CharacterDetails = props => (
  <Layout>
    <CharacterDeets {...props} />
  </Layout>
)

const CharactersPage = () => (
  <Router>
    <CharactersMain path='/characters' />
    <CharacterDetails path='/characters/:name' />
  </Router>
)

export default CharactersPage
