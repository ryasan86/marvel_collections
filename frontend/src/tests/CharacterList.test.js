import React from 'react'
import { render } from '@testing-library/react'
import { FetchMock } from '@react-mock/fetch'
import CharactersList from '../components/CharactersList'
import { baseUrl } from '../constants'
import { publicKey, md5 } from '../config/config'
import characters from './utils/charactersSample'
import '@testing-library/jest-dom/extend-expect'

describe('<CharacterList></CharacterList>', () => {
  it('shows a loader during loading state', () => {
    const { getByText } = render(<CharactersList></CharactersList>)
    expect(getByText('Loading...')).toBeInTheDocument()
  })

  it('fetches a list of characters', async () => {
    const queryStr = [`?ts=1`, `limit=36`, `apikey=${publicKey}`, `hash=${md5}`].join('&')
    const url = baseUrl + `v1/public/characters` + queryStr
    const renderCharacters = () => {
      return render(
        <FetchMock matcher={url} response={characters}>
          <CharactersList></CharactersList>
        </FetchMock>
      )
    }
    const { findByTestId, findByText } = renderCharacters()
    const charactersList = await findByTestId('characters-list')
    const characterNames = characters.data.results.map(c => c.name)

    expect(charactersList.children.length).toEqual(characters.data.results.length)
    for (const name of characterNames) {
      expect(await findByText(name)).toBeInTheDocument()
    }
  })
})
