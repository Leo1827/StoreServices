import React from 'react'
import ModalWithBlur from '../ModalWithBlur'
import CardSessionPassword from '../CardSessionPassword'

interface ModalSessionPasswordI {
    openModal:boolean
}
const ModalSessionPassword = ({openModal}:ModalSessionPasswordI) => {
  return (
    <ModalWithBlur
        content={<CardSessionPassword/>}
        width={'450px'}
        modalIsOpen={openModal}
        closeModalName={'session-step2'}
      
    />
  )
}

export default ModalSessionPassword