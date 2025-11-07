import React from 'react'
import ProfileModal from '../ProfileModal'
import ModalWithBlur from '../ModalWithBlur'

interface ModalSessionProfileI{
    openModal: boolean
}

const ModalSessionProfile = ({openModal}:ModalSessionProfileI) => {
    return (
        <ModalWithBlur
            content={<ProfileModal/>}
            width={'450px'}
            modalIsOpen={openModal}
            closeModalName={'sessionProfile-step3'}
        
        />
    )
}

export default ModalSessionProfile