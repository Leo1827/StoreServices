/* eslint-disable import/no-duplicates */
import ReactModal from 'react-modal'
import Modal from 'react-modal'
import { useDispatch } from 'react-redux'
import { closeModal } from '../store/slices/modal/modalSlice'

interface FormComponentI {
    component: JSX.Element
}
function FormComponent({ component }: FormComponentI): JSX.Element {
    return <>{component}</>
}

const ModalWithBlur = ({
    width,
    height,
    modalIsOpen,
    closeModalName,
    content,
}: any): JSX.Element => {
    const dispatch = useDispatch()

    Modal.setAppElement('#root')

    const closeModals = (): void => {
        const payload = {
            modal: closeModalName,
            data: [],
        }
        dispatch(closeModal(payload))
    }
    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(2px)',
        },
        content: {
            width,
            height,
        },
        bodyOpenClassName: 'ReactModal__Body--open',
    }

    return (
        <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModals}
            style={customStyles}
            contentLabel="Example Modal"
            className={'modal'}
        >
            <FormComponent component={content} />
        </ReactModal>
    )
}

export default ModalWithBlur
