import { Navigate, Outlet, useLocation } from 'react-router-dom'
import PrivateModals from '../pages/PrivateModals'
import ProfileImg from '../components/ProfileImg'
import Footer from '../components/Footer'

interface privateRoute {
    isAuthenticated: null | string
}
const PrivateRoute = ({ isAuthenticated }: privateRoute): JSX.Element => {
    const location = useLocation()

    const path = location.pathname
    const tokenData: string | null = localStorage.getItem('token')
    if (isAuthenticated === 'Active' && tokenData != null) {
        if (path === '/home') {
            return (
                <>
                    <Outlet />
                    <PrivateModals />
                    <Footer />
                </>
            )
        } else {
            return <Navigate to={'/home'} />
        }
    } else if (isAuthenticated === 'Pending' && tokenData != null) {
        if (path === '/register-data')
            return (
                <>
                    <ProfileImg />
                    <PrivateModals />
                    <Footer />
                </>
            )
        return <Navigate to={'/register-data'} />
    }
    return <Navigate to={'/'} />
}

export default PrivateRoute
