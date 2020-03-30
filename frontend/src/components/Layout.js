import React, { useState, createContext, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Layout from '../styles/LayoutStyles'
import ModalContent from './Modal'
import Header from './Header'
import Footer from './Footer'
import Main from '../styles/MainStyles'
import { ModalOverlay } from '../styles/ModalStyles'
import { GithubCornerIcon } from './GithubCorner'

export const LocalState = createContext({
  shopForTitle: null,
  setShopForTitle: null,
  modalOpen: null,
  toggleModal: null
})

const LayoutComponent = ({ children }) => {
  const modalRef = useRef(null)
  const [shopForTitle, setShopForTitle] = useState(null)
  const [modalOpen, toggleModal] = useState(false)

  const _toggleModal = e => {
    if (!modalRef.current.contains(e.target)) {
      toggleModal(prevState => !prevState)
    }
  }

  useEffect(() => {
    if (modalOpen) document.addEventListener('click', _toggleModal)
    return () => document.removeEventListener('click', _toggleModal)
  }, [modalOpen])

  const value = { shopForTitle, setShopForTitle, modalOpen, _toggleModal }

  return (
    <LocalState.Provider value={value}>
      <Layout>
        <Layout.Inner modalOpen={modalOpen}>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </Layout.Inner>
        <ModalOverlay modalOpen={modalOpen} />
        {shopForTitle && (
          <ModalContent
            modalRef={modalRef}
            modalOpen={modalOpen}
            shopForTitle={shopForTitle}
          />
        )}
      </Layout>
      <GithubCornerIcon />
    </LocalState.Provider>
  )
}

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired
}

export default LayoutComponent
