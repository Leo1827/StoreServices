import CardVerifyPassword from '../CardRegisterVerifyPassword'
import ModalWithBlur from '../ModalWithBlur'

const ModalVerifyEmailPassword = ({ openModal }: any): JSX.Element => {
    return (
        <ModalWithBlur
            content={<CardVerifyPassword />}
            width={'450px'}
            modalIsOpen={openModal}
            closeModalName={'verify-email-password'}
        />
    )
}

export default ModalVerifyEmailPassword
