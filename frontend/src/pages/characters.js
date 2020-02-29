import React, { useEffect, useState } from 'react'
import { Router } from '@reach/router'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import ItemsList from '../components/ItemsList'
import CharacterDetails from '../components/CharacterDetails'
import SEO from '../components/SEO'
import ErrorBoundary from '../components/ErrorBoundary'
import Controls from '../components/Controls'
import DelayMessage from '../components/DelayMessage'
import { MaxWidth } from '../components/common'
import { Characters } from '../client'
import { sortMap } from '../components/SortBy'

const ALL_CHARACTERS = gql`
  query allCharacters($orderBy: String, $page: Int!) {
    characters(orderBy: $orderBy, page: $page) {
      totalCount
      edges {
        node {
          id
          name
          description
          thumbnail
        }
      }
    }
  }
`

const CharactersMain = ({ path }) => {
  const [orderBy, setOrderBy] = useState(sortMap.characters.ascending_alpha)
  const [search, setSearch] = useState(null)
  const [page, setPage] = useState(1)
  const { data, loading, error } = useQuery(ALL_CHARACTERS, {
    variables: { page, orderBy, search }
  })
  if (loading) {
    return <DelayMessage text='LOADING...' />
  }
  const { characters: { totalCount, edges } } = data

  // useEffect(() => {
  //   setCharacters(null)
  //   // const charactersPromise = search ? Characters.byName : Characters.getAll
  //   // charactersPromise({ page, orderBy, search })
  //   //   .then(setCharacters)
  //   //   .catch(err => console.log(err))
    
  // }, [page, orderBy, search])

  return (
    <Layout>
      <SEO title='Characters' />
      <MaxWidth>
        <h3>CHARACTERS LIST</h3>
        <Controls
          path={path}
          setSearch={setSearch}
          setOrderBy={setOrderBy}
          total={totalCount}
        />
        <ErrorBoundary error={error}>
          <ItemsList
            page={page}
            setPage={setPage}
            path={path}
            total={totalCount}
            items={edges}
          />
        </ErrorBoundary>
      </MaxWidth>
    </Layout>
  )
}

Characters.propTypes = {
  path: PropTypes.string
}

const CharactersPage = () => (
  <Router>
    <CharactersMain path='/characters' />
    <CharacterDetails path='/characters/:name' />
  </Router>
)

export default CharactersPage
