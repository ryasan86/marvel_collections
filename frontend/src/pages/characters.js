import React, { useState, useEffect } from 'react'
import { Router } from '@reach/router'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import ItemsList from '../components/items-list'
import CharacterDetails from '../components/character-details'
import SEO from '../components/seo'
import ErrorBoundary from '../components/error-boundary'
import Controls from '../components/controls'
import DelayMessage from '../components/delay-message'
import { MaxWidth } from '../components/common'
import { sortMap } from '../components/sort-by'
import { useCharacters, useCharactersByName } from '../graphql/characters.hook'

const CharactersList = ({ path, orderBy, search, setTotalCount }) => {
  const [page, setPage] = useState(1)
  const charactersPromise = search ? useCharactersByName : useCharacters
  const characters = charactersPromise({ page, orderBy, search })
  const { data, loading, error, refetch } = characters

  useEffect(() => {
    refetch()
  }, [page, orderBy, search])

  if (loading) {
    return <DelayMessage text='LOADING...' />
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
          items={edges}
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
