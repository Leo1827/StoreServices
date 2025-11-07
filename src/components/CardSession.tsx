import { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { verifySessionEmail } from '../services/ServicesSessionValid'
import { useAppDispatch } from '../hooks/reduxHook'
import { login, registerStep1 } from '../store/slices/auth/authSlice'
import { closeAllModals, openModal } from '../store/slices/modal/modalSlice'
import InputEmail from './Inputs/InputEmail'

const CardSession = (): JSX.Element => {
    const [messageError, setMessageError] = useState<string>('')
    const [hasError, setHasError] = useState(false)
    const dispatch = useAppDispatch()

    useEffect(() => {
        setHasError(false) // Aquí establecemos inicialmente hasError en false
    }, [])

    const RegisterSchema = Yup.object().shape({})

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

    const handleCloseModal = (): void => {
        dispatch(closeAllModals())
    }

    return (
        <>
            <Formik
                initialValues={{ email: '' }}
                validationSchema={RegisterSchema}
                onSubmit={async (values) => {
                    console.log(values.email)

                    verifySessionEmail(values.email)
                        .then((resp) => {
                            if (resp.status === 200) {
                                const data = resp.data.data
                                const payloadUserData = {
                                    email: data.email,
                                    imageProfile: data.profilePicturePath,
                                    firstLastName: data.firstLastName,
                                }

                                dispatch(login(payloadUserData))

                                if (resp.data.data.userStatus === 'Active') {
                                    const payloadSessionPassword = {
                                        email: data.email,
                                        imageProfile: data.profilePicturePath,
                                        firstLastName: data.firstLastName,
                                        givenName: data.givenName,
                                        phoneNumber: data.phoneNumber,
                                        secondLastName: data.secondLastName,
                                        userStatus: null,
                                    }

                                    const payloadModal = {
                                        modal: 'session-step2',
                                        data: [
                                            data.givenName,
                                            data.firstLastName,
                                            data.email,
                                            data.profilePicturePath,
                                        ],
                                    }

                                    dispatch(login(payloadSessionPassword))
                                    dispatch(closeAllModals())
                                    dispatch(openModal(payloadModal))
                                } else {
                                    if (
                                        resp.data.data.userStatus === 'Inactive'
                                    ) {
                                        const payload = {
                                            email: values.email,
                                        }

                                        const payloadModal = {
                                            modal: 'verify-email',
                                            data: [],
                                        }
                                        dispatch(registerStep1(payload))
                                        dispatch(closeAllModals())
                                        dispatch(openModal(payloadModal))
                                    } else {
                                        if (
                                            resp.data.data.userStatus ===
                                            'Pending'
                                        ) {
                                            const payload = {
                                                email: values.email,
                                            }

                                            const payloadModal = {
                                                modal: 'session-step1',
                                                data: [],
                                            }

                                            dispatch(registerStep1(payload))
                                            dispatch(closeAllModals())
                                            dispatch(openModal(payloadModal))
                                        }
                                    }
                                }
                            } else if (resp.response.status === 400) {
                                console.error(
                                    'Error 400 - correo no registrado'
                                )

                                setMessageError('Correo no registrado ')
                                setHasError(true)

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
                    <div className="cardSession p-0">
                        <div className="container-phone container text-center">
                            <div className="row">
                                <div className="col-md-12 center-position-card">
                                    <div className="col-md-12 pt-5 mt-3 padding-phone">
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
                                        <div className="d-flex justify-content-center log-phone mx-5">
                                            <svg
                                                width="210"
                                                height="47"
                                                viewBox="0 0 278 64"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M19.1538 51.5565C16.0662 51.5565 13.2577 50.789 10.7282 49.2539C8.19881 47.7188 6.184 45.4859 4.68379 42.5553C3.18358 39.6072 2.43348 36.0137 2.43348 31.7747C2.43348 27.5881 3.14869 24.0382 4.57912 21.125C6.00955 18.2118 7.98076 16.0051 10.4927 14.5049C13.0222 12.9872 15.9179 12.2284 19.18 12.2284C22.3548 12.2284 25.207 12.9872 27.7364 14.5049C30.2658 16.0051 32.2632 18.2118 33.7285 21.125C35.1938 24.0382 35.9265 27.5881 35.9265 31.7747C35.9265 36.0137 35.1938 39.6072 33.7285 42.5553C32.2806 45.4859 30.292 47.7188 27.7626 49.2539C25.2331 50.789 22.3636 51.5565 19.1538 51.5565ZM26.2188 59.3018L21.5873 49.6725H26.8729C27.2218 49.6725 27.623 49.8034 28.0766 50.065C28.5301 50.3267 28.9226 50.7541 29.2541 51.3472L33.8332 59.3018H26.2188ZM19.1538 45.8261C21.1076 45.8261 22.8694 45.3289 24.4394 44.3346C26.0094 43.3228 27.2567 41.7877 28.1812 39.7293C29.1232 37.6534 29.5942 35.0194 29.5942 31.8271C29.5942 28.722 29.1319 26.1402 28.2074 24.0818C27.2829 22.0234 26.0356 20.4883 24.4656 19.4765C22.8956 18.4647 21.1337 17.9589 19.18 17.9589C17.3309 17.9589 15.6126 18.4647 14.0252 19.4765C12.4378 20.4883 11.1643 22.0234 10.2049 24.0818C9.24547 26.1402 8.76575 28.722 8.76575 31.8271C8.76575 34.2169 9.04486 36.2928 9.60308 38.0547C10.1613 39.7991 10.9201 41.2557 11.8796 42.4245C12.8564 43.5758 13.9641 44.4305 15.2027 44.9888C16.4412 45.547 17.7583 45.8261 19.1538 45.8261ZM50.5744 51.6089C48.0973 51.6089 46.1086 50.7454 44.6084 49.0184C43.1082 47.2914 42.3581 44.8143 42.3581 41.5871V22.4595H48.5334V39.9386C48.5334 41.3342 48.6904 42.4855 49.0044 43.3926C49.3184 44.2997 49.8155 44.9626 50.4959 45.3813C51.1762 45.7999 52.0571 46.0093 53.1387 46.0093C54.447 46.0093 55.6245 45.6342 56.6711 44.8841C57.7352 44.1165 58.4853 43.2531 58.9215 42.2936V22.4595H65.0967V51.0332H59.8373L59.1308 40.2526L59.6018 42.4245C59.3925 43.9944 58.9738 45.4772 58.3458 46.8727C57.7352 48.2683 56.802 49.4109 55.546 50.3005C54.3074 51.1728 52.6502 51.6089 50.5744 51.6089ZM84.6447 51.4257C81.8885 51.4257 79.4986 50.8675 77.4751 49.751C75.469 48.6172 73.9252 46.9512 72.8436 44.7533C71.7621 42.5553 71.2213 39.8601 71.2213 36.6678C71.2213 33.5628 71.7882 30.9112 72.9221 28.7132C74.0734 26.4978 75.6521 24.8145 77.6582 23.6631C79.6643 22.4944 81.967 21.91 84.5662 21.91C87.1305 21.91 89.3197 22.4159 91.1339 23.4276C92.9656 24.4394 94.3611 25.9396 95.3206 27.9283C96.28 29.8995 96.7597 32.3242 96.7597 35.2025C96.7597 35.7607 96.7423 36.223 96.7074 36.5893C96.6899 36.9557 96.6638 37.3918 96.6289 37.8977H77.3704C77.5274 40.8109 78.2426 42.9565 79.5161 44.3346C80.7895 45.6953 82.3508 46.3756 84.1998 46.3756C85.9268 46.3756 87.2439 46.0093 88.151 45.2766C89.0755 44.5265 89.6686 43.6892 89.9303 42.7646H95.8962C95.7392 44.5963 95.1636 46.1662 94.1693 47.4746C93.1749 48.7654 91.8579 49.751 90.2181 50.4314C88.5958 51.0943 86.738 51.4257 84.6447 51.4257ZM80.1964 33.6849H90.6106C90.5583 31.5916 90.0524 29.978 89.093 28.8441C88.1335 27.6928 86.5548 27.1171 84.3568 27.1171C82.0716 27.1171 80.3708 27.8846 79.2544 29.4197C78.138 30.9374 77.51 33.0394 77.3704 35.7258C77.51 34.9409 77.8065 34.4088 78.2601 34.1297C78.7136 33.8331 79.3591 33.6849 80.1964 33.6849ZM81.5832 17.6187L86.738 10.3444H93.3581L87.2352 17.6187H81.5832ZM159.696 51.0332V10.2398H166.787V22.4856L166.342 30.6234L166.604 32.926L166.29 31.0682C166.499 29.4982 166.918 28.0155 167.546 26.6199C168.174 25.2069 169.107 24.0643 170.346 23.1921C171.584 22.3199 173.224 21.8838 175.265 21.8838C177.917 21.8838 180.001 22.7299 181.519 24.422C183.054 26.0966 183.822 28.6609 183.822 32.1149V51.0332H176.573V34.7315C176.573 32.3242 176.242 30.606 175.579 29.5767C174.934 28.5475 173.809 28.0329 172.204 28.0329C171.07 28.0329 170.032 28.4167 169.09 29.1842C168.165 29.9343 167.441 30.8327 166.918 31.8794V51.0332H159.696ZM202.749 51.4257C200.045 51.4257 197.69 50.8588 195.684 49.7249C193.678 48.591 192.126 46.9251 191.027 44.7271C189.928 42.5117 189.378 39.7991 189.378 36.5893C189.378 33.554 189.954 30.9374 191.105 28.7394C192.274 26.5414 193.879 24.8581 195.92 23.6893C197.961 22.5031 200.272 21.91 202.854 21.91C205.645 21.91 208.035 22.5031 210.024 23.6893C212.03 24.8581 213.565 26.5414 214.629 28.7394C215.693 30.9374 216.225 33.554 216.225 36.5893C216.225 39.7991 215.632 42.5117 214.446 44.7271C213.259 46.9251 211.646 48.591 209.605 49.7249C207.581 50.8588 205.296 51.4257 202.749 51.4257ZM202.854 45.3813C204.633 45.3813 206.099 44.7184 207.25 43.3926C208.419 42.0668 209.003 39.7991 209.003 36.5893C209.003 33.6064 208.419 31.4258 207.25 30.0477C206.081 28.6522 204.581 27.9544 202.749 27.9544C200.97 27.9544 199.505 28.6435 198.353 30.0216C197.202 31.3997 196.626 33.5889 196.626 36.5893C196.626 39.6595 197.219 41.8924 198.406 43.2879C199.592 44.6835 201.075 45.3813 202.854 45.3813ZM227.162 51.0332L218.788 22.4856H226.481L229.517 36.38L231.165 45.1196H231.479L232.84 36.38L235.927 22.4856H244.955L248.016 36.4062L249.377 45.3028L249.691 45.2766L251.366 36.4062L254.401 22.4856H262.094L253.747 51.0332H245.217L242.077 37.8977L240.637 29.6291H240.271L238.78 37.9238L235.666 51.0332H227.162ZM268.2 39.4676L267.284 22.7473L266.918 12.3069H273.512L273.145 22.7473L272.23 39.4676H268.2ZM270.215 51.4257C269.151 51.4257 268.235 51.0506 267.467 50.3005C266.717 49.5504 266.342 48.5823 266.342 47.3961C266.342 46.2273 266.717 45.2679 267.467 44.5178C268.217 43.7677 269.133 43.3926 270.215 43.3926C271.279 43.3926 272.186 43.7677 272.936 44.5178C273.704 45.2679 274.087 46.2273 274.087 47.3961C274.087 48.5997 273.704 49.5766 272.936 50.3267C272.186 51.0594 271.279 51.4257 270.215 51.4257Z"
                                                    fill="#333333"
                                                />
                                                <path
                                                    d="M133.384 40.5142L132.529 39.7796C131.433 38.8383 131.31 37.187 132.251 36.0914L132.618 35.6654C132.674 35.6006 138.127 29.2488 142.535 23.4124C146.667 17.9403 146.467 16.1687 145.831 15.2335C144.843 13.7829 141.637 13.9341 136.3 15.681C129.85 17.7952 121.665 21.2581 121.584 21.2921L121.066 21.5112C119.736 22.076 118.202 21.4526 117.637 20.1223L117.199 19.0853C116.634 17.7551 117.257 16.2211 118.587 15.6563L119.106 15.4372C119.452 15.2921 127.621 11.8354 134.322 9.63786C140.18 7.71812 147.384 6.21196 151.087 11.6533C155.019 17.431 150.013 24.0575 147.609 27.2427C143.078 33.2426 137.668 39.542 137.439 39.8074L137.072 40.2333C136.131 41.329 134.479 41.4524 133.384 40.5111V40.5142Z"
                                                    fill="#333333"
                                                />
                                                <path
                                                    d="M126.112 54.461C122.992 54.461 120.137 53.5073 118.22 50.6894C114.288 44.9117 119.294 38.2852 121.699 35.1C126.23 29.1001 131.64 22.8007 131.868 22.5353L132.236 22.1094C133.177 21.0137 134.828 20.8903 135.924 21.8316L136.779 22.5662C137.875 23.5075 137.998 25.1587 137.057 26.2544L136.689 26.6803C136.634 26.7452 131.18 33.097 126.773 38.9333C122.64 44.4055 122.841 46.1771 123.477 47.1123C124.464 48.5629 127.671 48.4147 133.007 46.6648C139.458 44.5506 147.643 41.0876 147.723 41.0537L148.242 40.8346C149.572 40.2697 151.106 40.8932 151.671 42.2234L152.109 43.2605C152.674 44.5907 152.05 46.1246 150.72 46.6895L150.202 46.9086C149.856 47.0536 141.686 50.5104 134.986 52.7079C132.159 53.6338 129.02 54.4641 126.112 54.4641V54.461Z"
                                                    fill="#333333"
                                                />
                                            </svg>
                                        </div>
                                        <h3
                                            className="d-flex justify-content-start mx-5 px-2 title-session"
                                            style={{
                                                color: '#736E6E',
                                                fontSize: '1.4em',
                                            }}
                                        >
                                            Nos alegra verte de nuevo
                                        </h3>
                                    </div>

                                    <div className="container ">
                                        <Form className="p-4">
                                            <Field name="email">
                                                {({ field, meta }: any) => (
                                                    <InputEmail
                                                        field={field}
                                                        meta={meta}
                                                        placeholder="Ingresa tu correo"
                                                        iconLeft="email"
                                                        messageError={
                                                            messageError
                                                        }
                                                        setMessageError={
                                                            setMessageError
                                                        }
                                                        setHasError={
                                                            setHasError
                                                        }
                                                        verifyBack={true}
                                                        className=""
                                                        iconRight={''}
                                                        colorIcon={undefined}
                                                        deshability={''}
                                                        customPlaceholder={
                                                            false
                                                        }
                                                    />
                                                )}
                                            </Field>

                                            <div className="d-flex justify-content-end">
                                                <a
                                                    onClick={
                                                        openRecoveryPasswordModal
                                                    }
                                                    className="mx-3 btn p-0 border-0 mt-1"
                                                    style={{
                                                        textDecoration:
                                                            'underline',
                                                        fontWeight: '300',
                                                        fontSize: '12px',
                                                        lineHeight: '14px',
                                                        color: '#5726F9',
                                                    }}
                                                >
                                                    Recuperar mi cuenta
                                                </a>
                                            </div>

                                            <button
                                                type="submit"
                                                style={{ outline: 'success' }}
                                                className={`btn btn-lg w-100 mt-4 text-white ${
                                                    isValid &&
                                                    dirty &&
                                                    !hasError
                                                        ? 'btn-primary'
                                                        : 'btn-dark '
                                                }`}
                                                disabled={!isValid || !dirty}
                                            >
                                                Continuar
                                            </button>
                                        </Form>

                                        <div className="w-100 px-5 mt-4">
                                            <div className="d-flex justify-content-center">
                                                <span className="d-flex w-100">
                                                    <hr className="line-center mx-3" />{' '}
                                                    o{' '}
                                                    <span className="d-md-block d-none w-75 mx-1">
                                                        continúa con
                                                    </span>
                                                    <hr className="line-center mx-3" />
                                                </span>
                                            </div>
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
                                                    ></a>
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
                                                        className="session-text"
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
                                </div>
                            </div>

                            <div className="col-md-12 row my-4 reg-session-phone">
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
                )}
            </Formik>
        </>
    )
}

export default CardSession
