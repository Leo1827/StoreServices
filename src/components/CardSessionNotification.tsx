import { Link } from 'react-router-dom'

const CardSessionNotification = ({
    title,
    text,
    img,
    style,
}: any): JSX.Element => {
    return (
        <div className="cardSessionNotification" style={style}>
            <div className="vh-100 w-75 container-fluid">
                <div className="d-flex vh-100">
                    <div
                        className="text-center container d-flex justify-content-center align-items-center"
                        style={{ paddingBottom: '100px' }}
                    >
                        <div className="row ">
                            <div className="">
                                <h1 style={{ fontWeight: '650' }}>{title}</h1>
                            </div>
                            <div className="container my-4 d-flex justify-content-center text-container">
                                <p className="letter-notification">{text}</p>
                            </div>
                            <div className="d-flex justify-content-center">
                                <Link
                                    to={'/'}
                                    className="d-flex justify-content-center"
                                >
                                    {img}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardSessionNotification
