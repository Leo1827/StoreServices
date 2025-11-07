import React from 'react'
import CardRegisterValid from '../CardRegisterValid'
import ModalWithBlur from '../ModalWithBlur'

interface ModalRegisterStep2I {
    openModal:boolean
}
const ModalRegisterStep2 = ({openModal}:ModalRegisterStep2I) => {
  return (
    <ModalWithBlur
        content={<CardRegisterValid/>}
        width={'450px'}
        modalIsOpen={openModal}
        closeModalName={'register-step2'}
      
    />
  )
}

export default ModalRegisterStep2