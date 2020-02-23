import React, { useEffect, useState } from 'react'
import SEO from '../components/SEO'
import CharactersList from '../components/CharactersList'
import ErrorBoundary from '../components/ErrorBoundary'
import Layout from '../components/Layout'
import Controls from '../components/Controls'
import Loader from '../components/Loader'
import MaxWidth from '../styles/common/MaxWidth'
import { Characters } from '../client'

const CharactersPage = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(null)
  const [isAscending, setIsAscending] = useState(true)
  const [search, setSearch] = useState(null)
  const [error, setError] = useState(null)

  const searchTerm = term => {
    setSearch(term)
  }

  useEffect(() => {
    setIsLoading(true)
    Characters.getAll(null, isAscending, search)
      .then(res => setCharacters(res.data.results))
      .catch(err => setError(err))
      .then(() => setIsLoading(false))
  }, [isAscending, search])

  return (
    <Layout>
      <SEO title='Characters'></SEO>
      <MaxWidth>
        <h1>MARVEL CHARACTERS LIST</h1>
        <Controls
          searchTerm={searchTerm}
          isAscending={isAscending}
          setIsAscending={setIsAscending}
        />
        <ErrorBoundary error={error}>
          {isLoading ? <Loader /> : <CharactersList characters={characters} />}
        </ErrorBoundary>
      </MaxWidth>
    </Layout>
  )
}

export default CharactersPage
