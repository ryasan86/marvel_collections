import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Layout from '../styles/LayoutStyles'
import ModalContent from './Modal'
import Header from './Header'
import Footer from './Footer'
import Main from '../styles/MainStyles'
import { ModalOverlay } from '../styles/ModalStyles'
import { GithubCornerIcon } from './GithubCorner'
import {
  useLocalState,
  useToggleModalMutation
} from '../graphql/LocalStateHooks'

const LayoutComponent = ({ children }) => {
  const modalRef = useRef(null)
  const { data: { shopForTitle, modalOpen } } = useLocalState() // prettier-ignore
  const [toggleModal] = useToggleModalMutation()

  const _toggleModal = e => {
    if (!modalRef.current.contains(e.target)) {
      toggleModal(prevState => !prevState)
    }
  }

  useEffect(() => {
    if (modalOpen) document.addEventListener('click', _toggleModal)
    return () => document.removeEventListener('click', _toggleModal)
  }, [modalOpen])

  return (
    <Layout>
      <Layout.Inner modalOpen={modalOpen}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Layout.Inner>
      <GithubCornerIcon />
      <ModalOverlay modalOpen={modalOpen} />
      {shopForTitle && (
        <ModalContent
          modalRef={modalRef}
          modalOpen={modalOpen}
          shopForTitle={shopForTitle}
        />
      )}
    </Layout>
  )
}

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired
}

export default LayoutComponent
