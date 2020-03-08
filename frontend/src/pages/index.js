import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Home from '../styles/HomeStyles'
import ItemsList from '../components/ItemsList'
import PleaseWait from '../components/PleaseWait'
import { H4 } from '../components/common'
import { useCharacters } from '../graphql/CharactersHooks'
import { useComics } from '../graphql/ComicsHooks'
import { limit } from '../constants'

const HomeCharacters = () => {
  const { data, error, loading } = useCharacters({
    page: Math.ceil(1493 / limit),
    orderBy: '-modified',
    limit: 10
  })

  if (loading || error) {
    return <PleaseWait loading={loading} error={error} itemType="characters" />
  }

  const { edges } = data.characters

  return (
    <Home.MaxWidth>
      <H4>LATEST CHARACTERS</H4>
      <ItemsList
        slug="/characters"
        error={error}
        items={edges}
        total={10}
        page={1}
      />
    </Home.MaxWidth>
  )
}

const HomeComics = () => {
  const { data, error, loading } = useComics({
    page: Math.ceil(46793 / limit),
    orderBy: '-modified',
    limit: 10
  })

  if (loading || error) {
    return <PleaseWait loading={loading} error={error} itemType="comics" />
  }

  const { edges } = data.comics

  return (
    <Home.MaxWidth>
      <H4>RECENT ADDITIONS</H4>
      <ItemsList
        slug="/comics"
        error={error}
        items={edges}
        total={10}
        page={1}
      />
    </Home.MaxWidth>
  )
}

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <Home>
      <HomeComics />
      <HomeCharacters />
    </Home>
  </Layout>
)

export default HomePage
