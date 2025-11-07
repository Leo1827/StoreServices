import { useRef, useState, useEffect } from 'react'
import IconList from '../IconList'
import { verifyEmail } from '../../services/RegisterServices'
import { verifySessionEmail } from '../../services/ServicesSessionValid'

interface CustomComponentProps {
    field: any
    meta: any
    placeholder: string
    iconLeft: string
    iconRight: string
    colorIcon: any
    messageError: string
    setMessageError: any
    setHasError: any
    verifyBack: boolean
    className?: string
    deshability: string
    customPlaceholder: boolean
}

const InputEmail = ({
    field,
    placeholder,
    iconLeft,
    iconRight,
    colorIcon,
    meta,
    messageError,
    setMessageError,
    verifyBack = false,
    setHasError = false,
    className,
    deshability,
    customPlaceholder = true,
}: CustomComponentProps): JSX.Element => {
    const [hasPlaceholder, setHasPlaceholder] = useState(true)
    const [isBlurInput, setIsBlurInput] = useState(false)
    const [emailIsValid, setEmailIsValid] = useState(false)
    const [isInputTouched, setIsInputTouched] = useState(false)
    const iconLeftRef = useRef(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const isFieldTouched: boolean = meta.touched

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setMessageError(meta.error)
        const newValue = event.target.value
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(newValue)) {
            setEmailIsValid(false)
        } else {
            if (verifyBack) {
                verifyEmail(newValue)
                    .then((resp) => {
                        if (resp.status === 200) {
                            setEmailIsValid(false)
                            setMessageError('Correo electrónico ya utilizado')
                            setIsBlurInput(true)
                            setHasError(true)
                        } else {
                            setHasError(false)
                            setEmailIsValid(true)
                        }
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            }
        }

        field.onChange(event)
    }

    const handleChangeNotRegister = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const newValue = event.target.value
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(newValue)) {
            setEmailIsValid(false)
        } else {
            if (verifyBack) {
                verifySessionEmail(newValue)
                    .then((resp) => {
                        if (resp.status === 200) {
                            setHasError(false)
                            setEmailIsValid(true)
                            setIsBlurInput(false)
                            setHasError(false)
                        } else {
                            setEmailIsValid(false)
                            setMessageError('Correo no registrado')
                            setIsBlurInput(true)
                            setHasError(true)
                        }
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            }
        }

        field.onChange(event)
    }
    const handleInputBlur = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setIsBlurInput(true)
        setMessageError(meta.error)
        setHasPlaceholder(true)

        field.onBlur(event)
    }

    const handleInputClick = (): void => {
        setHasPlaceholder(false)
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
                {iconLeft?.length > 0 &&
                    field.value.length <= 0 &&
                    !isInputTouched && (
                        <div className="iconLeft" ref={iconLeftRef}>
                            <IconList
                                icon={iconLeft}
                                color="#000"
                                size={'xl'}
                            />
                        </div>
                    )}
                <input
                    ref={inputRef}
                    className={`input-not-space w-100  ${
                        messageError !== undefined && isBlurInput
                            ? 'alert-input-danger input-phone'
                            : field.value.length > 0 || emailIsValid
                            ? ' border-email-gray'
                            : 'border-0 border-email '
                        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                    } ${className}`}
                    type="text"
                    {...field}
                    onChange={
                        customPlaceholder
                            ? handleInputChange
                            : handleChangeNotRegister
                    }
                    onBlur={handleInputBlur}
                    onClick={handleInputClick}
                    placeholder={hasPlaceholder ? placeholder : ''}
                    // eslint-disable-next-line react/no-unknown-property
                    disabled={deshability}
                />

                {iconRight != null ? (
                    <div className="iconRight">
                        <IconList
                            icon={iconRight}
                            color={
                                colorIcon != null ? colorIcon : 'transparent'
                            }
                            size={'xl'}
                        />
                    </div>
                ) : (
                    <></>
                )}

                <div className="iconRight">
                    <IconList
                        icon={
                            messageError !== undefined && isBlurInput
                                ? 'x'
                                : emailIsValid
                                ? 'check'
                                : ''
                        }
                        color={
                            messageError !== undefined && isBlurInput
                                ? '#E72727'
                                : '#333333'
                        }
                        size={'xl'}
                    />
                </div>
            </div>
            {meta.errors !== undefined && isFieldTouched !== undefined ? (
                <>asd</>
            ) : (
                <>
                    {isBlurInput && (
                        <div
                            className="text-start position-relative mx-2 my-1"
                            style={{
                                color: 'rgb(115, 110, 110)',
                            }}
                        >
                            <span
                                className="position-absolute container "
                                style={{
                                    fontSize: '0.7em',
                                }}
                            >
                                {messageError !== undefined && messageError}
                            </span>
                        </div>
                    )}
                </>
            )}
        </>
    )
}

export default InputEmail
