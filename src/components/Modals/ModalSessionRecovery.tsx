import CardSessionRecovery from '../CardSessionRecovery'
import ModalWithBlur from '../ModalWithBlur'

interface ModalSessionRecoveryI{
    openModal: boolean
}
const ModalSessionRecovery = ({openModal}:ModalSessionRecoveryI) => {
    return (
            <ModalWithBlur
                content={<CardSessionRecovery />}
                width={'450px'}
                modalIsOpen={openModal}
                closeModalName={'session-step2'}
            
            />
        )
    }

export default ModalSessionRecovery