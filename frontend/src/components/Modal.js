import React from 'react'
import Modal from '../styles/ModalStyles'

const comics = [
  {
    title: 'Friendly Neighborhood Spider-Man (2019-) #1 - Comics by comiXology',
    price: '$1.99',
    image:
      'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/728756/728756._SX400_QL80_TTD_.jpg',
    description:
      'Spider-Man is the worst neighbor EVER! There are always crazy villains and property damage and drama and…and he CATCHES the villains. And he tries to fix the damage and he helps carry your groceries and actually that property damage keeps the rents down. You know what? Spider-Man is the best neighbor ever and this book will give you a closer look at Spider-Man’s (and Peter Parker’s) neighborhood than any book ever. Also, it wouldn’t be a Spider-Man adventure without a threat that could destroy not only Spider-Man, but all his neighbors.',
    url:
      'https://www.comixology.com/Friendly-Neighborhood-Spider-Man-2019-1/digital-comic/728756'
  },
  {
    title: 'Wolverine: Enemy of the State - Comics by comiXology',
    price: '$19.99',
    image:
      'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/20769/APR082366_1._SX400_QL80_TTD_.jpg',
    description:
      'Collects Wolverine (2003) #20-32. Brainwashed by the ninjas of the Hand, Wolverine slices and dices his way through foes and friends alike, ultimately resulting in the death of an X-Man! Captured and reprogrammed, Wolverine is sent against his former masters - but amid an orgy of death and destruction, is even the fiercest mutant alive a match for the dadly stare of the Gorgon?!',
    url:
      'https://www.comixology.com/Wolverine-Enemy-of-the-State/digital-comic/20769'
  }
]

const ModalItem = ({ title, price, image, description, url }) => {
  return (
    <Modal.Item>
      <Modal.Text>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h3>{title}</h3>
        </a>
        <p>{description}</p>
      </Modal.Text>
      <Modal.Price>{price}</Modal.Price>
      <Modal.Image>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} />
        </a>
      </Modal.Image>
    </Modal.Item>
  )
}

const ModalComponent = ({ isVisible, modalRef }) => {
  return (
    <Modal isVisible={isVisible}>
      <Modal.Inner ref={modalRef}>
        {comics.map((props, i) => (
          <ModalItem key={i} {...props} />
        ))}
      </Modal.Inner>
    </Modal>
  )
}

export default ModalComponent
