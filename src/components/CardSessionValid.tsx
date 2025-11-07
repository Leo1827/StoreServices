import { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { credentialsSessionValid } from '../services/ServicesSessionCredentials'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook'
import { setUserStatus } from '../store/slices/auth/authSlice'
import { closeAllModals, openModal } from '../store/slices/modal/modalSlice'
import { useNavigate } from 'react-router-dom'
import InputEmail from './Inputs/InputEmail'
import InputPassword from './Inputs/InputPassword'

const RegisterSchema = Yup.object().shape({
    email: Yup.string()
        .email('Correo no válido')
        .required('El email debe ser requerido'),
    password: Yup.string()
        .min(8, 'Debe contener mínimo 8 caracteres')
        .matches(/(?=.*[a-z])/, 'Debe contener al menos una minúscula')
        .matches(/(?=.*[A-Z])/, 'Debe contener al menos una mayúscula')

        .required('La contraseña es obligatoria'),
})

const CardSessionValid = (): JSX.Element => {
    const [messageError, setMessageError] = useState<string>('')
    const [hasError, setHasError] = useState(false)
    const { email } = useAppSelector((state) => state.auth)
    const dispatch = useAppDispatch()

    const openRegisterModal = (): void => {
        const payload = {
            modal: 'register-step1',
            data: [],
        }

        dispatch(closeAllModals())
        dispatch(openModal(payload))
    }

    const openRecoveryPasswordModal = (): void => {
        const payload = {
            modal: 'sessionRecoveryDataEmail',
            data: [],
        }

        dispatch(closeAllModals())
        dispatch(openModal(payload))
    }

    const navigate = useNavigate()

    const handleCloseModal = (): void => {
        dispatch(closeAllModals())
    }

    return (
        <>
            <Formik
                initialValues={{
                    email,
                    password: '',
                }}
                validationSchema={RegisterSchema}
                onSubmit={async (values) => {
                    credentialsSessionValid(values.email, values.password)
                        .then((resp: any) => {
                            if (resp.status === 200) {
                                const data = resp.data.data
                                localStorage.setItem(
                                    'token',
                                    resp.headers.authorization
                                )
                                localStorage.setItem(
                                    'xToken',
                                    resp.headers['x-token']
                                )
                                const userStatus = data.userStatus
                                dispatch(setUserStatus(userStatus))

                                const payloadUserData = {
                                    email: data.email,
                                    imageProfile: data.profilePicturePath,
                                    emailVerified: data.emailVerified,
                                    firstLastName: data.firstLastName,
                                }

                                localStorage.setItem(
                                    'userData',
                                    JSON.stringify(payloadUserData)
                                )

                                dispatch(closeAllModals())
                                navigate('/register-data', {
                                    state: payloadUserData,
                                })
                            } else {
                                console.log(resp.response.data)
                                setHasError(true)
                                setMessageError('Error al iniciar sesión')

                                setTimeout(() => {
                                    setHasError(false)
                                    setMessageError('')
                                }, 2000)
                            }
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                }}
            >
                {({ errors, touched, values, isValid, dirty }) => (
                    <div className="cardSessionValid">
                        <div className="container-phone-valid container text-center ">
                            <div className="col-md-12 my-4 mt-5">
                                <div className="container my-3">
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
                                    <div className="log-valid-phone mb-4">
                                        <svg
                                            width="49"
                                            height="65"
                                            viewBox="0 0 49 65"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M22.7653 45.1787L21.5948 44.173C20.0947 42.8841 19.9256 40.6234 21.2145 39.1232L21.7174 38.5401C21.7934 38.4513 29.2603 29.7548 35.2947 21.7639C40.9529 14.2716 40.6783 11.8461 39.8078 10.5657C38.4555 8.57956 34.065 8.78662 26.7587 11.1784C17.9269 14.073 6.7202 18.8143 6.61033 18.8608L5.90041 19.1608C4.07911 19.9341 1.97892 19.0805 1.20561 17.2592L0.605551 15.8394C-0.16776 14.0181 0.68584 11.9179 2.50713 11.1446L3.21706 10.8446C3.69034 10.6459 14.8759 5.91311 24.05 2.90439C32.0704 0.275973 41.9333 -1.78619 47.0042 5.66379C52.3878 13.5744 45.5336 22.6471 42.2418 27.008C36.0384 35.2229 28.6307 43.8476 28.318 44.211L27.8151 44.7942C26.5263 46.2943 24.2655 46.4633 22.7653 45.1745V45.1787Z"
                                                fill="#F9A823"
                                            />
                                            <path
                                                d="M12.801 64.2706C8.52881 64.2706 4.61999 62.9648 1.99581 59.1067C-3.38779 51.1961 3.46637 42.1234 6.75822 37.7625C12.9616 29.5476 20.3693 20.9229 20.682 20.5595L21.1849 19.9763C22.4738 18.4762 24.7345 18.3072 26.2347 19.596L27.4052 20.6017C28.9053 21.8906 29.0744 24.1514 27.7855 25.6515L27.2826 26.2346C27.2066 26.3234 19.7397 35.02 13.7053 43.0108C8.04707 50.5031 8.32174 52.9287 9.19225 54.2091C10.5445 56.1952 14.935 55.9923 22.2413 53.5963C31.0731 50.7017 42.2798 45.9604 42.3897 45.9139L43.0996 45.6139C44.9209 44.8406 47.0211 45.6942 47.7944 47.5155L48.3945 48.9353C49.1678 50.7566 48.3142 52.8568 46.4929 53.6301L45.7829 53.9302C45.3097 54.1288 34.1241 58.8616 24.95 61.8703C21.0793 63.1381 16.7817 64.2748 12.801 64.2748V64.2706Z"
                                                fill="#F9A823"
                                            />
                                        </svg>
                                    </div>
                                    <span className="title-valid">
                                        Tu datos no han sido registrados
                                    </span>

                                    <div
                                        className="container w-75 mt-5 title-valid-phone"
                                        style={{
                                            borderBottom: '0.1em solid #736E6E',
                                        }}
                                    >
                                        <span
                                            className="d-flex justify-content-center my-2"
                                            style={{
                                                color: '#736E6E',
                                                fontSize: '1.1em',
                                            }}
                                        >
                                            Inicia sesión para registrarlos
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-1 w-100">
                                <div className="px-4">
                                    <Form className="p-1">
                                        <Field name="email">
                                            {({ field, meta }: any) => (
                                                <InputEmail
                                                    field={field}
                                                    meta={meta}
                                                    placeholder=""
                                                    iconLeft=""
                                                    className={
                                                        errors.email !==
                                                            undefined &&
                                                        touched.email !==
                                                            undefined
                                                            ? 'alert-input-danger'
                                                            : 'border-email email-color-blue border-email-gray'
                                                    }
                                                    messageError={''}
                                                    setMessageError={undefined}
                                                    setHasError={undefined}
                                                    verifyBack={false}
                                                    iconRight={
                                                        errors.email !==
                                                            undefined &&
                                                        touched.email !==
                                                            undefined
                                                            ? 'x'
                                                            : errors.email !==
                                                                  null &&
                                                              touched.email !==
                                                                  null
                                                            ? 'check'
                                                            : ''
                                                    }
                                                    colorIcon={
                                                        errors.email != null &&
                                                        touched.email != null
                                                            ? 'red'
                                                            : '#5726F9'
                                                    }
                                                    deshability={'disabled'}
                                                    customPlaceholder={false}
                                                />
                                            )}
                                        </Field>

                                        <Field name="password">
                                            {({ field }: any) => (
                                                <InputPassword
                                                    field={field}
                                                    iconLeft={
                                                        values.password.length >
                                                        0
                                                            ? ''
                                                            : 'email'
                                                    }
                                                    iconRight={''}
                                                    classCustom={
                                                        messageError ===
                                                        'Error al iniciar sesión'
                                                            ? 'alert-input-danger border-session-valid mt-3'
                                                            : errors.password !==
                                                                  null &&
                                                              touched.password !==
                                                                  null
                                                            ? 'border-0 border-password-valid mt-3'
                                                            : values.password
                                                                  ?.length > 0
                                                            ? 'border-0 border-password-valid mt-3'
                                                            : 'border-email mt-3'
                                                    }
                                                    withValidations={false}
                                                    placeholderText={
                                                        'Contraseña'
                                                    }
                                                />
                                            )}
                                        </Field>

                                        {errors.password != null &&
                                        touched.password != null ? (
                                            <></>
                                        ) : (
                                            <>
                                                <div
                                                    className="text-start position-absolute mx-3 mt-1"
                                                    style={{
                                                        color: 'rgb(115, 110, 110)',
                                                        fontSize: '.8em',
                                                        marginBottom: '10rem',
                                                    }}
                                                >
                                                    {messageError != null &&
                                                        messageError}
                                                </div>
                                            </>
                                        )}

                                        <div className="d-flex justify-content-end">
                                            <a
                                                onClick={
                                                    openRecoveryPasswordModal
                                                }
                                                className="mx-3 btn p-0 border-0 mt-2"
                                                style={{
                                                    textDecoration: 'underline',
                                                    fontWeight: '300',
                                                    fontSize: '11px',
                                                    lineHeight: '14px',
                                                    color: '#5726F9',
                                                }}
                                            >
                                                Olvidé mi contraseña
                                            </a>
                                        </div>

                                        <button
                                            type="submit"
                                            style={{ outline: 'success' }}
                                            className={`btn btn-lg w-100 mt-3 text-white btn-phone-valid ${
                                                isValid && dirty && !hasError
                                                    ? 'btn-primary'
                                                    : 'btn-dark '
                                            }`}
                                            disabled={!isValid || !dirty}
                                        >
                                            Continuar
                                        </button>
                                    </Form>
                                </div>

                                <div className="col-md-12 row my-5 reg-session-phone">
                                    <div className="w-100 d-flex justify-content-center mx-2 my-5">
                                        <div className="pt-2 mt-1 px-3">
                                            <a
                                                href="#"
                                                className="text-fluid lead count-text"
                                            >
                                                ¿No tienes una cuenta?
                                            </a>
                                        </div>

                                        <button
                                            onClick={openRegisterModal}
                                            className="btn mx-1 my-2 btn-text-log"
                                        >
                                            <span className="text-ini">
                                                Regístrate
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Formik>
        </>
    )
}

export default CardSessionValid
