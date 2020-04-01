import { useQuery, useMutation } from 'react-apollo'
import {
  LOCAL_STATE_QUERY,
  SET_SHOP_FOR_TITLE_MUTATION,
  TOGGLE_MODAL_MUTATION
} from './LocalStateGQL'

export const useLocalState = () => {
  return useQuery(LOCAL_STATE_QUERY)
}


export const useToggleModalMutation = () => {
  return useMutation(TOGGLE_MODAL_MUTATION)
}

export const useSetShopForTitleMutation = ({ shopForTitle }) => {
  return useMutation(SET_SHOP_FOR_TITLE_MUTATION, {
    variables: { shopForTitle }
  })
}
