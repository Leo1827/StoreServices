import CardRegister from '../CardRegister'
import ModalWithBlur from '../ModalWithBlur'

interface ModalRegisterI {
    openModal: boolean
}
const ModalRegister = ({ openModal }: ModalRegisterI): JSX.Element => {
    return (
        <ModalWithBlur
            content={<CardRegister />}
            width={'450px'}
            modalIsOpen={openModal}
            closeModalName={'register-step1'}
        />
    )
}

export default ModalRegister
