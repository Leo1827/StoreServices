import CardNotificationOops from '../CardNotificationOops';
import ModalWithBlur from '../ModalWithBlur'

interface ModalRegisterAlertOopsI{
  openModal: boolean
}

const ModalRegisterAlertOops = ({openModal}:ModalRegisterAlertOopsI) => {
    const imgTitle = "./Images/logo-main.svg";
    const imgbutton = "./Images/arrow-right.png";
  return (
    
    <ModalWithBlur
        content={<CardNotificationOops
            iconCard={imgTitle}
            title={"¡Oops!"}
            context="Es necesario registrar una cuenta con correo electrónico"
            iconCard2={imgbutton}
            btnText={"Regresar"}
          />}
        width={'450px'}
        modalIsOpen={openModal}
        closeModalName={'notification-oops'}
      
    />
  )
}

export default ModalRegisterAlertOops