import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useLocation, useNavigate } from 'react-router-dom'
import InputPassword from './Inputs/InputPassword'

import { CodeValidPassword, NewPassword } from '../services/NewPasswordServices'
import { useState } from 'react'

const CardSessionNewPassword = (): JSX.Element => {
    const RegisterSchema = Yup.object().shape({
        password: Yup.string()
            .min(8, 'Debe contener mínimo 8 caracteres')
            .matches(
                /(?=.*[a-z])(?=.*[A-Z])/,
                'Debe contener al menos una mayúscula'
            )
            .matches(
                /(?=.*[0-9])(?=.*[!@#$%^&*,.?¿])/,
                'Incluir al menos un símbolo o un número'
            )
            .required('La contraseña es obligatoria'),

        cpassword: Yup.string()
            .required('La contraseña es obligatoria')
            .oneOf(
                [Yup.ref('password'), null],
                'Las contraseñas no coincidden'
            ),
    })

    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const code = String(queryParams.get('code'))

    const navigate = useNavigate()

    const [showImage, setShowImage] = useState(true)

    const handlePasswordClick = (): void => {
        setShowImage(false)
    }

    return (
        <div className="cardSessionNewPassword">
            <div className="container container-NewPassword">
                <Formik
                    initialValues={{ password: '', cpassword: '' }}
                    validationSchema={RegisterSchema}
                    onSubmit={async (values) => {
                        const data2 = {
                            recoveryCode: code,
                        }

                        console.log(data2)

                        CodeValidPassword(data2.recoveryCode)
                            .then((resp) => {
                                console.log(resp)
                                if (resp.status === 200) {
                                    const datas = {
                                        password: values.password,
                                        code,
                                    }
                                    NewPassword(datas)
                                        .then((resp) => {
                                            if (resp.status === 200) {
                                                console.log(
                                                    'Contraseña actualizada con éxito'
                                                )

                                                navigate(
                                                    '/notification-valid-password'
                                                )
                                            } else {
                                                console.log(
                                                    'Error al actualizar la contraseña'
                                                )
                                            }
                                        })
                                        .catch((error) => {
                                            console.log(error)
                                        })
                                } else if (resp.response.status === 401) {
                                    console.log(
                                        'Código de recuperación inválido - 401'
                                    )
                                    navigate('/notification-invalid-password')
                                } else {
                                    console.log(
                                        'Error al verificar el código de recuperación'
                                    )
                                }
                            })
                            .catch((error) => {
                                console.log(error)
                            })
                    }}
                >
                    {({ errors, touched, values, isValid, dirty }) => (
                        <div className="row">
                            <div className="my-5">
                                <h1 className="mt-5 title-new-password">
                                    Crea tu nueva contraseña
                                </h1>
                            </div>

                            <div className="col-md-12 mt-1">
                                <Form className="p-3">
                                    <span className="d-flex mx-3 new-password-text">
                                        Nueva contraseña
                                    </span>

                                    <Field name="password">
                                        {({ field }: any) => (
                                            <InputPassword
                                                field={field}
                                                iconLeft={''}
                                                iconRight={''}
                                                classCustom={
                                                    errors.password != null &&
                                                    touched.password != null
                                                        ? 'alert-input-danger'
                                                        : values.password
                                                              ?.length > 0
                                                        ? 'border-0 border-password-valid'
                                                        : 'border-email '
                                                }
                                                withValidations={true}
                                                onClick={handlePasswordClick}
                                                placeholderText={
                                                    'Ingrese tu contraseña'
                                                }
                                            />
                                        )}
                                    </Field>

                                    <span className="d-flex mx-3 new-password-text mt-4">
                                        Confirma contraseña
                                    </span>

                                    <Field name="cpassword">
                                        {({ field }: any) => (
                                            <InputPassword
                                                field={field}
                                                iconLeft={
                                                    values.password.length > 0
                                                        ? ''
                                                        : 'email'
                                                }
                                                iconRight={''}
                                                classCustom={
                                                    errors.cpassword != null &&
                                                    touched.cpassword != null
                                                        ? 'alert-input-danger start-0'
                                                        : values.cpassword
                                                              ?.length > 0
                                                        ? 'border-0 border-password-valid start-0'
                                                        : 'border-email start-0'
                                                }
                                                withValidations={false}
                                                onClick={handlePasswordClick}
                                                placeholderText={
                                                    'Ingresa tu contraseña'
                                                }
                                            />
                                        )}
                                    </Field>
                                    <div className="mx-3 span-alert-card text-sm-start py-1 pb-4">
                                        <span className="d-flex align-items-center gap-2 position-absolute">
                                            {errors.cpassword != null &&
                                            touched.cpassword != null ? (
                                                <>
                                                    <div>
                                                        {errors.cpassword}
                                                    </div>
                                                </>
                                            ) : null}
                                        </span>
                                    </div>

                                    <button
                                        type="submit"
                                        className={`btn btn-lg mt-4 text-btn ${
                                            isValid && dirty
                                                ? 'btn-primary'
                                                : 'btn-dark '
                                        }`}
                                    >
                                        Actualizar
                                    </button>
                                </Form>
                            </div>

                            {showImage && (
                                <div className="mt-4 d-md-block d-none">
                                    <svg
                                        width="49"
                                        height="49"
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
                            )}
                        </div>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default CardSessionNewPassword
