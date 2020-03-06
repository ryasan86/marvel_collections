import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Home from '../styles/HomeStyles'
import ItemsList from '../components/ItemsList'
import ErrorBoundary from '../components/ErrorBoundary'
import { DelayMessage, H4 } from '../components/common'
import { useCharacters } from '../graphql/CharactersHooks'
import { useComics } from '../graphql/ComicsHooks'

const HomeCharacters = () => {
  const { data, error, loading } = useCharacters({
    page: 1,
    orderBy: '-modified',
    limit: 10
  })

  if (error) {
    return <ErrorBoundary error={error} />
  }
  if (loading) {
    return <DelayMessage text="LOADING CHARACTERS..." />
  }

  const { edges } = data.characters

  return (
    <ItemsList
      slug="/characters"
      error={error}
      items={edges}
      total={10}
      page={1}
    />
  )
}

const HomeComics = () => {
  const { data, error, loading } = useComics({
    page: 1,
    orderBy: '-modified',
    limit: 10
  })

  if (error) {
    return <ErrorBoundary error={error} />
  }
  if (loading) {
    return <DelayMessage text="LOADING COMICS..." />
  }

  const { edges } = data.comics

  return (
    <ItemsList slug="/comics" error={error} items={edges} total={10} page={1} />
  )
}

const HomePage = () => {
  return (
    <Layout>
      <SEO title="Layout" />
      <Home>
        <Home.MaxWidth>
          <H4>LATEST COMICS</H4>
          <HomeComics />
        </Home.MaxWidth>
        <Home.MaxWidth>
          <H4>LATEST CHARACTERS</H4>
          <HomeCharacters />
        </Home.MaxWidth>
      </Home>
    </Layout>
  )
}

export default HomePage
