import { useState, useRef } from 'react'
import IconList from './IconList'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useAppDispatch } from '../hooks/reduxHook'
import { closeAllModals, openModal } from '../store/slices/modal/modalSlice'
import axios from 'axios'
import { updateImageProfile } from '../store/slices/auth/authSlice'
import avatar1 from '../../public/Images/profile0.png'
import avatar2 from '../../public/Images/profile1.png'
import avatar3 from '../../public/Images/profile2.png'

const ProfileModal = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const [selectedImage, setSelectedImage] = useState<any | null>(null)

    const [defaultImage] = useState<string>('./Images/upload.svg')
    const [isImageLoaded, setIsImageLoaded] = useState(false)
    const [templateImage, setTemplateImage] = useState(null)
    const handleDefaultImageClick = (): void => {
        setSelectedImage(null)
    }

    const fileInputRef = useRef<HTMLInputElement | null>(null) // Crear una referencia a HTMLInputElement

    const handleImageDelete = (): void => {
        setSelectedImage(null)

        // Limpiar el valor del input file para permitir la selección de la misma imagen nuevamente
        if (fileInputRef.current != null) {
            fileInputRef.current.value = ''
        }
    }

    const handleImageUpload = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const file = event.target.files?.[0]
        setIsImageLoaded((event.target.files?.length ?? 0) > 0)

        if (file != null) {
            const reader = new FileReader()

            reader.onload = () => {
                setSelectedImage(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }
    const getFileFromPath = (path: any): any => {
        return new Promise((resolve, reject) => {
            const fileReader: any = new FileReader()
            fileReader.onload = () => {
                const file = new File(
                    [fileReader.result],
                    path.split('/').pop(),
                    { type: 'image/png' }
                )
                resolve(file)
            }
            fileReader.onerror = () => {
                // eslint-disable-next-line prefer-promise-reject-errors
                reject('Error al leer el archivo')
            }
            fetch(path)
                .then(async (response) => await response.blob())
                .then((blob) => fileReader.readAsArrayBuffer(blob))
                .catch(() => {
                    // eslint-disable-next-line prefer-promise-reject-errors
                    reject('Error al descargar el archivo')
                })
        })
    }

    const profileImageSrc = selectedImage ?? defaultImage

    const RegisterSchema = Yup.object().shape({
        fileName: Yup.mixed()
            .test(
                'fileSize',
                'El archivo es muy grande. El tamaño máximo permitido es 5MB',
                (value) => {
                    console.log(templateImage)

                    if (templateImage === null) {
                        if (value != null) return true // allow empty values
                        return value.size <= 5242880
                    }
                    return true
                }
            )
            .test(
                'fileType',
                'Solo se permiten archivos de imagen (jpg, png, jpeg)',
                (value) => {
                    if (templateImage === null) {
                        if (value != null) return true // allow empty values
                        return /(jpg|jpeg|png)$/i.test(value.type)
                    }
                    return true
                }
            ),
    })

    const handleCloseModal = (): void => {
        dispatch(closeAllModals())
    }

    return (
        <Formik
            initialValues={{ fileName: '' }}
            validationSchema={RegisterSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
                const baseURL: string =
                    import.meta.env.VITE_NODE_ENVIRONMENT === 'dev'
                        ? import.meta.env.VITE_BACKEND_URL_DEV
                        : import.meta.env.VITE_BACKEND_URL_PROD

                const token: string | null = localStorage.getItem('token')

                try {
                    const formData = new FormData()

                    if (templateImage !== null) {
                        formData.append('file', templateImage)
                    } else {
                        formData.append('file', values.fileName)
                    }

                    console.log(templateImage)

                    if (token != null) {
                        axios
                            .post(
                                `${baseURL}/UserData/UploadProfilePicture`,
                                formData,
                                {
                                    headers: {
                                        'Content-Type': 'multipart/form-data',
                                        Authorization: `Bearer ${token}`,
                                    },
                                }
                            )
                            .then((resp) => {
                                if (resp.status === 200) {
                                    const data = resp.data
                                    console.log(data)

                                    const profilePicture = data.data

                                    const payload = {
                                        modal: 'sessionProfile-step2',
                                        data: [],
                                    }
                                    dispatch(updateImageProfile(''))
                                    dispatch(updateImageProfile(profilePicture))
                                    dispatch(closeAllModals())
                                    dispatch(openModal(payload))
                                    resetForm()
                                }
                            })
                            .catch((error) => {
                                console.log(error)
                            })
                    } else {
                        alert('error')
                        console.log('el token es nulo')
                    }
                } catch (error) {
                    console.log(error)
                }
            }}
        >
            {({ errors, touched, setFieldValue, values }) => (
                <div className="profile-modal">
                    <div className="row text-center">
                        <div className="mt-3 mb-3">
                            <span className="font-title">
                                Cambia la imagen de perfil
                            </span>
                            <div className="border-bottom w-100 pt-3 p-0 m-0"></div>
                        </div>

                        <Form encType="multipart/form-data">
                            <div className="col-md-12 text-center lead">
                                <span>
                                    Selecciona una imagen para cargar
                                    <br />
                                    como foto de perfil
                                </span>
                            </div>

                            <div className="col-md-12 text-center mt-3">
                                <input
                                    type="file"
                                    name="fileName"
                                    id="fileName"
                                    value=""
                                    className="input-upload-profile-img"
                                    ref={fileInputRef}
                                    onChange={(event) => {
                                        handleImageUpload(event)

                                        /*  setTemplateImage(null) */
                                        setFieldValue(
                                            'fileName',
                                            event.currentTarget.files?.[0]
                                        )
                                    }}
                                />

                                <img
                                    src={profileImageSrc}
                                    className={`img-profile-upload ${
                                        isImageLoaded
                                            ? 'border-primary-profile'
                                            : ''
                                    }`}
                                    alt=""
                                    onClick={handleDefaultImageClick}
                                />

                                <div
                                    className="text-sm-start position-absolute container lead mx-4"
                                    style={{ fontSize: '1em' }}
                                >
                                    <span className="">
                                        {errors.fileName != null &&
                                        touched.fileName != null ? (
                                            <>
                                                <div className="d-flex container ">
                                                    <div
                                                        style={{
                                                            color: '#736E6E',
                                                            fontSize: '.8em',
                                                        }}
                                                    >
                                                        {errors.fileName}
                                                    </div>
                                                </div>
                                            </>
                                        ) : null}
                                    </span>
                                </div>
                            </div>

                            <div className="container mt-5 d-flex justify-content-center gap-4 pb-4">
                                <div
                                    className="pt-2 color-btn-action"
                                    style={{ width: '100px' }}
                                >
                                    <input
                                        type="file"
                                        name="fileName"
                                        id="fileName"
                                        value=""
                                        className="input-upload-profile"
                                        onChange={(event) => {
                                            handleImageUpload(event)

                                            setTemplateImage(null)
                                            setFieldValue(
                                                'fileName',
                                                event.currentTarget.files?.[0]
                                            )
                                        }}
                                    />
                                    <span className="">Cambiar</span>
                                </div>

                                <a
                                    className="btn color-btn-action"
                                    style={{ width: '100px' }}
                                    onClick={handleImageDelete}
                                >
                                    <span className="text-start">Eliminar</span>
                                </a>
                            </div>

                            <div className="border-bottom justify-content-center w-75 mx-5 pt-3 my-4"></div>

                            <div className="mx-1">
                                <IconList
                                    icon={'direction-down'}
                                    color={'#000'}
                                    size={'xs'}
                                />
                                <span className="lead">
                                    {' '}
                                    O elige una preterminada
                                </span>
                                <div className="col-md-12 mt-4 d-flex justify-content-center pb-4">
                                    <div className="col-md-3 mx-3 color-btn-pre ">
                                        <img
                                            src={avatar1}
                                            className="img-profile-pre"
                                            alt=""
                                            onClick={() => {
                                                const selectedImagePath =
                                                    avatar1
                                                setSelectedImage(
                                                    selectedImagePath
                                                )

                                                getFileFromPath(avatar1)
                                                    .then((avatarFile: any) => {
                                                        if (
                                                            fileInputRef.current !==
                                                            null
                                                        ) {
                                                            setTemplateImage(
                                                                avatarFile
                                                            )

                                                            fileInputRef.current.dispatchEvent(
                                                                new Event(
                                                                    'change',
                                                                    {
                                                                        bubbles:
                                                                            true,
                                                                    }
                                                                )
                                                            )
                                                        }
                                                    })
                                                    .catch((error: any) => {
                                                        console.error(error)
                                                    })
                                            }}
                                        />
                                    </div>

                                    <div className="col-md-3 mx-3 color-btn-pre ">
                                        <img
                                            src={avatar2}
                                            className="img-profile-pre"
                                            alt=""
                                            onClick={() => {
                                                const selectedImagePath =
                                                    avatar2
                                                setSelectedImage(
                                                    selectedImagePath
                                                )

                                                getFileFromPath(avatar2)
                                                    .then((avatarFile: any) => {
                                                        if (
                                                            fileInputRef.current !==
                                                            null
                                                        ) {
                                                            setTemplateImage(
                                                                avatarFile
                                                            )
                                                            // Limpiar el valor del input file
                                                            // Disparar el evento onChange para que se actualice el estado del formulario
                                                            fileInputRef.current.dispatchEvent(
                                                                new Event(
                                                                    'change',
                                                                    {
                                                                        bubbles:
                                                                            true,
                                                                    }
                                                                )
                                                            )
                                                        }
                                                    })
                                                    .catch((error: any) => {
                                                        console.error(error)
                                                    })
                                            }}
                                        />
                                    </div>

                                    <div className="col-md-3 mx-3 color-btn-pre ">
                                        <img
                                            src={avatar3}
                                            className="img-profile-pre"
                                            alt=""
                                            onClick={() => {
                                                const selectedImagePath =
                                                    avatar3
                                                setSelectedImage(
                                                    selectedImagePath
                                                )

                                                getFileFromPath(avatar3)
                                                    .then((avatarFile: any) => {
                                                        if (
                                                            fileInputRef.current !==
                                                            null
                                                        ) {
                                                            setTemplateImage(
                                                                avatarFile
                                                            )
                                                            // Limpiar el valor del input file
                                                            // Disparar el evento onChange para que se actualice el estado del formulario
                                                            fileInputRef.current.dispatchEvent(
                                                                new Event(
                                                                    'change',
                                                                    {
                                                                        bubbles:
                                                                            true,
                                                                    }
                                                                )
                                                            )
                                                        }
                                                    })
                                                    .catch((error: any) => {
                                                        console.error(error)
                                                    })
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div
                                className="border-bottom justify-content-center"
                                style={{ backgroundColor: '#736E6E' }}
                            ></div>

                            <div className="d-flex justify-content-center">
                                <div className="mt-2">
                                    <div className="mt-3 container">
                                        <a
                                            onClick={handleCloseModal}
                                            className="mx-5 submit-profile"
                                            style={{
                                                backgroundColor: 'transparent',
                                                fontSize: '1.2em',
                                                color: '#736E6E',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            Cancelar
                                        </a>
                                    </div>
                                </div>

                                <div
                                    className="justify-content-center"
                                    style={{
                                        height: '78px',
                                        borderRight: '1px solid #736E6E',
                                    }}
                                ></div>

                                <div className="">
                                    <button
                                        type="submit"
                                        className={`border-0 bg-white mt-4 ${
                                            isImageLoaded ? 'orange-button' : ''
                                        }`}
                                    >
                                        <button
                                            type="submit"
                                            className={`mx-5 submit-profile border-0 bg-transparent ${
                                                isImageLoaded
                                                    ? 'orange-button'
                                                    : ''
                                            }`}
                                            style={{
                                                fontSize: '1.2em',
                                            }}
                                        >
                                            Guardar
                                        </button>
                                    </button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            )}
        </Formik>
    )
}

export default ProfileModal
