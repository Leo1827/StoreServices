import React from 'react'
import CardVerify from '../CardRegisterVerify'
import ModalWithBlur from '../ModalWithBlur'

const ModalVerifyEmail = ({openModal}:any) => {
  return (
    <ModalWithBlur
        content={<CardVerify/>}
        width={'450px'}
        modalIsOpen={openModal}
        closeModalName={'verify-email'}
      
    />
  )
}

export default ModalVerifyEmail