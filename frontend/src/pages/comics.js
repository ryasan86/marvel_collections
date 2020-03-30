import React, { useState, useEffect } from 'react'
import { Router } from '@reach/router'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ComicsList from '../styles/ComicsPageStyles'
import Controls from '../components/Controls'
import ItemsList from '../components/ItemsList'
import ComicDetails from '../components/ComicDetails'
import PleaseWait from '../components/PleaseWait'
import { sortMap } from '../components/SortBy'
import { useComics, useComicsByTitle } from '../graphql/ComicsHooks'

const ComicsInner = ({ slug, orderBy, search, setSearch, setOrderBy }) => {
  const [page, setPage] = useState(1)
  const comicsPromise = search ? useComicsByTitle : useComics
  const { data, loading, error, refetch } = comicsPromise({
    page,
    orderBy,
    search
  })
  useEffect(() => {
    refetch()
  }, [page, orderBy, search])

  if (loading || error) {
    return (
      <ComicsList.PleaseWaitContainer>
        <PleaseWait
          loading={loading}
          error={error}
          loadingText="loading comics..."
        />
      </ComicsList.PleaseWaitContainer>
    )
  }

  const comics = search // prettier-ignore
    ? data.comicTitleStartsWith
    : data.comics

  return (
    <ComicsList>
      <ComicsList.Header>COMICS</ComicsList.Header>
      <Controls
        slug={slug}
        total={comics.totalCount}
        setSearch={setSearch}
        setOrderBy={setOrderBy}
      />
      <ItemsList
        slug={slug}
        error={error}
        data={comics}
        page={page}
        setPage={setPage}
      />
    </ComicsList>
  )
}

const Comics = ({ path: slug }) => {
  const [orderBy, setOrderBy] = useState(sortMap.comics.ascending_alpha)
  const [search, setSearch] = useState(null)

  return (
    <Layout>
      <SEO title="Comics" />
      <ComicsInner
        slug={slug}
        search={search}
        setSearch={setSearch}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
      />
    </Layout>
  )
}

Comics.propTypes = {
  slug: PropTypes.string
}

const ComicsPage = () => (
  <Router>
    <Comics path="/comics" />
    <ComicDetails path="/comics/:id" />
  </Router>
)

export default ComicsPage
