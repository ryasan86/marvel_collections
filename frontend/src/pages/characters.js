import React, { useEffect, useState } from 'react'
import { Router } from '@reach/router'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import ItemsList from '../components/ItemsList'
import CharacterDetails from '../components/CharacterDetails'
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
  const [page, setPage] = useState(1)

  useEffect(() => {
    setCharacters(null)
    const charactersPromise = search ? Characters.byName : Characters.getAll
    charactersPromise({ page, isAscending, search })
      .then(setCharacters)
      .catch(setError)
  }, [page, isAscending, search])

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
            page={page}
            setPage={setPage}
            endpoint={endpoint}
            total={characters && characters.total}
            items={characters && characters.results}
          />
        </ErrorBoundary>
      </MaxWidth>
    </Layout>
  )
}

Characters.propTypes = {
  endpoint: PropTypes.string
}

const CharactersPage = () => (
  <Router>
    <CharactersMain path='/characters' />
    <CharacterDetails path='/characters/:name' />
  </Router>
)

export default CharactersPage
