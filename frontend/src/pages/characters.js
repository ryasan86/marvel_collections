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
import { sortMap } from '../components/SortBy'

const CharactersMain = ({ path: endpoint }) => {
  const [orderBy, dispatchOrderBy] = useState(sortMap.characters.ascending_alpha)
  const [characters, setCharacters] = useState(null)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState(null)
  const [page, setPage] = useState(1)

  useEffect(() => {
    setCharacters(null)
    const charactersPromise = search ? Characters.byName : Characters.getAll
    charactersPromise({ page, orderBy, search })
      .then(setCharacters)
      .catch(setError)
  }, [page, orderBy, search])

  return (
    <Layout>
      <SEO title='Characters' />
      <MaxWidth>
        <h1>CHARACTERS LIST</h1>
        <Controls
          endpoint={endpoint}
          setSearch={setSearch}
          dispatchOrderBy={dispatchOrderBy}
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
