import { useAppDispatch, useAppSelector } from '../hooks/reduxHook'
import { useState, useEffect } from 'react'
import { closeAllModals, openModal } from '../store/slices/modal/modalSlice'
import {
    cronometroRecovery,
    sendPasswordRecovery,
} from '../services/SendPasswordRecovery'

const CardRegisterVerifyPassword = (): JSX.Element => {
    const { data } = useAppSelector((state) => state.modal)
    const dispatch = useAppDispatch()

    const [isDisabled, setIsDisabled] = useState(false)
    const [countdown, setCountdown] = useState(0)

    useEffect(() => {
        if (isDisabled) {
            const intervalId = setInterval(() => {
                setCountdown((prevCountdown) => prevCountdown - 1)
            }, 1000)

            return () => {
                clearInterval(intervalId)
            }
        }
    }, [isDisabled])

    const sendPassword = (): void => {
        setIsDisabled(true)
        setCountdown(120)

        sendPasswordRecovery(data[0])
            .then((resp) => {
                if (resp.status === 200) {
                    const payloadModal = {
                        modal: 'notification-msg-recovery',
                        data: [data[0]],
                    }

                    dispatch(closeAllModals())
                    dispatch(openModal(payloadModal))
                } else if (resp.response.status === 400) {
                    cronometroRecovery()
                        .then((seconds) => {
                            setCountdown(seconds)
                            startCountdown(seconds)
                            console.log(seconds)
                        })
                        .catch((error) => {
                            console.log(
                                'Error al obtener el valor del cronómetro:',
                                error
                            )
                        })
                    console.error(
                        'error 400 - Correo no valido, no encontrado, Ya verificado... Esperar a que el correo se enfríe'
                    )
                } else if (resp.response.status === 500) {
                    console.error('error 500 - Error interno del servidor')
                    const payloadModal = {
                        modal: 'notification-verify1',
                        data: [],
                    }

                    dispatch(closeAllModals())
                    dispatch(openModal(payloadModal))
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const startCountdown = (seconds: number): void => {
        // Define una función llamada "startCountdown" que toma un argumento "seconds" de tipo number y no devuelve nada

        setCountdown(seconds)
        // Actualiza el estado de "countdown" con el valor de "seconds"

        setIsDisabled(true)
        // Actualiza el estado de "isDisabled" a true
    }

    const formatTime = (seconds: number): string => {
        // Define una función llamada "formatTime" que toma un argumento "seconds" de tipo number y devuelve una cadena de texto (string)

        const minutes = Math.floor(seconds / 60)
        // Calcula la cantidad de minutos redondeando hacia abajo la división de "seconds" entre 60

        const remainingSeconds = seconds % 60
        // Calcula los segundos restantes después de obtener los minutos

        const formattedMinutes = String(minutes).padStart(2, '')
        // Convierte los minutos en una cadena de texto y agrega un cero inicial si es necesario

        const formattedSeconds = String(remainingSeconds).padStart(2, '0')
        // Convierte los segundos restantes en una cadena de texto y agrega un cero inicial si es necesario

        return `${formattedMinutes}:${formattedSeconds}`
        // Devuelve una cadena de texto en el formato "MM:SS" donde MM representa los minutos y SS los segundos formateados
    }

    useEffect(() => {
        // Define un efecto de reacción que se ejecutará cuando haya cambios en las dependencias "countdown" y "isDisabled"

        if (countdown === 0 && isDisabled) {
            setIsDisabled(false)
            // Si el contador llega a cero y "isDisabled" es true, actualiza el estado de "isDisabled" a false
        }
    }, [countdown, isDisabled])

    return (
        <div className="cardRegisterVerify container p-0">
            <div className="verify-valid container text-center">
                <div className="row">
                    <div className="mt-5">
                        <svg
                            width="150"
                            height="116"
                            viewBox="0 0 272 173"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M203.057 63.6121H67.7188V122.274H203.057V63.6121Z"
                                fill="#F6E9DA"
                            />
                            <path
                                d="M203.852 64.2954L203.057 63.6121L141.476 116.352C137.972 119.355 132.8 119.355 129.295 116.352L67.7178 63.6121L66.9221 64.2954C64.4622 66.403 63.0439 69.4825 63.0439 72.7229V143.949C63.0439 151.72 69.3456 158.022 77.1172 158.022H193.657C201.429 158.022 207.73 151.72 207.73 143.949V72.7199C207.73 69.4795 206.315 66.4 203.852 64.2923V64.2954Z"
                                fill="#F4D199"
                            />
                            <path
                                d="M141.477 10.8723C137.973 7.86874 132.801 7.86874 129.296 10.8723L67.7188 63.612H203.057L141.477 10.8723Z"
                                fill="#F6E9DA"
                            />
                            <path
                                d="M115.352 39.2041L114.942 37.1481L116.737 38.2323C119.483 39.8905 122.987 39.5777 125.396 37.4609L126.969 36.0791L126.929 38.1746C126.865 41.3816 128.888 44.2607 131.928 45.2871L133.911 45.9583L132.077 46.9696C129.268 48.5185 127.786 51.7103 128.414 54.8535L128.824 56.9096L127.029 55.8254C124.284 54.1672 120.779 54.48 118.371 56.5968L116.798 57.9786L116.837 55.8831C116.901 52.676 114.879 49.797 111.839 48.7705L109.855 48.0994L111.69 47.0881C114.499 45.5392 115.981 42.3474 115.352 39.2041Z"
                                fill="#F9A823"
                            />
                            <path
                                d="M153.039 7.24315L153.3 5.16284L154.657 6.75724C156.738 9.19895 160.157 10.0159 163.115 8.77074L165.047 7.95988L164.345 9.93389C163.27 12.9557 164.275 16.3267 166.83 18.2643L168.5 19.5307L166.438 19.9103C163.282 20.4903 160.865 23.0444 160.464 26.2271L160.203 28.3075L158.845 26.7131C156.765 24.2713 153.345 23.4544 150.387 24.6996L148.456 25.5104L149.157 23.5364C150.233 20.5146 149.227 17.1436 146.673 15.206L145.003 13.9396L147.065 13.56C150.22 12.98 152.638 10.4259 153.039 7.24315Z"
                                fill="#F9A823"
                            />
                            <path
                                d="M151.298 73.8435L150.621 73.1146L151.617 73.1055C153.142 73.0903 154.478 72.0912 154.924 70.6334L155.216 69.6829L155.723 70.5393C156.498 71.8512 158.034 72.5103 159.516 72.1671L160.485 71.9424L159.996 72.8079C159.249 74.135 159.443 75.7932 160.482 76.9078L161.159 77.6366L160.163 77.6458C158.639 77.6609 157.302 78.6601 156.856 80.1178L156.564 81.0684L156.057 80.212C155.283 78.9 153.746 78.241 152.264 78.5842L151.295 78.8089L151.784 77.9434C152.531 76.6162 152.337 74.958 151.298 73.8435Z"
                                fill="#F9A823"
                            />
                            <path
                                d="M103.806 5.87043L102.837 5.05045L104.097 4.88646C106.026 4.63439 107.568 3.1645 107.912 1.25122L108.136 0L108.908 1.00827C110.089 2.55104 112.133 3.15236 113.961 2.49334L115.155 2.06209L114.666 3.23435C113.919 5.02919 114.42 7.10039 115.905 8.35466L116.874 9.17463L115.613 9.33863C113.685 9.5907 112.142 11.0606 111.799 12.9739L111.574 14.2251L110.803 13.2168C109.621 11.674 107.578 11.0727 105.749 11.7317L104.556 12.163L105.045 10.9907C105.792 9.19589 105.291 7.12469 103.806 5.87043Z"
                                fill="#F9A823"
                            />
                            <path
                                d="M271.886 173C234.006 158.687 186.7 150.189 135.387 150.189C84.075 150.189 37.6916 158.523 0 172.581L271.886 172.997V173Z"
                                fill="url(#paint0_linear_724_87)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_724_87"
                                    x1="135.943"
                                    y1="173"
                                    x2="135.943"
                                    y2="150.189"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#AA97EF" stopOpacity="0" />
                                    <stop
                                        offset="1"
                                        stopColor="#AA97EF"
                                        stopOpacity="0.25"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    <div className="title-verify my-4">
                        Verifica tu correo <br /> electrónico
                    </div>

                    <div className="border-web container">
                        <div className="mt-1 w-100 mb-3">
                            <div className="mesagge-card p-1">
                                <span
                                    className="pb-1"
                                    style={{ fontSize: '.9em' }}
                                >
                                    Hemos enviado un mensaje a <b>{data[0]}</b>{' '}
                                    para verificar tu cuenta.
                                </span>
                            </div>
                        </div>

                        <div className="container w-100 info-card">
                            <div className="row">
                                <span>
                                    Si no aparece en tu bandeja de entrada
                                    verifica en spam
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 mt-2 mb-5 pb-3 chronometer-phone">
                        {countdown > 0 && (
                            <span className="d-flex justify-content-center my-3 chronometer-verify">
                                {formatTime(countdown)
                                    .split('')
                                    .map((letter, index) => (
                                        <span
                                            key={index}
                                            className={`mx-1 ${
                                                letter === ':'
                                                    ? ''
                                                    : 'styled-letter'
                                            }`}
                                        >
                                            {letter}
                                        </span>
                                    ))}
                            </span>
                        )}

                        <div className="d-flex justify-content-center my-4 section-phone">
                            <span
                                className="mx-3 mt-1"
                                style={{ color: '#333' }}
                            >
                                ¿No te ha llegado?
                            </span>

                            <button
                                className="btn resend border-0"
                                onClick={sendPassword}
                                disabled={isDisabled}
                            >
                                {isDisabled ? (
                                    <>
                                        <span className="text-send">
                                            Reenviar correo
                                        </span>{' '}
                                    </>
                                ) : (
                                    'Reenviar correo'
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardRegisterVerifyPassword
