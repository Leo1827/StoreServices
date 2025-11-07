import { useAppDispatch } from '../hooks/reduxHook'
import { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
/* import { useNavigate } from "react-router-dom"; */
import IconList from './IconList'
import { closeAllModals, openModal } from '../store/slices/modal/modalSlice'
import { sendPasswordRecovery } from '../services/SendPasswordRecovery'
import InputEmail from './Inputs/InputEmail'

const CardSessionRecovery = (): JSX.Element => {
    const [messageError, setMessageError] = useState<string>('')
    const [, setHasError] = useState(false)
    const dispatch = useAppDispatch()
    /* const navigate = useNavigate() */
    const RegisterSchema = Yup.object().shape({
        email: Yup.string(),
    })

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
        <div className="cardSessionRecovery">
            <Formik
                initialValues={{
                    email: '',
                }}
                validationSchema={RegisterSchema}
                onSubmit={async (values) => {
                    console.log(typeof values)

                    sendPasswordRecovery(values.email)
                        .then((resp) => {
                            // console.log(resp);

                            if (resp.status === 200) {
                                console.log(values.email)

                                console.log(resp)

                                const payload = {
                                    modal: 'verify-email-password',
                                    data: [values.email],
                                }

                                dispatch(closeAllModals())
                                dispatch(openModal(payload))
                            } else if (resp.response.status === 400) {
                                console.error('Error 400')
                                setMessageError('Correo no registrado')
                                setHasError(true)
                            } else {
                                console.log('Error 500')
                            }
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                }}
            >
                {({ errors, touched, values, isValid, dirty }) => (
                    <div className="px-1">
                        <div className="position-relative">
                            <div
                                className="btn-close-session"
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
                        <div className="mt-5 title-phone">
                            <span
                                className="title-phone-row"
                                style={{
                                    fontFamily: 'Spline Sans',
                                    fontWeight: '700',
                                    fontSize: '32px',
                                    lineHeight: '38px',
                                    fontStyle: 'normal',
                                }}
                            >
                                Recupera tus datos
                            </span>

                            <span
                                className="d-flex my-3 "
                                style={{
                                    fontSize: '18.8738px',
                                    color: '#727171',
                                    lineHeight: '1.1',
                                    fontWeight: '400',
                                }}
                            >
                                Una vez introducida tu dirección, enviaremos un
                                enlace a tu correo para reestablecer tus datos.
                            </span>
                        </div>

                        <div className=" mt-1">
                            <Form className="p-2">
                                <Field name="email">
                                    {({ field, meta }: any) => (
                                        <InputEmail
                                            field={field}
                                            meta={meta}
                                            placeholder="Ingresa tu email"
                                            iconLeft="email"
                                            messageError={messageError}
                                            setMessageError={setMessageError}
                                            setHasError={setHasError}
                                            verifyBack={true}
                                            className=""
                                            iconRight={''}
                                            colorIcon={undefined}
                                            deshability={''}
                                            customPlaceholder={false}
                                        />
                                    )}
                                </Field>

                                <button
                                    type="submit"
                                    style={{ marginTop: '30px' }}
                                    className={`btn btn-lg w-100 ${
                                        isValid && dirty
                                            ? 'btn-primary'
                                            : 'btn-dark '
                                    }`}
                                    disabled={!isValid || !dirty}
                                >
                                    Enviar
                                </button>
                            </Form>

                            <div className="d-flex justify-content-center my-5 btn-phone-white">
                                <button
                                    onClick={openLoginModal}
                                    className="form-control border-0 shadow-sm rounded-sm w-75 btn-phone-ini"
                                >
                                    <IconList
                                        icon="arrow-left"
                                        color="#000"
                                        size="lg"
                                    />
                                    <span
                                        className="mx-2"
                                        style={{ fontSize: '0.9em' }}
                                    >
                                        Volver a iniciar Sesión
                                    </span>
                                </button>
                            </div>

                            <div className="row pb-5 svg-phone">
                                <div className="container pt-2 pb-4">
                                    <svg
                                        width="45.4"
                                        height="45.4"
                                        viewBox="0 0 41 53"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M18.6723 36.6457L17.7122 35.8208C16.4818 34.7637 16.3431 32.9094 17.4003 31.679L17.8127 31.2007C17.8751 31.1279 23.9995 23.9949 28.9489 17.4407C33.5899 11.2955 33.3646 9.30602 32.6506 8.25583C31.5415 6.62681 27.9403 6.79665 21.9476 8.7584C14.7037 11.1326 5.51193 15.0214 5.42182 15.0596L4.83953 15.3056C3.34569 15.9399 1.6231 15.2398 0.98882 13.746L0.49665 12.5814C-0.137626 11.0875 0.562504 9.36494 2.05634 8.73067L2.63863 8.48458C3.02682 8.32168 12.2013 4.43978 19.7259 1.97199C26.3044 -0.183849 34.394 -1.87525 38.5532 4.23528C42.9688 10.7236 37.347 18.1651 34.647 21.742C29.5589 28.4799 23.4831 35.5539 23.2266 35.852L22.8141 36.3303C21.757 37.5607 19.9027 37.6994 18.6723 36.6423V36.6457Z"
                                            fill="#F9A823"
                                        />
                                        <path
                                            d="M10.4995 52.3052C6.99539 52.3052 3.78935 51.2342 1.63698 48.0698C-2.77869 41.5815 2.84314 34.14 5.54314 30.5631C10.6312 23.8252 16.7071 16.7511 16.9636 16.4531L17.376 15.9747C18.4331 14.7443 20.2874 14.6057 21.5179 15.6628L22.478 16.4877C23.7084 17.5448 23.847 19.3991 22.7899 20.6296L22.3774 21.1079C22.3151 21.1807 16.1907 28.3137 11.2412 34.8678C6.60027 41.013 6.82556 43.0025 7.53955 44.0527C8.64867 45.6817 12.2498 45.5154 18.2425 43.5501C25.4864 41.1759 34.6782 37.2871 34.7683 37.249L35.3506 37.0029C36.8445 36.3686 38.5671 37.0687 39.2013 38.5626L39.6935 39.7272C40.3278 41.221 39.6277 42.9436 38.1338 43.5779L37.5515 43.8239C37.1633 43.9869 27.9889 47.8688 20.4642 50.3365C17.2894 51.3763 13.7645 52.3087 10.4995 52.3087V52.3052Z"
                                            fill="#F9A823"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Formik>
        </div>
    )
}

export default CardSessionRecovery
