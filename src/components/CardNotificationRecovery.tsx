import { closeAllModals, openModal } from '../store/slices/modal/modalSlice'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook'

const CardNotificationRecovery = ({
    title,
    context,
    btnText,
    btnAction,
    style,
    iconCard,
    iconCardLog,
}: any): JSX.Element => {
    const { data } = useAppSelector((state) => state.modal)

    const dispatch = useAppDispatch()
    const openRecoveryModal = (): void => {
        const payload = {
            modal: 'verify-email-password',
            data: [data[0]],
        }

        dispatch(closeAllModals())
        dispatch(openModal(payload))
    }

    return (
        <div className="cardNotificationPhone">
            <div className="notification-phone shadow container text-center">
                <div className="row container-notification">
                    <div>
                        <img
                            src={iconCardLog}
                            alt=""
                            className="notification-img"
                        />
                    </div>
                    <div className="mb-1">{iconCard}</div>

                    <div className="col-md-12 section-text">
                        <h2>{title}</h2>
                        <span className="context-phone">{context}</span>
                    </div>

                    <div className="col-md-12">
                        <button
                            className="btn btn-light btn-notification px-3 py-2 shadow-sm"
                            onClick={openRecoveryModal}
                            style={style}
                        >
                            <span className="text-white">{btnText}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardNotificationRecovery
