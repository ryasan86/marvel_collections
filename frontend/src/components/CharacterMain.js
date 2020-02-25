import React, { useEffect, useState } from 'react'
import SEO from '../components/SEO'
import CharactersList from '../components/CharactersList'
import ErrorBoundary from '../components/ErrorBoundary'
import Controls from '../components/Controls'
import { MaxWidth } from '../styles/common';
import { Characters } from '../client'

const CharactersMain = () => {
  const [isAscending, setIsAscending] = useState(true)
  const [characters, setCharacters] = useState(null)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState(null)
  const setCharactersData = res => setCharacters(res.data)

  useEffect(() => {
    setCharacters(null)
    const charactersPromise = search ? Characters.byName : Characters.getAll
    charactersPromise(null, isAscending, search)
      .then(setCharactersData)
      .catch(setError)
  }, [isAscending, search])

  return (
    <>
      <SEO title='Characters' />
      <MaxWidth>
        <h1>MARVEL CHARACTERS LIST</h1>
        <Controls
          setSearch={setSearch}
          isAscending={isAscending}
          setIsAscending={setIsAscending}
          total={characters && characters.total}
        />
        <ErrorBoundary error={error}>
          <CharactersList characters={characters && characters.results} />
        </ErrorBoundary>
      </MaxWidth>
    </>
  )
}

export default CharactersMain
