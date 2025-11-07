import { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook'
import { openModal } from '../store/slices/modal/modalSlice'
import { registerUserData } from '../services/RegisterServices'
import { useNavigate } from 'react-router-dom'
import { login } from '../store/slices/auth/authSlice'
import InputText from './Inputs/InputText'
const ProfileImg = (): JSX.Element => {
    const [messageError] = useState<string>('')
    const dispatch = useAppDispatch()
    const userAuth = useAppSelector((state) => state.auth)
    const openProfileModal = (): void => {
        const payload = {
            modal: 'sessionProfile-step3',
            data: [],
        }

        dispatch(openModal(payload))
    }

    const RegisterSchema = Yup.object().shape({
        name: Yup.string()
            .required('El nombre debe ser requerido')
            .matches(
                /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s]+$/,
                'El nombre solo puede contener letras y espacios'
            ),
        lastnameFather: Yup.string()
            .required('El apellido paterno debe ser requerido')
            .matches(
                /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s]+$/,
                'El apellido paterno solo puede contener letras y espacios'
            ),
        lastnameMother: Yup.string()
            .required('El apellido materno debe ser requerido')
            .matches(
                /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s]+$/,
                'El apellido materno solo puede contener letras y espacios'
            ),
    })

    const navigate = useNavigate()

    return (
        <Formik
            initialValues={{
                name: '',
                lastnameFather: '',
                lastnameMother: '',
            }}
            validationSchema={RegisterSchema}
            onSubmit={async (values) => {
                const data = {
                    givenName: values.name,
                    firstLastName: values.lastnameFather,
                    secondLastName: values.lastnameMother,
                }

                registerUserData(data)
                    .then((resp) => {
                        const data = resp.data.data

                        const payloadSessionPassword = {
                            email: data.email,
                            imageProfile: data.profilePicturePath,
                            firstLastName: data.firstLastName,
                            givenName: data.givenName,
                            phoneNumber: data.phoneNumber,
                            secondLastName: data.secondLastName,
                            userStatus: data.userStatus,
                        }
                        dispatch(login(payloadSessionPassword))
                        navigate('/home')
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }}
        >
            {({ errors, touched, isValid, dirty }) => (
                <div
                    className="profileImg"
                    style={{ height: '100vh', backgroundColor: '#F8F4F3' }}
                >
                    <div>
                        <span
                            className="d-flex justify-content-center text-primary"
                            style={{
                                fontStyle: 'normal',
                                fontWeight: '700',
                                fontSize: '33px',
                                lineHeight: '39px',
                            }}
                        >
                            <span className="mt-5">Cuéntanos sobre ti</span>
                        </span>

                        <div className="container content-img-profile text-center shadow mt-5">
                            <div className="pt-5 section-profile">
                                <span
                                    className="text-profile-tittle "
                                    style={{
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        fontSize: '26px',
                                        lineHeight: '31px',
                                    }}
                                >
                                    Personaliza tu perfil
                                </span>
                            </div>

                            <div className="mx-5 pt-4 border-profile line-web"></div>
                            <div className=" line-phone"></div>

                            <div className="row containerImg position-absolute">
                                <span
                                    className="text-center mb-3 mt-5 pt-2 title-img-phone"
                                    style={{
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        fontSize: '25px',
                                        lineHeight: '18px',
                                    }}
                                >
                                    Sube una imagen
                                </span>

                                <div
                                    className="border-0"
                                    style={{
                                        backgroundColor: 'transparent',
                                    }}
                                >
                                    {userAuth.imageProfile != null ? (
                                        <img
                                            src={`${
                                                userAuth.imageProfile
                                            }?${Date.now()}`}
                                            className="mt-5 imgWithData"
                                            alt=""
                                        />
                                    ) : (
                                        <div className="mt-5 img-phone">
                                            <svg
                                                width="196"
                                                height="196"
                                                viewBox="0 0 196 196"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    cx="98"
                                                    cy="98"
                                                    r="96"
                                                    stroke="#ADA8A8"
                                                    strokeWidth="4"
                                                    strokeLinejoin="round"
                                                    strokeDasharray="29 29"
                                                />
                                                <g clipPath="url(#clip0_2005_354)">
                                                    <path
                                                        d="M132.665 77.4763H121.736C121.736 77.4763 123.055 76.1561 123.055 73.9168C123.055 68.4029 118.493 63.9244 112.877 63.9244H84.7846C79.1686 63.9244 74.6073 68.4417 74.6073 73.9168C74.6073 75.936 75.9256 77.4763 75.9256 77.4763H65.0101C59.8028 77.4763 55.5843 81.6182 55.5843 86.7309V117.795C55.5843 122.908 59.8028 127.05 65.0101 127.05H132.665C137.872 127.05 142.091 122.908 142.091 117.795V86.7309C142.091 81.6182 137.872 77.4763 132.665 77.4763Z"
                                                        stroke="#ADA8A8"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M98.8377 118.818C109.715 118.818 118.533 110.16 118.533 99.4803C118.533 88.8004 109.715 80.1427 98.8377 80.1427C87.9602 80.1427 79.1423 88.8004 79.1423 99.4803C79.1423 110.16 87.9602 118.818 98.8377 118.818Z"
                                                        stroke="#ADA8A8"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M98.8376 109.615V89.7855"
                                                        stroke="#ADA8A8"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M89.4513 98.9495L98.798 89.7855L108.224 99.0401"
                                                        stroke="#ADA8A8"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_2005_354">
                                                        <rect
                                                            width="90.4615"
                                                            height="67.0085"
                                                            fill="white"
                                                            transform="translate(53.6068 61.9829)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    )}

                                    <div
                                        className="position-relative"
                                        onClick={openProfileModal}
                                    >
                                        <button
                                            className="more text-center border-0 bg-transparent"
                                            type="button"
                                            onClick={openProfileModal}
                                        >
                                            {userAuth.imageProfile != null ? (
                                                <svg
                                                    width="73"
                                                    height="73"
                                                    viewBox="0 0 73 73"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g filter="url(#filter0_d_5185_3627)">
                                                        <circle
                                                            cx="36.5"
                                                            cy="36.5"
                                                            r="23.5"
                                                            fill="#F9A823"
                                                        />
                                                        <circle
                                                            cx="36.5"
                                                            cy="36.5"
                                                            r="24.5"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                        />
                                                    </g>
                                                    <g clipPath="url(#clip0_5185_3627)">
                                                        <path
                                                            d="M43.3379 46.5999C43.2146 46.6927 43.1405 46.7518 43.0624 46.8024C40.821 48.2494 38.3822 48.8232 35.7584 48.5237C33.3813 48.2537 31.2879 47.2876 29.4866 45.6718C25.9991 42.5414 24.716 37.4366 26.324 32.9647C26.579 32.2559 26.945 31.5851 27.274 30.9017C27.5496 30.3321 27.2617 29.7035 26.6695 29.636C26.2747 29.5938 26.0073 29.8006 25.814 30.1423C25.0902 31.429 24.5638 32.7917 24.28 34.2514C23.7372 37.0358 23.988 39.7485 25.1437 42.3262C26.9903 46.4522 30.0994 49.0341 34.43 49.9749C37.827 50.7132 41.0143 50.0678 43.9631 48.1819C44.0453 48.1271 44.1317 48.0765 44.255 48.0005C44.2263 48.1566 44.2098 48.2494 44.1851 48.3423C43.9877 49.1945 43.7821 50.0467 43.5888 50.8989C43.4695 51.422 43.7286 51.8608 44.2016 51.9747C44.6416 52.0801 45.057 51.7975 45.1804 51.2954C45.5546 49.7218 45.9289 48.144 46.299 46.5661C46.4347 45.9797 46.2003 45.5832 45.6287 45.4397C44.07 45.0516 42.5113 44.6677 40.9485 44.288C40.4673 44.1699 40.0437 44.4356 39.9327 44.8997C39.8258 45.3596 40.1013 45.7857 40.5784 45.908C41.479 46.1358 42.3756 46.3594 43.342 46.5999H43.3379ZM29.5935 25.9572C29.6018 25.8897 29.6059 25.8518 29.6141 25.8138C29.8115 24.9025 30.0089 23.9913 30.2104 23.08C30.3174 22.5822 30.0624 22.135 29.5977 22.0211C29.1576 21.9156 28.7299 22.2109 28.623 22.7003C28.2734 24.2992 27.9279 25.8982 27.5866 27.4971C27.4755 28.0202 27.7264 28.4337 28.2323 28.5518C29.7992 28.9146 31.362 29.269 32.933 29.6192C33.4265 29.7288 33.8583 29.4631 33.9529 29.0116C34.0516 28.5265 33.7925 28.1215 33.2826 27.9949C32.8466 27.8852 32.4107 27.7966 31.9748 27.6954C31.5141 27.5899 31.0535 27.4887 30.5806 27.379C30.6052 27.3368 30.6135 27.3199 30.6217 27.3072C30.6669 27.2735 30.7122 27.2355 30.7574 27.206C33.4142 25.4214 36.3136 24.8224 39.4104 25.5227C42.7786 26.2863 45.3202 28.2523 46.9858 31.3531C48.2772 33.7578 48.6473 36.3355 48.1785 39.0356C47.9482 40.3729 47.4752 41.6175 46.8295 42.7987C46.5787 43.2544 46.7103 43.7353 47.1215 43.9673C47.5246 44.1994 47.9975 44.0475 48.2484 43.6003C49.9099 40.6007 50.3952 37.4071 49.6919 34.0405C49.2354 31.8593 48.2895 29.9187 46.8624 28.2312C44.6087 25.5691 41.7628 24.0334 38.3534 23.6538C35.5898 23.3458 32.9823 23.9238 30.5641 25.3455C30.2475 25.5311 29.939 25.7336 29.6018 25.9446L29.5935 25.9572Z"
                                                            fill="white"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <filter
                                                            id="filter0_d_5185_3627"
                                                            x="0"
                                                            y="0"
                                                            width="73"
                                                            height="73"
                                                            filterUnits="userSpaceOnUse"
                                                            colorInterpolationFilters="sRGB"
                                                        >
                                                            <feFlood
                                                                floodOpacity="0"
                                                                result="BackgroundImageFix"
                                                            />
                                                            <feColorMatrix
                                                                in="SourceAlpha"
                                                                type="matrix"
                                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                result="hardAlpha"
                                                            />
                                                            <feOffset />
                                                            <feGaussianBlur stdDeviation="5.5" />
                                                            <feComposite
                                                                in2="hardAlpha"
                                                                operator="out"
                                                            />
                                                            <feColorMatrix
                                                                type="matrix"
                                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                                                            />
                                                            <feBlend
                                                                mode="normal"
                                                                in2="BackgroundImageFix"
                                                                result="effect1_dropShadow_5185_3627"
                                                            />
                                                            <feBlend
                                                                mode="normal"
                                                                in="SourceGraphic"
                                                                in2="effect1_dropShadow_5185_3627"
                                                                result="shape"
                                                            />
                                                        </filter>
                                                        <clipPath id="clip0_5185_3627">
                                                            <rect
                                                                width="26"
                                                                height="30"
                                                                fill="white"
                                                                transform="translate(24 22)"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            ) : (
                                                <svg
                                                    width="73"
                                                    height="85"
                                                    viewBox="10 10 80 30"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g filter="url(#filter0_d_5185_3628)">
                                                        <circle
                                                            cx="36.5"
                                                            cy="36.5"
                                                            r="23.5"
                                                            fill="#F9A823"
                                                        />
                                                        <circle
                                                            cx="36.5"
                                                            cy="36.5"
                                                            r="24.5"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                        />
                                                    </g>
                                                    <path
                                                        d="M36.2451 48.0676V23.7338"
                                                        stroke="white"
                                                        strokeWidth="3.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M47.5845 35.9006L24.9058 35.9006"
                                                        stroke="white"
                                                        strokeWidth="3.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <defs>
                                                        <filter
                                                            id="filter0_d_5185_3628"
                                                            x="0"
                                                            y="0"
                                                            width="73"
                                                            height="73"
                                                            filterUnits="userSpaceOnUse"
                                                            colorInterpolationFilters="sRGB"
                                                        >
                                                            <feFlood
                                                                floodOpacity="0"
                                                                result="BackgroundImageFix"
                                                            />
                                                            <feColorMatrix
                                                                in="SourceAlpha"
                                                                type="matrix"
                                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                result="hardAlpha"
                                                            />
                                                            <feOffset />
                                                            <feGaussianBlur stdDeviation="5.5" />
                                                            <feComposite
                                                                in2="hardAlpha"
                                                                operator="out"
                                                            />
                                                            <feColorMatrix
                                                                type="matrix"
                                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                                                            />
                                                            <feBlend
                                                                mode="normal"
                                                                in2="BackgroundImageFix"
                                                                result="effect1_dropShadow_5185_3628"
                                                            />
                                                            <feBlend
                                                                mode="normal"
                                                                in="SourceGraphic"
                                                                in2="effect1_dropShadow_5185_3628"
                                                                result="shape"
                                                            />
                                                        </filter>
                                                    </defs>
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <Form>
                                <div className="">
                                    <div className="d-flex container-profile-phone pt-5">
                                        <div
                                            className="row px-5 data-phone-profile"
                                            style={{ marginLeft: '20rem' }}
                                        >
                                            <div className="">
                                                <span className="d-flex mx-2 my-1 lead text-profile">
                                                    Nombre(s)
                                                </span>
                                                <Field name="name">
                                                    {({ field }: any) => (
                                                        <InputText
                                                            field={field}
                                                            className={
                                                                (errors.name !=
                                                                    null &&
                                                                    touched.name !=
                                                                        null) ||
                                                                (messageError !=
                                                                    null &&
                                                                    messageError ===
                                                                        undefined)
                                                                    ? 'alert-input-danger px-4 input-phone'
                                                                    : 'border-email px-4 input-phone'
                                                            }
                                                            deshability={''}
                                                        />
                                                    )}
                                                </Field>
                                            </div>
                                            <div className="pt-4 spacing-phone">
                                                <span className=" d-flex mx-2 my-1 lead text-profile">
                                                    Apellido paterno
                                                </span>
                                                <Field name="lastnameFather">
                                                    {({ field }: any) => (
                                                        <InputText
                                                            field={field}
                                                            className={
                                                                (errors.name !=
                                                                    null &&
                                                                    touched.name !=
                                                                        null) ||
                                                                (messageError !=
                                                                    null &&
                                                                    messageError ===
                                                                        undefined)
                                                                    ? 'alert-input-danger px-4 input-phone'
                                                                    : 'border-email px-4 input-phone'
                                                            }
                                                            deshability={''}
                                                        />
                                                    )}
                                                </Field>
                                            </div>
                                            <div className="pt-4 spacing-phone">
                                                <span className="d-flex mx-2 my-1 lead text-profile">
                                                    Apellido materno
                                                </span>
                                                <Field name="lastnameMother">
                                                    {({ field }: any) => (
                                                        <InputText
                                                            field={field}
                                                            className={
                                                                (errors.name !=
                                                                    null &&
                                                                    touched.name !=
                                                                        null) ||
                                                                (messageError !=
                                                                    null &&
                                                                    messageError ===
                                                                        undefined)
                                                                    ? 'alert-input-danger px-4 input-phone'
                                                                    : 'border-email px-4 input-phone'
                                                            }
                                                            deshability={''}
                                                        />
                                                    )}
                                                </Field>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <button
                                        type="submit"
                                        className={`btn text-white  ${
                                            isValid &&
                                            dirty &&
                                            userAuth.imageProfile != null
                                                ? 'button-profile-primary'
                                                : 'button-profile'
                                        }`}
                                        disabled={
                                            !isValid ||
                                            !dirty ||
                                            userAuth.imageProfile == null
                                        }
                                    >
                                        Continuar
                                    </button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            )}
        </Formik>
    )
}

export default ProfileImg
