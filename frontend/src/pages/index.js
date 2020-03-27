import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Home from '../styles/HomeStyles'
import ItemsList from '../components/ItemsList'
import { ListHeader } from '../components/common'
import { useCharacters } from '../graphql/CharactersHooks'
import { useComics } from '../graphql/ComicsHooks'

const LatestComics = () => {
  const { data, error, loading } = useComics({
    page: 1,
    orderBy: '-modified',
    limit: 10
  })

  if (loading || error) {
    return (
      <Home.PleaseWait
        loading={loading}
        error={error}
        loadingText="loading comics"
      />
    )
  }

  const { edges } = data.comics

  return (
    <Home.Section>
      <ListHeader>RECENT ADDITIONS</ListHeader>
      <ItemsList
        slug="/comics"
        error={error}
        items={edges}
        total={10}
        page={1}
      />
    </Home.Section>
  )
}

const LatestCharacters = () => {
  const { data, error, loading } = useCharacters({
    page: 1,
    orderBy: '-modified',
    limit: 10
  })

  if (loading || error) {
    return (
      <Home.PleaseWait
        loading={loading}
        error={error}
        loadingText="loading characters"
      />
    )
  }

  const { edges } = data.characters

  return (
    <Home.Section>
      <ListHeader>LATEST CHARACTERS</ListHeader>
      <ItemsList
        slug="/characters"
        error={error}
        items={edges}
        total={10}
        page={1}
      />
    </Home.Section>
  )
}

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <Home>
      <LatestComics />
      <LatestCharacters />
    </Home>
  </Layout>
)

export default HomePage
