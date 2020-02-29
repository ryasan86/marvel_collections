import React, { useEffect, useState } from 'react'
import { Router } from '@reach/router'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Controls from '../components/controls'
import ItemsList from '../components/items-list'
import ErrorBoundary from '../components/error-boundary'
import ComicDetails from '../components/comic-details'
import { MaxWidth } from '../components/common/max-width'
import { Comics } from '../client'
import { sortMap } from '../components/sort-by'

const ComicsMain = ({ path }) => {
  const [orderBy, setOrderBy] = useState(sortMap.comics.ascending_alpha)
  const [comics, setComics] = useState(null)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState(null)
  const [page, setPage] = useState(1)

  useEffect(() => {
    setComics(null)
    const ComicsPromise = search ? Comics.byTitle : Comics.getAll
    ComicsPromise({ page, orderBy, search })
      .then(setComics)
      .catch(setError)
  }, [page, orderBy, search])

  return (
    <Layout>
      <SEO title='Comics' />
      <MaxWidth>
        <h3>COMICS LIST</h3>
        <Controls
          path={path}
          setSearch={setSearch}
          setOrderBy={setOrderBy}
          total={comics && comics.total}
        />
        <ErrorBoundary error={error}>
          <ItemsList
            page={page}
            setPage={setPage}
            path={path}
            total={comics && comics.total}
            items={comics && comics.results}
          />
        </ErrorBoundary>
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
