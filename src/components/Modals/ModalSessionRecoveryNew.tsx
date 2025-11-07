import CardSessionRecovery from '../CardSessionRecovery'
import ModalWithBlur from '../ModalWithBlur'

interface ModalSessionRecoveryNewI{
    openModal: boolean
}
const ModalSessionRecoveryNew = ({openModal}:ModalSessionRecoveryNewI) => {
    return (
            <ModalWithBlur
                content={<CardSessionRecovery />}
                width={'450px'}
                modalIsOpen={openModal}
                closeModalName={'sessionRecoveryDataEmail'}
            
            />
        )
    }

export default ModalSessionRecoveryNew