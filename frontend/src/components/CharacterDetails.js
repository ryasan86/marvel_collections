import React, { useEffect, useState } from 'react'
import SEO from '../components/SEO'
import { MaxWidth } from './common'
import StyledCharacterDetails, {
  BannerSection,
  DescriptionSection,
  ComicsSection,
  LeftColumn,
  RightColumn
} from '../styles/CharacterDetailsStyles'
import DelayMessage from './DelayMessage'
import ErrorBoundary from './ErrorBoundary'
import { Comics } from '../client'

const ComicList = ({ comics }) => {
  if (!comics) {
    return <DelayMessage text='Loading...' />
  }

  if (comics.length === 0) {
    return <DelayMessage text='0 results found 😮' />
  }

  return (
    <ul>
      {comics.map((c, i) => (
        <li key={i}>
          <img src={`${c.thumbnail.path}/portrait_incredible.jpg`} alt='' />
          <span>{c.title}</span>
        </li>
      ))}
    </ul>
  )
}

const CharacterDetails = ({ location: { state } }) => {
  const [isAscending, setIsAscending] = useState(true)
  const [comics, setComics] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    Comics.byCharacter({ page: null, charId: state.id, isAscending })
      .then(setComics)
      .catch(setError)
  }, [])

  return (
    <StyledCharacterDetails>
      <SEO title={state.name} />
      <BannerSection>
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
      </BannerSection>
      <MaxWidth>
        <DescriptionSection>
          <LeftColumn>
            <h3>DESCRIPTION</h3>
          </LeftColumn>
          <RightColumn>
            <p>
              {state.description
                ? state.description
                : 'Description Unavailable'}
            </p>
          </RightColumn>
        </DescriptionSection>
        <ComicsSection>
          <h4>COMICS LIST</h4>
          <ErrorBoundary error={error}>
            <ComicList comics={comics && comics.results} />
          </ErrorBoundary>
        </ComicsSection>
      </MaxWidth>
    </StyledCharacterDetails>
  )
}

export default CharacterDetails
