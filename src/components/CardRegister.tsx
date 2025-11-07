import { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import { verifyEmail } from '../services/RegisterServices'
import { useAppDispatch } from '../hooks/reduxHook'
import { closeAllModals, openModal } from '../store/slices/modal/modalSlice'
import { registerStep1 } from '../store/slices/auth/authSlice'
import InputEmail from './Inputs/InputEmail'

const CardRegister = (): JSX.Element => {
    const [messageError, setMessageError] = useState<string>('')
    const [hasError, setHasError] = useState(false)
    const RegisterSchema = Yup.object().shape({
        email: Yup.string()
            .email('Correo no válido')
            .required('El email debe ser requerido.'),
    })

    const dispatch = useAppDispatch()

    const clientId =
        '1011636464690-i83u49drvt3hhvuift0si9ur2jeas30r.apps.googleusercontent.com'

    const openLoginModal = (): void => {
        const payload = {
            modal: 'login-modal',
            data: [],
        }

        dispatch(closeAllModals())
        dispatch(openModal(payload))
    }

    const handleCloseModal = (): void => {
        dispatch(closeAllModals())
    }

    return (
        <Formik
            initialValues={{ email: '' }}
            validationSchema={RegisterSchema}
            onSubmit={async (values) => {
                verifyEmail(values.email)
                    .then((resp) => {
                        //
                        if (resp.status === 200) {
                            setMessageError('Correo electrónico ya utilizado')
                            setHasError(true)

                            setTimeout(() => {
                                setHasError(false)
                                setMessageError('')
                            }, 2000)
                        } else if (resp.response.status === 400) {
                            console.error(
                                'error 400 - Params de campo de solicitud no válidos.'
                            )
                            const payload = {
                                email: values.email,
                            }

                            const payloadModal = {
                                modal: 'register-step2',
                                data: [],
                            }

                            dispatch(registerStep1(payload))
                            dispatch(closeAllModals())
                            dispatch(openModal(payloadModal))
                        }
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }}
        >
            {({ errors, touched, values, isValid, dirty, handleChange }) => (
                <div className="cardRegister container p-0">
                    <div className="container-register container text-center">
                        <div className="row">
                            <div className="col-md-12 d-row container-phone-spacing">
                                <div className="position-relative">
                                    <div
                                        className="btn-close-register"
                                        onClick={handleCloseModal}
                                    >
                                        <svg
                                            width="28"
                                            height="28"
                                            viewBox="0 0 28 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_5691_4435)">
                                                <path
                                                    d="M26.8995 8.55015C26.1944 6.88302 25.1849 5.38588 23.8995 4.10049C22.6141 2.8151 21.117 1.80559 19.4498 1.10045C17.723 0.370211 15.8896 0 14.0002 0C12.1108 0 10.277 0.370211 8.55049 1.10045C6.88335 1.80559 5.38622 2.8151 4.10083 4.10049C2.81544 5.38588 1.80593 6.88302 1.10079 8.55015C0.370211 10.2767 0 12.1104 0 13.9998C0 15.8892 0.370211 17.723 1.10045 19.4495C1.80559 21.1166 2.8151 22.6138 4.10049 23.8992C5.38588 25.1846 6.88302 26.1941 8.55015 26.8992C10.2767 27.6295 12.1101 27.9997 13.9998 27.9997C15.8896 27.9997 17.723 27.6295 19.4495 26.8992C21.1166 26.1941 22.6138 25.1846 23.8992 23.8992C25.1846 22.6138 26.1941 21.1166 26.8992 19.4495C27.6295 17.723 27.9997 15.8896 27.9997 13.9998C27.9997 12.1101 27.6295 10.2767 26.8992 8.55015H26.8995ZM14.0002 26.303C7.21624 26.303 1.69666 20.7838 1.69666 13.9995C1.69666 7.21522 7.2159 1.69666 14.0002 1.69666C20.7844 1.69666 26.3033 7.2159 26.3033 13.9998C26.3033 20.7838 20.7841 26.3033 14.0002 26.3033V26.303Z"
                                                    fill="#ADA8A8"
                                                />
                                                <path
                                                    d="M19.7114 8.28843C19.3802 7.95724 18.843 7.95724 18.5115 8.28843L13.9997 12.8002L9.48795 8.28843C9.15676 7.95724 8.6196 7.95724 8.28807 8.28843C7.95654 8.61962 7.95688 9.15678 8.28807 9.48831L12.7998 14.0001L8.28807 18.5118C7.95688 18.843 7.95688 19.3802 8.28807 19.7117C8.45366 19.8773 8.67084 19.9601 8.88801 19.9601C9.10518 19.9601 9.32235 19.8773 9.48795 19.7117L13.9997 15.2L18.5115 19.7117C18.6771 19.8773 18.8942 19.9601 19.1114 19.9601C19.3286 19.9601 19.5458 19.8773 19.7114 19.7117C20.0425 19.3805 20.0425 18.8434 19.7114 18.5118L15.1996 14.0001L19.7114 9.48831C20.0425 9.15712 20.0425 8.61996 19.7114 8.28843Z"
                                                    fill="#ADA8A8"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_5691_4435">
                                                    <rect
                                                        width="28"
                                                        height="28"
                                                        fill="white"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div className="log-disabled-web">
                                    <svg
                                        width="163"
                                        height="44"
                                        viewBox="0 0 163 44"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_244_56)">
                                            <path
                                                d="M15.7188 30.831L14.9111 30.1355C13.8746 29.2471 13.7578 27.6835 14.6469 26.6529L14.9923 26.2518C15.0431 26.1909 20.1998 20.1902 24.3657 14.6769C28.2725 9.50879 28.0846 7.83347 27.4851 6.95012C26.5503 5.5794 23.5173 5.72155 18.4724 7.37149C12.3759 9.36664 4.63846 12.6411 4.55717 12.6716L4.06945 12.8797C2.80951 13.4128 1.36159 12.8239 0.828145 11.5699L0.411551 10.5901C-0.121892 9.3311 0.467436 7.88423 1.7223 7.35118L2.21002 7.14303C2.53516 7.00596 10.2625 3.74163 16.5977 1.66524C22.1354 -0.147148 28.9432 -1.57371 32.4486 3.56902C36.1675 9.0265 31.4326 15.2861 29.1616 18.2966C24.8788 23.9622 19.7628 29.9172 19.5495 30.166L19.204 30.5671C18.3149 31.6027 16.7502 31.7195 15.7188 30.831V30.831Z"
                                                fill="#F9A823"
                                            />
                                            <path
                                                d="M8.83985 44.0001C5.88812 44.0001 3.19042 43.0965 1.37672 40.4363C-2.34215 34.9788 2.3928 28.7192 4.66374 25.7087C8.94653 20.043 14.0625 14.088 14.2759 13.8393L14.6214 13.4382C15.5104 12.4026 17.0752 12.2858 18.1065 13.1742L18.9143 13.8697C19.9507 14.7582 20.0676 16.3218 19.1785 17.3524L18.833 17.7534C18.7822 17.8144 13.6256 23.815 9.45966 29.3284C5.55282 34.4965 5.74079 36.1718 6.34028 37.0552C7.27508 38.4259 10.3081 38.2837 15.3529 36.6338C21.4494 34.6386 29.1869 31.3641 29.2682 31.3337L29.7559 31.1255C31.0159 30.5925 32.4638 31.1814 32.9972 32.4353L33.4138 33.4151C33.9473 34.6742 33.3579 36.121 32.1031 36.6541L31.6153 36.8622C31.2902 36.9993 23.5629 40.2636 17.2276 42.34C14.5553 43.2132 11.5883 44.0001 8.83985 44.0001V44.0001Z"
                                                fill="#F9A823"
                                            />
                                            <path
                                                d="M140.25 16.6668V37.6946C140.25 38.9079 139.27 39.8877 138.055 39.8877H136.064C134.85 39.8877 133.869 38.9079 133.869 37.6946V16.6668C133.869 15.4534 134.85 14.4736 136.064 14.4736H138.055C139.27 14.4736 140.25 15.4534 140.25 16.6668Z"
                                                fill="#333333"
                                            />
                                            <path
                                                d="M161.694 18.9412H157.081V37.5068C157.081 38.8217 156.014 39.8878 154.699 39.8878H153.063C151.747 39.8878 150.68 38.8217 150.68 37.5068V18.9412H146.016C145.295 18.9412 144.71 18.3574 144.71 17.6365V14.9915C144.71 14.2706 145.295 13.6868 146.016 13.6868H150.68V6.04125C150.68 4.65023 151.808 3.52319 153.2 3.52319H154.566C155.958 3.52319 157.086 4.65023 157.086 6.04125V13.6817H161.699C162.421 13.6817 163.005 14.2655 163.005 14.9864V17.6314C163.005 18.3523 162.421 18.9361 161.699 18.9361L161.694 18.9412Z"
                                                fill="#333333"
                                            />
                                            <path
                                                d="M53.6493 13.7226C50.1185 13.7226 47.8729 14.4791 44.1236 17.7891C43.2853 18.5252 42.0457 19.8655 42.0457 19.8655C41.9695 19.9416 41.8729 19.9772 41.7713 19.9772C41.6596 19.9772 41.5529 19.9315 41.4767 19.8401C41.3446 19.6827 41.3751 19.439 41.5224 19.2969L43.9813 16.86C44.784 16.0681 45.2311 14.9867 45.2311 13.8597V5.95016C45.2311 4.60991 44.1439 3.52856 42.8077 3.52856H41.2735C39.9322 3.52856 38.8501 4.61498 38.8501 5.95016V37.4716C38.8501 38.8118 39.9373 39.8932 41.2735 39.8932H42.7569C44.0982 39.8932 45.1803 38.8067 45.1803 37.4716V23.9065C45.1803 22.3074 45.7645 22.0129 46.933 21.1397C52.745 16.9362 56.0575 20.2868 56.0575 23.3836V37.4716C56.0575 38.8118 57.1447 39.8932 58.4808 39.8932H60.0151C61.3563 39.8932 62.4385 38.8067 62.4385 37.4716V24.4751C62.4385 16.3625 57.7594 13.7277 53.6443 13.7277L53.6493 13.7226Z"
                                                fill="#333333"
                                            />
                                            <path
                                                d="M78.9703 13.6868C71.9899 13.6868 66.3252 19.2306 66.3252 27.0843C66.3252 34.938 71.9848 40.4817 78.9703 40.4817C85.9559 40.4817 91.6155 34.938 91.6155 27.0843C91.6155 19.2306 85.9559 13.6868 78.9703 13.6868V13.6868ZM78.9703 34.938C75.5106 34.938 72.7113 32.029 72.7113 27.0843C72.7113 22.1395 75.5157 19.2306 78.9703 19.2306C82.425 19.2306 85.2294 22.0024 85.2294 27.0843C85.2294 32.1661 82.425 34.938 78.9703 34.938Z"
                                                fill="#333333"
                                            />
                                            <path
                                                d="M125.07 14.4788C124.257 14.4788 123.546 15.022 123.338 15.8089C122.377 19.4083 120.609 26.074 119.751 29.3231C119.522 30.1912 118.841 32.8007 118.841 32.8007C118.841 32.8007 116.748 27.993 115.702 25.211C115.382 24.3581 114.228 22.9315 111.693 22.9315C109.158 22.9315 108.005 24.3581 107.685 25.211C106.608 28.0641 104.545 32.8007 104.545 32.8007C104.545 32.8007 103.864 30.1912 103.636 29.3231C102.782 26.0689 101.009 19.4083 100.049 15.8089C99.8406 15.027 99.1294 14.4788 98.3165 14.4788H95.3546C94.1759 14.4788 93.3174 15.6007 93.6273 16.7379C94.8059 21.0734 97.0565 29.3688 97.7526 32.0341C98.4638 34.7552 99.4545 39.8167 104.809 39.8167C108.127 39.8167 109.29 36.3239 111.688 29.8714C114.086 36.3239 115.25 39.8167 118.567 39.8167C123.922 39.8167 124.912 34.7552 125.624 32.0341C126.32 29.3688 128.57 21.0734 129.749 16.7379C130.059 15.6007 129.2 14.4788 128.022 14.4788H125.06H125.07Z"
                                                fill="#333333"
                                            />
                                            <path
                                                d="M137.06 10.2856C138.822 10.2856 140.25 8.85815 140.25 7.09736C140.25 5.33658 138.822 3.90918 137.06 3.90918C135.298 3.90918 133.869 5.33658 133.869 7.09736C133.869 8.85815 135.298 10.2856 137.06 10.2856Z"
                                                fill="#333333"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_244_56">
                                                <rect
                                                    width="163"
                                                    height="44"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>

                                <div className="title-register d-md-block mt-5 pt-3 mb-3">
                                    Regístrate
                                </div>

                                <div className="container mt-1">
                                    <Form className="p-4">
                                        <Field name="email">
                                            {({ field, meta }: any) => (
                                                <InputEmail
                                                    field={field}
                                                    meta={meta}
                                                    placeholder="Ingresa tu correo"
                                                    iconLeft="email"
                                                    messageError={messageError}
                                                    setMessageError={
                                                        setMessageError
                                                    }
                                                    setHasError={setHasError}
                                                    verifyBack={true}
                                                    iconRight={''}
                                                    colorIcon={undefined}
                                                    deshability={''}
                                                    customPlaceholder={true}
                                                />
                                            )}
                                        </Field>

                                        <button
                                            type="submit"
                                            style={{ outline: 'success' }}
                                            className={`btn btn-lg w-100 mt-4 mb-3 text-white ${
                                                isValid && dirty && !hasError
                                                    ? 'btn-primary'
                                                    : 'btn-dark'
                                            }`}
                                            disabled={
                                                !isValid || !dirty || hasError
                                            }
                                        >
                                            Continuar
                                        </button>
                                    </Form>

                                    <div className="w-100 px-5 mb-2">
                                        <div className="d-flex justify-content-center">
                                            <span className="d-flex w-100">
                                                <hr className="line-center mx-3" />
                                                o
                                                <span className="d-md-block d-none w-75 mx-1">
                                                    continúa con
                                                </span>
                                                <hr className="line-center mx-3" />
                                            </span>
                                        </div>
                                    </div>

                                    <div className="container">
                                        <div className="mt-2 container-btns px-1">
                                            <a className="lead">
                                                <div className="btn-google d-flex justify-content-center">
                                                    <a
                                                        className="a-btn "
                                                        style={{
                                                            opacity: '0',
                                                        }}
                                                    >
                                                        <GoogleOAuthProvider
                                                            clientId={clientId}
                                                        >
                                                            <GoogleLogin
                                                                type="icon"
                                                                onSuccess={(
                                                                    credentialResponse
                                                                ) => {
                                                                    console.log(
                                                                        credentialResponse
                                                                    )
                                                                }}
                                                                onError={() => {
                                                                    console.log(
                                                                        'Login Failed'
                                                                    )
                                                                }}
                                                            />
                                                        </GoogleOAuthProvider>
                                                    </a>
                                                    <img
                                                        src="/Images/google.svg"
                                                        className="img-btn mx-2"
                                                        style={{
                                                            marginTop: '.8rem',
                                                            width: '25.5px',
                                                            height: '25.5px',
                                                        }}
                                                        alt=""
                                                    />
                                                    <span
                                                        className=" session-text"
                                                        style={{
                                                            fontSize: '0.8em',
                                                            marginTop: '12px',
                                                        }}
                                                    >
                                                        Continuar con google
                                                    </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="mt-5">
                                        <p className="text-terminos">
                                            Al crear una cuenta estas aceptando
                                            los <br />{' '}
                                            <a
                                                className="text-primary"
                                                href="#"
                                            >
                                                Términos y Condiciones
                                            </a>
                                            <b> De Zhowit.</b>
                                        </p>
                                    </div>

                                    <div className="col-md-12 row reg-session-phone">
                                        <div className="w-100 d-flex justify-content-center mx-2 my-4">
                                            <div className="pt-2 mt-1 px-3">
                                                <span className="text-fluid lead count-text">
                                                    ¿Ya tienes una cuenta?
                                                </span>
                                            </div>

                                            <button
                                                onClick={openLoginModal}
                                                className="btn mx-1 my-2 btn-text-log"
                                            >
                                                <span className="text-ini ">
                                                    Iniciar Sesión
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Formik>
    )
}

export default CardRegister
