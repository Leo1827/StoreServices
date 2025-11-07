import { useAppSelector } from '../hooks/reduxHook'
import ModalLogin from '../components/Modals/ModalLogin'
import ModalRegister from '../components/Modals/ModalRegister'
import ModalRegisterStep2 from '../components/Modals/ModalRegisterStep2'
import ModalVerifyEmail from '../components/Modals/ModalVerifyEmail'
import ModalVerifyPassword from '../components/Modals/ModalVerifyEmailPassword'
import ModalRegisterAlertVerify from '../components/Modals/ModalRegisterAlertVerify'
import ModalSessionValid from '../components/Modals/ModalSessionValid'
import ModalSessionPassword from '../components/Modals/ModalSessionPassword'
import ModalRegisterAlertOops from '../components/Modals/ModalRegisterAlertOops'
import ModalRegisterAlertInvalid from '../components/Modals/ModalRegisterAlertInvalid'
import ModalSessionRecoveryNew from '../components/Modals/ModalSessionRecoveryNew'
import ModalRegisterAlertVerifyPass from '../components/Modals/ModalRegisterAlertVerifyPass'

const PublicModals = (): JSX.Element => {
    const {
        isOpenRegisterModal,
        isOpenLoginModal,
        isOpenRegisterModalStep2,
        isOpenVerifyEmail,
        isOpenNotificationMsg,
        isOpenNotificationRecovery,
        isOpenNotificationOops,
        isOpenNotificationVerify1,
        isOpenSessionModal,
        isOpenSessionPasswordModal,
        isOpenSessionRecovery,
        isOpenVerifyEmailPassword,
    } = useAppSelector((state) => state.modal)

    return (
        <>
            <ModalLogin openModal={isOpenLoginModal} />
            <ModalRegister openModal={isOpenRegisterModal} />
            <ModalRegisterStep2 openModal={isOpenRegisterModalStep2} />
            <ModalVerifyEmail openModal={isOpenVerifyEmail} />
            <ModalVerifyPassword openModal={isOpenVerifyEmailPassword} />
            <ModalRegisterAlertVerify openModal={isOpenNotificationMsg} />
            <ModalRegisterAlertVerifyPass
                openModal={isOpenNotificationRecovery}
            />
            <ModalRegisterAlertOops openModal={isOpenNotificationOops} />
            <ModalRegisterAlertInvalid openModal={isOpenNotificationVerify1} />
            <ModalSessionPassword openModal={isOpenSessionPasswordModal} />
            <ModalSessionValid openModal={isOpenSessionModal} />
            <ModalSessionRecoveryNew openModal={isOpenSessionRecovery} />
        </>
    )
}

export default PublicModals
