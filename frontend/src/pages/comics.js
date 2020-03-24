import React, { useState, useEffect } from 'react'
import { Router } from '@reach/router'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Controls from '../components/Controls'
import ItemsList from '../components/ItemsList'
import ComicDetails from '../components/ComicDetails'
import PleaseWait from '../components/PleaseWait'
import { MaxWidth, H4 } from '../components/common'
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

  if (loading || error) {
    return (
      <PleaseWait
        loading={loading}
        error={error}
        loadingText="loading comics"
      />
    )
  }

  const { totalCount, edges } = search ? data.comicTitleStartsWith : data.comics
  setTotalCount(totalCount)

  return (
    <ItemsList
      slug={slug}
      error={error}
      items={edges}
      total={totalCount}
      page={page}
      setPage={setPage}
    />
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
        <H4>COMICS</H4>
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
