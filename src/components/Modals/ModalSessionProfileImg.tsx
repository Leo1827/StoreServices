import ProfileImg from '../ProfileImg'
import ModalWithBlur from '../ModalWithBlur'

interface ModalSessionProfileImgI {
    openModal: boolean
}

const ModalSessionProfileImg = ({
    openModal,
}: ModalSessionProfileImgI): JSX.Element => {
    return (
        <ModalWithBlur
            content={<ProfileImg />}
            width={'800px'}
            modalIsOpen={openModal}
            closeModalName={'sessionProfile-step2'}
        />
    )
}

export default ModalSessionProfileImg
