import React, { useState, useEffect } from 'react'
import { Router } from '@reach/router'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Controls from '../components/Controls'
import ItemsList from '../components/ItemsList'
import ErrorBoundary from '../components/ErrorBoundary'
import ComicDetails from '../components/ComicDetails'
import DelayMessage from '../components/DelayMessage'
import { MaxWidth, H3 } from '../components/common'
import { sortMap } from '../components/SortBy'
import { useComics, useComicsByTitle } from '../graphql/ComicsHooks'

const ComicsList = ({ slug, orderBy, search, setTotalCount }) => {
  const [page, setPage] = useState(1)
  const comicsPromise = search ? useComicsByTitle : useComics
  const comics = comicsPromise({ page, orderBy, search })
  const { data, loading, error, refetch } = comics

  useEffect(() => {
    refetch()
  }, [page, orderBy, search])

  if (loading) {
    return <DelayMessage text="LOADING COMICS..." />
  }

  const { totalCount, edges } = search ? data.comicTitleStartsWith : data.comics
  setTotalCount(totalCount)

  return (
    <>
      <ErrorBoundary error={error}>
        <ItemsList
          slug={slug}
          error={error}
          items={edges}
          total={totalCount}
          page={page}
          setPage={setPage}
        />
      </ErrorBoundary>
    </>
  )
}

const ComicsMain = ({ path: slug }) => {
  const [orderBy, setOrderBy] = useState(sortMap.comics.ascending_alpha)
  const [totalCount, setTotalCount] = useState(null)
  const [search, setSearch] = useState(null)

  return (
    <Layout>
      <SEO title="Comics" />
      <MaxWidth>
        <H3>COMICS LIST</H3>
        <Controls
          slug={slug}
          total={totalCount}
          setSearch={setSearch}
          setOrderBy={setOrderBy}
        />
        <ComicsList
          orderBy={orderBy}
          search={search}
          slug={slug}
          setTotalCount={setTotalCount}
        />
      </MaxWidth>
    </Layout>
  )
}

ComicsMain.propTypes = {
  slug: PropTypes.string
}

const ComicsPage = () => (
  <Router>
    <ComicsMain path="/comics" />
    <ComicDetails path="/comics/:title" />
  </Router>
)

export default ComicsPage
