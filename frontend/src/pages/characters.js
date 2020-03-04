import React, { useState, useEffect } from 'react'
import { Router } from '@reach/router'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import ItemsList from '../components/ItemsList'
import CharacterDetails from '../components/CharacterDetails'
import SEO from '../components/SEO'
import ErrorBoundary from '../components/ErrorBoundary'
import Controls from '../components/Controls'
import DelayMessage from '../components/DelayMessage'
import { MaxWidth } from '../components/common'
import { sortMap } from '../components/SortBy'
import { useCharacters, useCharactersByName } from '../graphql/CharactersHooks'

const CharactersList = ({ path, orderBy, search, setTotalCount }) => {
  const [page, setPage] = useState(1)
  const charactersPromise = search ? useCharactersByName : useCharacters
  const characters = charactersPromise({ page, orderBy, search })
  let { data, loading, error, refetch } = characters

  useEffect(() => {
    refetch()
  }, [page, orderBy, search])

  if (loading) {
    return <DelayMessage text='LOADING CHARACTERS...' />
  }

  const { totalCount, edges } = search
    ? data.characterNameStartsWith
    : data.characters
  setTotalCount(totalCount)

  return (
    <>
      <ErrorBoundary error={error}>
        <ItemsList
          path={path}
          error={error}
          items={edges && edges}
          total={totalCount}
          page={page}
          setPage={setPage}
        />
      </ErrorBoundary>
    </>
  )
}

const CharactersMain = ({ path }) => {
  const [orderBy, setOrderBy] = useState(sortMap.characters.ascending_alpha)
  const [totalCount, setTotalCount] = useState(null)
  const [search, setSearch] = useState(null)

  return (
    <Layout>
      <SEO title='Characters' />
      <MaxWidth>
        <h3>CHARACTERS LIST</h3>
        <Controls
          path={path}
          total={totalCount}
          setSearch={setSearch}
          setOrderBy={setOrderBy}
        />
        <CharactersList
          orderBy={orderBy}
          search={search}
          path={path}
          setTotalCount={setTotalCount}
        />
      </MaxWidth>
    </Layout>
  )
}

CharactersMain.propTypes = {
  path: PropTypes.string
}

const CharactersPage = () => (
  <Router>
    <CharactersMain path='/characters' />
    <CharacterDetails path='/characters/:name' />
  </Router>
)

export default CharactersPage
