import { useAppSelector } from '../hooks/reduxHook'
import ModalProfile from '../components/Modals/ModalSessionProfile'
import ModalProfileImg from '../components/Modals/ModalSessionProfileImg'
const PrivateModals = () => {
    const {
        isOpenSessionProfileModal,
        isOpenSessionProfile,
      }= useAppSelector(state=> state.modal)
  return (
    <>

    <ModalProfileImg openModal={isOpenSessionProfileModal} />
    <ModalProfile openModal={isOpenSessionProfile} />
   
</>
  )
}

export default PrivateModals