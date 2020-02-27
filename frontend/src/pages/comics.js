import React, { useEffect, useState } from 'react'
import { Router } from '@reach/router'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Controls from '../components/Controls'
import ItemsList from '../components/ItemsList'
import ErrorBoundary from '../components/ErrorBoundary'
import ComicDetails from '../components/ComicDetails'
import { MaxWidth } from '../components/common/MaxWidth'
import { Comics } from '../client'

const ComicsMain = ({ path: endpoint }) => {
  const [isAscending, setIsAscending] = useState(true)
  const [comics, setComics] = useState(null)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState(null)
  const [page, setPage] = useState(1)

  useEffect(() => {
    setComics(null)
    const ComicsPromise = search ? Comics.byTitle : Comics.getAll
    ComicsPromise({ page, isAscending, search })
      .then(setComics)
      .catch(setError)
  }, [page, isAscending, search])

  return (
    <Layout>
      <SEO title='Comics' />
      <MaxWidth>
        <h1>COMICS LIST</h1>
        <Controls
          setSearch={setSearch}
          isAscending={isAscending}
          setIsAscending={setIsAscending}
          total={comics && comics.total}
        />
        <ErrorBoundary error={error}>
          <ItemsList
            page={page}
            setPage={setPage}
            endpoint={endpoint}
            total={comics && comics.total}
            items={comics && comics.results}
          />
        </ErrorBoundary>
      </MaxWidth>
    </Layout>
  )
}

ComicsMain.propTypes = {
  endpoint: PropTypes.string
}

const ComicsPage = () => (
  <Router>
    <ComicsMain path='/comics' />
    <ComicDetails path='/comics/*' />
  </Router>
)

export default ComicsPage
