import { useEffect, useRef, useState } from 'react'
import IconList from '../IconList'
import { hasSimbolOrNumber, hasUppercase } from '../../helpers/textHelpers'

interface MyInputProps {
    field: {
        name: string
        value: string
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
        onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
        ref: HTMLInputElement | null
    }
    form?: {
        errors: Record<string, string>
        touched: Record<string, boolean>
    }

    iconRight: string
    iconLeft: string
    classCustom: string
    withValidations: boolean
    placeholderText: string
    onClick?: () => void
    iconDeshability?: boolean
}

const InputPassword = ({
    field,
    form,
    iconRight,
    iconLeft,
    classCustom,
    withValidations,
    placeholderText,
    iconDeshability,
    onClick,
    ...props
}: MyInputProps): JSX.Element => {
    const [passwordPlaceholder, setPasswordPlaceholder] =
        useState(placeholderText)
    const [showPassword, setShowPassword] = useState(false)
    const [isInputTouched, setIsInputTouched] = useState(false)
    const iconLeftRef = useRef(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const handleInputClick = (): void => {
        setIsInputTouched(true)
    }

    const handleDocumentMouseDown = (event: MouseEvent): void => {
        if (
            inputRef.current != null &&
            !inputRef.current.contains(event.target as Node)
        ) {
            setIsInputTouched(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleDocumentMouseDown)

        return () => {
            document.removeEventListener('mousedown', handleDocumentMouseDown)
        }
    }, [])

    return (
        <>
            <div className="input-wrapper">
                <a
                    className="position-absolute bg-danger "
                    style={{ width: '0px' }}
                    onClick={() => {
                        setShowPassword(!showPassword)
                    }}
                >
                    {showPassword ? (
                        <div className="view-password-session">
                            <svg
                                width="28"
                                height="28"
                                viewBox="0 0 23 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon-new-password"
                            >
                                <path
                                    d="M11.4987 8.62924C12.0022 8.62924 12.5007 8.7284 12.9659 8.92107C13.431 9.11374 13.8536 9.39614 14.2096 9.75214C14.5656 10.1081 14.848 10.5308 15.0407 10.9959C15.2334 11.4611 15.3325 11.9596 15.3325 12.4631C15.3325 12.9665 15.2334 13.465 15.0407 13.9302C14.848 14.3953 14.5656 14.818 14.2096 15.174C13.8536 15.53 13.431 15.8124 12.9659 16.005C12.5007 16.1977 12.0022 16.2969 11.4987 16.2969C10.4819 16.2969 9.5068 15.8929 8.78782 15.174C8.06884 14.455 7.66492 13.4798 7.66492 12.4631C7.66492 11.4463 8.06884 10.4711 8.78782 9.75214C9.5068 9.03316 10.4819 8.62924 11.4987 8.62924ZM11.4987 10.0667C10.8632 10.0667 10.2537 10.3192 9.80428 10.7686C9.35489 11.218 9.10242 11.8275 9.10242 12.4631C9.10242 13.0986 9.35489 13.7081 9.80428 14.1575C10.2537 14.6069 10.8632 14.8594 11.4987 14.8594C12.1343 14.8594 12.7438 14.6069 13.1932 14.1575C13.6426 13.7081 13.895 13.0986 13.895 12.4631C13.895 11.8275 13.6426 11.218 13.1932 10.7686C12.7438 10.3192 12.1343 10.0667 11.4987 10.0667ZM11.4987 5.27124C15.9205 5.27124 19.7356 8.28999 20.795 12.5206C20.8204 12.6129 20.827 12.7094 20.8145 12.8044C20.802 12.8994 20.7706 12.9909 20.7223 13.0736C20.6739 13.1562 20.6095 13.2284 20.5328 13.2859C20.4562 13.3433 20.3688 13.3848 20.2759 13.408C20.1829 13.4312 20.0863 13.4356 19.9916 13.4209C19.897 13.4062 19.8062 13.3727 19.7247 13.3225C19.6431 13.2722 19.5725 13.2061 19.5168 13.1282C19.4612 13.0502 19.4217 12.9619 19.4007 12.8684C18.9559 11.1093 17.9368 9.54893 16.5049 8.43447C15.0731 7.32 13.3102 6.71519 11.4958 6.71585C9.6813 6.71651 7.91893 7.3226 6.48787 8.43811C5.0568 9.55362 4.03888 11.1147 3.59536 12.8742C3.54794 13.0579 3.4298 13.2154 3.26671 13.3124C3.10362 13.4093 2.9088 13.4379 2.72476 13.3917C2.54071 13.3456 2.38236 13.2286 2.28424 13.0662C2.18612 12.9038 2.15619 12.7092 2.20098 12.5249C2.72092 10.4526 3.91815 8.61349 5.60263 7.29935C7.2871 5.98521 9.36228 5.2714 11.4987 5.27124Z"
                                    fill="#736E6E"
                                />
                            </svg>
                        </div>
                    ) : (
                        <div className="view-password-session">
                            <svg
                                width="28"
                                height="28"
                                viewBox="0 0 23 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon-new-password"
                            >
                                <path
                                    d="M11.4987 9.1293C12.0022 9.1293 12.5007 9.22847 12.9659 9.42113C13.431 9.6138 13.8536 9.8962 14.2096 10.2522C14.5656 10.6082 14.848 11.0308 15.0407 11.496C15.2334 11.9611 15.3325 12.4597 15.3325 12.9631C15.3325 13.4666 15.2334 13.9651 15.0407 14.4302C14.848 14.8954 14.5656 15.318 14.2096 15.674C13.8536 16.03 13.431 16.3124 12.9659 16.5051C12.5007 16.6978 12.0022 16.7969 11.4987 16.7969C10.4819 16.7969 9.5068 16.393 8.78782 15.674C8.06884 14.955 7.66492 13.9799 7.66492 12.9631C7.66492 11.9463 8.06884 10.9712 8.78782 10.2522C9.5068 9.53322 10.4819 9.1293 11.4987 9.1293ZM11.4987 5.7713C15.9205 5.7713 19.7356 8.79005 20.795 13.0206C20.8204 13.113 20.827 13.2095 20.8145 13.3045C20.802 13.3994 20.7706 13.491 20.7223 13.5736C20.6739 13.6563 20.6095 13.7285 20.5328 13.7859C20.4562 13.8434 20.3688 13.8849 20.2759 13.9081C20.1829 13.9313 20.0863 13.9356 19.9916 13.9209C19.897 13.9062 19.8062 13.8728 19.7247 13.8225C19.6431 13.7722 19.5725 13.7062 19.5168 13.6282C19.4612 13.5502 19.4217 13.4619 19.4007 13.3685C18.9559 11.6094 17.9368 10.049 16.5049 8.93453C15.0731 7.82006 13.3102 7.21525 11.4958 7.21591C9.6813 7.21657 7.91893 7.82266 6.48787 8.93817C5.0568 10.0537 4.03888 11.6148 3.59536 13.3742C3.54794 13.558 3.4298 13.7155 3.26671 13.8124C3.10362 13.9094 2.9088 13.9379 2.72476 13.8918C2.54071 13.8457 2.38236 13.7287 2.28424 13.5663C2.18612 13.4039 2.15619 13.2093 2.20098 13.0249C2.72092 10.9527 3.91815 9.11355 5.60263 7.79941C7.2871 6.48527 9.36228 5.77146 11.4987 5.7713Z"
                                    fill="#736E6E"
                                />
                            </svg>
                        </div>
                    )}
                </a>

                <div className="icon-left-session">
                    {iconLeft?.length > 0 &&
                        field.value.length <= 0 &&
                        !isInputTouched && (
                            <div className="iconLeft" ref={iconLeftRef}>
                                <svg
                                    width="22"
                                    height="12"
                                    viewBox="0 0 22 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11.65 4C11.2381 2.83048 10.4733 1.81762 9.46134 1.10116C8.44934 0.384703 7.23994 -4.57935e-05 6 4.08807e-09C2.69 4.08807e-09 0 2.69 0 6C0 9.31 2.69 12 6 12C7.23994 12 8.44934 11.6153 9.46134 10.8988C10.4733 10.1824 11.2381 9.16952 11.65 8H16V12H20V8H22V4H11.65ZM6 8C4.9 8 4 7.1 4 6C4 4.9 4.9 4 6 4C7.1 4 8 4.9 8 6C8 7.1 7.1 8 6 8Z"
                                        fill="#736E6E"
                                    />
                                </svg>
                            </div>
                        )}
                </div>

                <input
                    id={field.name}
                    type={showPassword ? 'text' : 'password'}
                    {...props}
                    {...field}
                    placeholder={passwordPlaceholder} // customPlaceholder || passwordPlaceholder
                    className={`${
                        iconLeft?.length > 0
                            ? 'input'
                            : 'input-not-space input-password'
                    } w-100 ${classCustom}`}
                    ref={(input: HTMLInputElement | null) => {
                        field.ref = input
                        if (input !== null) {
                            input.placeholder = passwordPlaceholder
                        }
                    }}
                    onFocus={() => {
                        setPasswordPlaceholder('')
                    }}
                    onBlur={() => {
                        setPasswordPlaceholder(placeholderText)
                    }}
                    autoComplete="none"
                    onClick={() => {
                        handleInputClick() // Llama a la función handleInputClick junto con cualquier otra lógica de onClick proporcionada como prop
                        if (onClick != null) {
                            onClick() // Ejecuta la función onClick si está disponible
                        }
                    }}
                />
            </div>
            {withValidations &&
                passwordPlaceholder === '' &&
                !(
                    hasUppercase(field.value) &&
                    field.value.length >= 8 &&
                    hasSimbolOrNumber(field.value)
                ) && (
                    <div
                        style={{
                            marginTop: '.7rem',
                            marginLeft: '.5rem',
                        }}
                    >
                        {field.value.length >= 8 && (
                            <span
                                className="d-flex align-items-center gap-2"
                                style={{
                                    fontSize: '.8em',
                                }}
                            >
                                <div>
                                    <IconList
                                        icon={'check'}
                                        color={'#000'}
                                        size={'1x'}
                                    />
                                    <span>
                                        {' '}
                                        Debe contener mínimo 8 caracteres
                                    </span>
                                </div>
                            </span>
                        )}
                        {field.value.length < 8 && (
                            <span
                                className="validations-password d-flex align-items-center gap-3 text-danger"
                                style={{
                                    fontSize: '.8em',
                                }}
                            >
                                <div className="d-flex gap-2 align-items-center">
                                    <IconList
                                        icon={'info'}
                                        color={'#E72727'}
                                        size={'1x'}
                                    />
                                    <span
                                        style={{
                                            fontWeight: 'lighter',
                                        }}
                                    >
                                        Debe contener mínimo 8 caracteres
                                    </span>
                                </div>
                            </span>
                        )}
                        {hasUppercase(field.value) && (
                            <span
                                className="d-flex align-items-center gap-2"
                                style={{
                                    fontSize: '.8em',
                                }}
                            >
                                <div>
                                    <IconList
                                        icon={'check'}
                                        color={'#000'}
                                        size={'1x'}
                                    />
                                    <span>
                                        {' '}
                                        Debe contener al menos una mayúscula
                                    </span>
                                </div>
                            </span>
                        )}
                        {!hasUppercase(field.value) && (
                            <span
                                className="validations-password d-flex align-items-center gap-2 text-danger"
                                style={{
                                    fontSize: '.8em',
                                }}
                            >
                                <div className="d-flex gap-2 align-items-center">
                                    <IconList
                                        icon={'info'}
                                        color={'#E72727'}
                                        size={'1x'}
                                    />
                                    <span
                                        style={{
                                            fontWeight: 'lighter',
                                        }}
                                    >
                                        Debe contener al menos una mayúscula
                                    </span>
                                </div>
                            </span>
                        )}
                        {hasSimbolOrNumber(field.value) && (
                            <span
                                className="d-flex align-items-center gap-2"
                                style={{
                                    fontSize: '.8em',
                                }}
                            >
                                <div>
                                    <IconList
                                        icon={'check'}
                                        color={'#000'}
                                        size={'1x'}
                                    />
                                    <span>
                                        {' '}
                                        Incluir al menos un símbolo o un numero
                                    </span>
                                </div>
                            </span>
                        )}
                        {!hasSimbolOrNumber(field.value) && (
                            <span
                                className="validations-password d-flex align-items-center gap-2 text-danger"
                                style={{
                                    fontSize: '.8em',
                                }}
                            >
                                <div className="d-flex gap-2 align-items-center">
                                    <IconList
                                        icon={'info'}
                                        color={'#E72727'}
                                        size={'1x'}
                                    />
                                    <span
                                        style={{
                                            fontWeight: 'lighter',
                                        }}
                                    >
                                        Incluir al menos un símbolo o un numero
                                    </span>
                                </div>
                            </span>
                        )}
                    </div>
                )}
        </>
    )
}

export default InputPassword
