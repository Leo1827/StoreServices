import { useRef, useState } from 'react'
import IconList from './IconList'

interface InputI {
    field: any
    type: any
    placeholder: any
    classCustom: string
    iconRight: string
    iconLeft: string
    value: any
    colorIcon: any
}
const Input = ({
    field,
    type,
    placeholder,
    classCustom = 'notiong',
    iconRight,
    iconLeft,
    value,
    colorIcon = null,
}: InputI): JSX.Element => {
    const iconLeftRef = useRef(null)
    const [passwordPlaceholder, setPasswordPlaceholder] =
        useState('Ingresa tu correo')
    return (
        <div className="input-wrapper">
            {iconLeft?.length > 0 && (
                <div className="iconLeft" ref={iconLeftRef}>
                    <IconList icon={iconLeft} color="#000" size={'xl'} />
                </div>
            )}
            {(type === 'password' && type === 'cpassword') ||
            type === 'email' ? (
                <input
                    {...field}
                    type={type}
                    placeholder={passwordPlaceholder}
                    className={`${
                        iconLeft?.length > 0 && iconLeft?.length === 0
                            ? 'input'
                            : 'input-not-space'
                    } w-100 ${classCustom}`}
                    value={value}
                    // eslint-disable-next-line react/no-unknown-property
                    innerRef={(input: HTMLInputElement | null) => {
                        field.ref = input

                        if (input != null) {
                            input.placeholder = passwordPlaceholder
                        }
                    }}
                    onFocus={() => {
                        setPasswordPlaceholder('')
                    }}
                    onBlur={() => {
                        setPasswordPlaceholder('Ingresa tu correo')
                    }}
                />
            ) : (
                <input
                    {...field}
                    type={type}
                    placeholder={placeholder}
                    className={`${
                        iconLeft?.length > 0 ? 'input' : 'input-not-space'
                    } w-100 ${classCustom}`}
                    value={value}
                />
            )}

            {iconRight != null ? (
                <div className="iconRight">
                    <IconList
                        icon={iconRight}
                        color={colorIcon != null ? colorIcon : 'transparent'}
                        size={'xl'}
                    />
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}

export default Input
