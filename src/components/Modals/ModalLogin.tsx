import CardSession from '../CardSession'
import ModalWithBlur from '../ModalWithBlur'

const ModalLogin = ({ openModal }: any): JSX.Element => {
    return (
        <ModalWithBlur
            content={<CardSession />}
            width={'450px'}
            modalIsOpen={openModal}
            closeModalName={'login-modal'}
        />
    )
}

export default ModalLogin
