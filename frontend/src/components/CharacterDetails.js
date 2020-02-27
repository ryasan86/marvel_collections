import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import SEO from '../components/SEO'
import StyledCharacterDetails, {
  Banner,
  Description,
  CharacterComics,
  LeftColumn,
  RightColumn
} from '../styles/CharacterDetailsStyles'
import Layout from './Layout'
import ItemsList from './ItemsList'
import SortBy, { sortMap } from './SortBy'
import ErrorBoundary from './ErrorBoundary'
import { Row } from './common/Row'
import { MaxWidth } from './common'
import { Comics, Characters } from '../client'

const BannerSection = ({ state }) => (
  <Banner>
    <MaxWidth>
      <LeftColumn>
        <img
          src={state.thumbnail.path + '/portrait_incredible.jpg'}
          alt={state.name}
        />
      </LeftColumn>
      <RightColumn>
        <h1>{state.name}</h1>
      </RightColumn>
    </MaxWidth>
  </Banner>
)

const DescriptionSection = ({ state }) => (
  <Description>
    <LeftColumn>
      <h3>DESCRIPTION</h3>
    </LeftColumn>
    <RightColumn>
      <p>{state.description ? state.description : 'DESCRIPTION UNAVAILABLE'}</p>
    </RightColumn>
  </Description>
)

const CharacterComicsSection = ({
  dispatchOrderBy,
  error,
  page,
  setPage,
  comics
}) => (
  <CharacterComics>
    <Row className='comics-list-row'>
      <LeftColumn>
        <h3>COMICS LIST</h3>
      </LeftColumn>
      <SortBy dispatchOrderBy={dispatchOrderBy} endpoint='/comics' />
    </Row>
    <ErrorBoundary error={error}>
      <ItemsList
        page={page}
        setPage={setPage}
        total={comics && comics.total}
        items={comics && comics.results}
        endpoint='/comics'
      />
    </ErrorBoundary>
  </CharacterComics>
)


const CharacterDetails = ({ location: { state } }) => {
  const [orderBy, dispatchOrderBy] = useState(sortMap.comics.ascending_alpha)
  const [comics, setComics] = useState(null)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)

  useEffect(() => {
    setComics(null)
    Comics.byCharacter({ page, orderBy, charId: state.id })
      .then(setComics)
      .catch(setError)
  }, [page, orderBy])

  return (
    <Layout>
      <StyledCharacterDetails>
        <SEO title={state.name} />
        <BannerSection state={state} />
        <DescriptionSection state={state}></DescriptionSection>
        <CharacterComicsSection
          orderBy={orderBy}
          error={error}
          page={page}
          setPage={setPage}
          comics={comics}
          dispatchOrderBy={dispatchOrderBy}
        />
      </StyledCharacterDetails>
    </Layout>
  )
}

Characters.propTypes = {
  state: PropTypes.object.isRequired
}

export default CharacterDetails
