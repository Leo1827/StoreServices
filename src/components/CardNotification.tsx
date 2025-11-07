import { closeAllModals, openModal } from '../store/slices/modal/modalSlice'
import { useAppDispatch } from '../hooks/reduxHook'

const CardNotification = ({
    title,
    context,
    btnText,
    btnAction,
    style,
    iconCard,
    iconCardLog,
}: any): JSX.Element => {
    const dispatch = useAppDispatch()
    const openRegisterModal = (): void => {
        const payload = {
            modal: 'verify-email',
            data: [],
        }

        dispatch(closeAllModals())
        dispatch(openModal(payload))
    }
    return (
        <div className="cardNotificationPhone">
            <div className="notification-phone shadow container text-center">
                <div className="row container-notification">
                    <div className="my-3 log-phone">{iconCardLog}</div>
                    <div className="mb-3 img-title">{iconCard}</div>

                    <div className="col-md-12 section-text">
                        <span className="title-notification">{title}</span>
                        <p className="w-50 my-3 context-phone">{context}</p>
                    </div>

                    <div className="col-md-12">
                        <button
                            className="btn-notification border-0"
                            onClick={openRegisterModal}
                            style={style}
                        >
                            <span className="text-button-notification">
                                {btnText}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardNotification
