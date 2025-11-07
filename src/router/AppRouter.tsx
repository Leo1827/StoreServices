import { Route, Routes, Navigate } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook'
import Home from '../pages/Home'
import LandingPages from '../pages/LandingPages'
import HomeServices from '../components/HomeServices'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import VerifyEmail from '../pages/register/VerifyEmail'
import VerifiedEmail from '../pages/VerifiedEmail'
import Recoverypassword from '../components/CardSessionNewPassword'
import ProfileImg from '../components/ProfileImg'
import NotificationNewPassword from '../components/CardSessionNotification'
import { useEffect } from 'react'
import { refreshTokenService } from '../services/AuthenticationServices'
import { login, setUserStatus } from '../store/slices/auth/authSlice'
import { CatalogService } from '../services/CatalogService'
import { setDataCategoris } from '../store/slices/catalog/catalogSlice'
import CategoryPage from '../pages/CategoryPage'

const AppRouter = (): JSX.Element => {
    const userData = useAppSelector((state) => state.auth)

    const isAuthenticated = userData.userStatus
    const catalogService: CatalogService = new CatalogService()
    const dispatch = useAppDispatch()
    const imageValid = (
        <svg
            width="101"
            height="101"
            viewBox="0 0 101 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_1144_1392)">
                <rect
                    x="8"
                    y="5"
                    width="84.1456"
                    height="84.1456"
                    rx="42.0728"
                    fill="#F9A823"
                />
            </g>
            <path
                d="M77.3125 46.2793L59.3424 28.3092C58.378 27.3448 56.8259 27.3251 55.8766 28.2744C54.9314 29.2196 54.9427 30.7717 55.9113 31.7403L67.1734 43.0024C67.6237 43.4527 68.2319 43.7111 68.8629 43.7174L71.6389 43.7453C71.8239 43.7471 71.9851 43.8833 72.008 44.0644C72.0311 44.2707 71.8688 44.4499 71.6627 44.4436L26.38 43.9897C25.0256 43.9761 23.9389 45.0629 23.9566 46.4131C23.9702 47.7675 25.079 48.8762 26.4291 48.8856L71.6992 49.3436C71.8843 49.3455 72.0454 49.4816 72.0683 49.6627C72.0914 49.869 71.9292 50.0482 71.723 50.042L68.9302 50.014C68.2993 50.0077 67.6961 50.2539 67.2547 50.6953L56.2162 61.7339C55.271 62.6791 55.2823 64.2311 56.2509 65.1997C57.2153 66.164 58.7674 66.1838 59.7168 65.2344L77.3301 47.621C77.6966 47.2546 77.6906 46.6574 77.3167 46.2835L77.3125 46.2793Z"
                fill="white"
            />
            <defs>
                <filter
                    id="filter0_d_1144_1392"
                    x="0.135922"
                    y="0.281554"
                    width="99.8737"
                    height="99.8738"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="3.14563" />
                    <feGaussianBlur stdDeviation="3.93204" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1144_1392"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1144_1392"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    )

    const imageInvalid = (
        <svg
            width="101"
            height="101"
            viewBox="0 0 101 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_1144_1398)">
                <rect
                    x="8"
                    y="5"
                    width="84.1456"
                    height="84.1456"
                    rx="42.0728"
                    fill="#5726F9"
                />
            </g>
            <path
                d="M77.3125 46.2793L59.3424 28.3092C58.378 27.3448 56.8259 27.3251 55.8766 28.2744C54.9314 29.2196 54.9427 30.7717 55.9113 31.7403L67.1734 43.0024C67.6237 43.4527 68.2319 43.7111 68.8629 43.7174L71.6389 43.7453C71.8239 43.7471 71.9851 43.8833 72.008 44.0644C72.0311 44.2707 71.8688 44.4499 71.6627 44.4436L26.38 43.9897C25.0256 43.9761 23.9389 45.0629 23.9566 46.4131C23.9702 47.7675 25.079 48.8762 26.4291 48.8856L71.6992 49.3436C71.8843 49.3455 72.0454 49.4816 72.0683 49.6627C72.0914 49.869 71.9292 50.0482 71.723 50.042L68.9302 50.014C68.2993 50.0077 67.6961 50.2539 67.2547 50.6953L56.2162 61.7339C55.271 62.6791 55.2823 64.2311 56.2509 65.1997C57.2153 66.164 58.7674 66.1838 59.7168 65.2344L77.3301 47.621C77.6966 47.2546 77.6906 46.6574 77.3167 46.2835L77.3125 46.2793Z"
                fill="white"
            />
            <defs>
                <filter
                    id="filter0_d_1144_1398"
                    x="0.135922"
                    y="0.281554"
                    width="99.8737"
                    height="99.8738"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="3.14563" />
                    <feGaussianBlur stdDeviation="3.93204" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1144_1398"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1144_1398"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    )

    useEffect(() => {
        const xToken: string | null = localStorage.getItem('xToken')
        catalogService
            .getAllCategorys()
            .then((resp: any) => {
                console.log(resp)

                dispatch(setDataCategoris(resp.data.data))
            })
            .catch((error: any) => {
                console.error(error)
            })
        if (xToken != null) {
            refreshTokenService()
                .then((resp: any) => {
                    if (resp.status === 200) {
                        localStorage.setItem(
                            'token',
                            resp.headers.authorization
                        )
                        localStorage.setItem('xToken', resp.headers['x-token'])
                        const userData = resp.data.data
                        const payloadUserData = {
                            email: userData.email,
                            imageProfile: userData.profilePicturePath,
                            emailVerified: userData.emailVerified,
                            firstLastName: userData.firstLastName,
                        }

                        dispatch(login(payloadUserData))
                        dispatch(setUserStatus(userData.userStatus))
                    }
                })
                .catch((error: any) => {
                    alert('error in the router')
                    console.error(error)
                })
        }
    }, [])

    return (
        <Router>
            <Routes>
                <Route
                    element={<PublicRoute isAuthenticated={isAuthenticated} />}
                >
                    {/* Aqui van las rutas publicas */}
                    <Route path="/" element={<Home />} />
                    <Route path="landingPage" element={<LandingPages />} />
                    <Route path="home-services" element={<HomeServices />} />
                    <Route path="category/:id" element={<CategoryPage />} />
                    <Route path="verifiedEmail" element={<VerifiedEmail />} />
                    <Route
                        path="recovery-password"
                        element={<Recoverypassword />}
                    />
                    <Route path="*" element={<Navigate to={'/home'} />} />
                    <Route
                        path="notification-valid-password"
                        element={
                            <NotificationNewPassword
                                title={'¡Genial!'}
                                text={
                                    'La contraseña se cambió exitosamente. Inicia sesión para acceder.'
                                }
                                img={imageValid}
                            />
                        }
                    />
                    <Route
                        path="notification-invalid-password"
                        element={
                            <NotificationNewPassword
                                title={'¡Oh no!'}
                                text={
                                    'Se ha producido un error. Intenta más tarde..'
                                }
                                img={imageInvalid}
                            />
                        }
                    />
                </Route>
                <Route
                    element={<PrivateRoute isAuthenticated={isAuthenticated} />}
                >
                    {/* Aqui van las rutas privadas */}
                    <Route path="/home" element={<Home />} />
                    <Route path="/home-services" element={<HomeServices />} />
                    <Route path="/register-data" element={<ProfileImg />} />
                    <Route path="category/:id" element={<CategoryPage />} />
                    <Route
                        path="/registerData-profile"
                        element={<ProfileImg />}
                    />
                    <Route path="/verify-email" element={<VerifyEmail />} />
                    <Route path="*" element={<Navigate to={'/home'} />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter
