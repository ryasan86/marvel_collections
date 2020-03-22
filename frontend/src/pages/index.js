import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Home from '../styles/HomeStyles'
import ItemsList from '../components/ItemsList'
import HomePleaseWait from '../components/PleaseWait'
import { H4 } from '../components/common'
import { useCharacters } from '../graphql/CharactersHooks'
import { useComics } from '../graphql/ComicsHooks'

const PleaseWait = props => (
  <Home.Section>
    <HomePleaseWait {...props} />
  </Home.Section>
)

const LatestCharacters = () => {
  const { data, error, loading } = useCharacters({
    page: 1,
    orderBy: '-modified',
    limit: 10
  })

  if (loading || error) {
    return <PleaseWait loading={loading} error={error} itemType="characters" />
  }

  const { edges } = data.characters

  return (
    <Home.Section>
      <H4>LATEST CHARACTERS</H4>
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

const LatestComics = () => {
  const { data, error, loading } = useComics({
    page: 1,
    orderBy: '-modified',
    limit: 10
  })

  if (loading || error) {
    return <PleaseWait loading={loading} error={error} itemType="comics" />
  }

  const { edges } = data.comics

  return (
    <Home.Section>
      <H4>RECENT ADDITIONS</H4>
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
