import CardNotification from '../CardNotification';
import ModalWithBlur from '../ModalWithBlur'

interface ModalRegisterAlertInvalidI{
  openModal: boolean
}

const ModalRegisterAlertInvalid = ({openModal}:ModalRegisterAlertInvalidI) => {
    const imgTitle = "./Images/logo-main.svg";
    const imgbutton = "./Images/arrow-right.png";
  return (
    
    <ModalWithBlur
        content={<CardNotification
            title={"¡Oh no!"}
            context="Se ha producido un error"
            btnText={"Intentalo más tarde"}
            className={"btn btn-light shadow-sm"}
            style={{
              fontWeight: "700",
              width: "150px",
              fontSize: "0.7em",
            }}
          />}
        width={'450px'}
        modalIsOpen={openModal}
        closeModalName={'notification-verify1'}
      
    />
  )
}

export default ModalRegisterAlertInvalid