import { closeAllModals, openModal } from '../store/slices/modal/modalSlice'
import { useAppDispatch } from '../hooks/reduxHook'

const CardNotificationOops = ({
    title,
    context,
    btnText,
    btnAction,
    style,
    iconCard,
    iconCard2,
}: any): JSX.Element => {
    const dispatch = useAppDispatch()
    const openLoginModal = (): void => {
        const payload = {
            modal: 'register-step2',
            data: [],
        }

        dispatch(closeAllModals())
        dispatch(openModal(payload))
    }

    return (
        <div className="cardNotification-oops">
            <div className="notification-oops container text-center">
                <div className="mb-1 log-ops">
                    <img src={iconCard} className="mt-5 pt-3" alt="" />
                </div>

                <div className="row container-notification">
                    <div className="col-md-12 section-text">
                        <span className="title-ops my-5">{title}</span>
                        <span className="py-4 px-5 text-ops d-flex justify-content-center">
                            {context}
                        </span>
                    </div>

                    <div className="col-md-12 section-btn">
                        <button
                            className="btn btn-light btn-notification px-3 py-2 shadow-sm"
                            onClick={openLoginModal}
                            style={style}
                        >
                            <span>{btnText}</span>
                        </button>
                    </div>

                    <button
                        onClick={openLoginModal}
                        className="border-0 d-none d-md-block"
                        style={{ backgroundColor: 'transparent' }}
                    >
                        <div className="mb-1">
                            <img src={iconCard2} className="mt-4" alt="" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardNotificationOops
