import { Outlet, Navigate } from 'react-router-dom'
import Menu from '../components/Menu'

import PublicModals from '../pages/PublicModals'
import Footer from '../components/Footer'

interface PublicRouteI {
    isAuthenticated: any
}
const PublicRoute = ({ isAuthenticated }: PublicRouteI): JSX.Element => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!isAuthenticated) {
        return (
            <>
                <Menu />
                <Outlet />
                <PublicModals />
                <Footer />
            </>
        )
    } else {
        return <Navigate to={'/home'} />
    }
}

export default PublicRoute
