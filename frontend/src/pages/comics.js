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
import { sortMap } from '../components/SortBy'

const ComicsMain = ({ path: endpoint }) => {
  const [orderBy, dispatchOrderBy] = useState(sortMap.comics.ascending_alpha)
  const [comics, setComics] = useState(null)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState(null)
  const [page, setPage] = useState(1)

  useEffect(() => {
    setComics(null)
    const ComicsPromise = search ? Comics.byTitle : Comics.getAll
    ComicsPromise({ page, orderBy, search })
      .then(res => console.log(res) || setComics(res))
      .catch(setError)
  }, [page, orderBy, search])

  return (
    <Layout>
      <SEO title='Comics' />
      <MaxWidth>
        <h1>COMICS LIST</h1>
        <Controls
          endpoint={endpoint}
          setSearch={setSearch}
          dispatchOrderBy={dispatchOrderBy}
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
