import React, { useEffect, useState } from 'react'
import SEO from '../components/SEO'
import CharactersList from '../components/CharactersList'
import ErrorBoundary from '../components/ErrorBoundary'
import Layout from '../components/Layout'
import Controls from '../components/Controls'
import MaxWidth from '../styles/common/MaxWidth'
import { Characters } from '../client'

const CharactersPage = () => {
  const [isAscending, setIsAscending] = useState(true)
  const [characters, setCharacters] = useState({})
  const [error, setError] = useState(null)
  const [search, setSearch] = useState(null)
  const setCharactersData = res => setCharacters(res.data)

  useEffect(() => {
    const charactersPromise = search ? Characters.byName : Characters.getAll
    charactersPromise(null, isAscending, search)
      .then(setCharactersData)
      .catch(setError)
  }, [isAscending, search])

  return (
    <Layout>
      <SEO title='Characters'></SEO>
      <MaxWidth>
        <h1>MARVEL CHARACTERS LIST</h1>
        <Controls
          setSearch={setSearch}
          isAscending={isAscending}
          setIsAscending={setIsAscending}
          total={characters.total}
        />
        <ErrorBoundary error={error}>
          <CharactersList characters={characters.results} />
        </ErrorBoundary>
      </MaxWidth>
    </Layout>
  )
}

export default CharactersPage
