import CardSessionValid from '../CardSessionValid'
import ModalWithBlur from '../ModalWithBlur'

interface ModalSessionValidI{
    openModal: boolean
}
const ModalSessionValid = ({openModal}:ModalSessionValidI) => {
    return (
            <ModalWithBlur
                content={<CardSessionValid />}
                width={'450px'}
                modalIsOpen={openModal}
                closeModalName={'session-step1'}
            
            />
        )
    }

export default ModalSessionValid