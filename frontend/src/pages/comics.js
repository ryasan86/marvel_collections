import React, { useEffect, useState } from 'react'
import { Router } from '@reach/router'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Controls from '../components/controls'
import ItemsList from '../components/items-list'
import ErrorBoundary from '../components/error-boundary'
import ComicDetails from '../components/comic-details'
import DelayMessage from '../components/delay-message'
import { MaxWidth } from '../components/common/max-width'
import { sortMap } from '../components/sort-by'
import { useComics, useComicsByTitle } from '../graphql/comics.hook'

const ComicsList = ({ path, orderBy, search, setTotalCount }) => {
  const [page, setPage] = useState(1)
  const comicsPromise = search ? useComicsByTitle : useComics
  const comics = comicsPromise({ page, orderBy, search })
  const { data, loading, error, refetch } = comics

  // useEffect(() => {
  //   refetch()
  // }, [page, orderBy, search])

  if (error) {
    return <ErrorBoundary error={error}></ErrorBoundary>
  }

  if (loading) {
    return <DelayMessage text='LOADING...' />
  }

  const { totalCount, edges } = search ? data.comicTitleStartsWith : data.comics
  setTotalCount(totalCount)

  return (
    <>
      <ErrorBoundary error={error}>
        <ItemsList
          path={path}
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

const ComicsMain = ({ path }) => {
  const [orderBy, setOrderBy] = useState(sortMap.comics.ascending_alpha)
  const [totalCount, setTotalCount] = useState(null)
  const [search, setSearch] = useState(null)

  return (
    <Layout>
      <SEO title='Comics' />
      <MaxWidth>
        <h3>COMICS LIST</h3>
        <Controls
          path={path}
          total={totalCount}
          setSearch={setSearch}
          setOrderBy={setOrderBy}
        />
        <ComicsList
          orderBy={orderBy}
          search={search}
          path={path}
          setTotalCount={setTotalCount}
        />
      </MaxWidth>
    </Layout>
  )
}

ComicsMain.propTypes = {
  path: PropTypes.string
}

const ComicsPage = () => (
  <Router>
    <ComicsMain path='/comics' />
    <ComicDetails path='/comics/:title' />
  </Router>
)

export default ComicsPage
