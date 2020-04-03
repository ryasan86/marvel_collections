import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Home from '../styles/HomeStyles'
import ItemsList from '../components/ItemsList'
import { ListHeader } from '../styles/shared'
import { useCharacters } from '../graphql/CharactersHooks'
import { useComics } from '../graphql/ComicsHooks'

const homePageLimit = 10

const LatestComics = () => {
  const { data, error, loading } = useComics({
    page: 1,
    orderBy: '-modified',
    limit: homePageLimit
  })

  return loading || error ? (
    <Home.PleaseWait
      loadingText="loading comics"
      loading={loading}
      error={error}
    />
  ) : (
    <Home.Section>
      <ListHeader>RECENT ADDITIONS</ListHeader>
      <ItemsList
        slug="/comics"
        error={error}
        data={{
          edges: data.comics.edges,
          totalCount: homePageLimit
        }}
        page={1}
      />
    </Home.Section>
  )
}

const LatestCharacters = () => {
  const { data, error, loading } = useCharacters({
    page: 1,
    orderBy: '-modified',
    limit: homePageLimit
  })

  return loading || error ? (
    <Home.PleaseWait
      loadingText="loading characters"
      loading={loading}
      error={error}
    />
  ) : (
    <Home.Section>
      <ListHeader>LATEST CHARACTERS</ListHeader>
      <ItemsList
        slug="/characters"
        error={error}
        data={{
          edges: data.characters.edges,
          totalCount: homePageLimit
        }}
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
