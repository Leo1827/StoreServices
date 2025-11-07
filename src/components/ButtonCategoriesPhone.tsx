import { Link } from 'react-router-dom'

const ButtonCategoriesPhone = (): JSX.Element => {
    return (
        <div className="buttonCategoriesPhone">
            <div className="container margin-tablet">
                <div className="my-3">
                    <span className="title-categories-phone m-4 h2">
                        Explora las categorías
                    </span>
                </div>
                <div className="mx-2 container-tablet">
                    <div className="d-flex">
                        <div>
                            <Link className="" to={'/eat-category'}>
                                <span className="text-categories-phone">
                                    Comida y barra
                                </span>
                                <img src="../Images/comidaBarra.svg" alt="" />
                            </Link>
                        </div>
                        <div>
                            <Link className="" to={'/'}>
                                <span className="text-photo-phone">
                                    Foto y video
                                </span>
                                <img
                                    src="../Images/photoVideo-category-phone.png"
                                    alt=""
                                />
                            </Link>
                        </div>
                    </div>

                    <div className="d-flex">
                        <div>
                            <Link className="" to={'/'}>
                                <span className="text-eat-phone">Música</span>
                                <img
                                    src="../Images/music-category-phone.png"
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div>
                            <Link className="" to={'/'}>
                                <span className="text-amb-phone">Ambiente</span>
                                <img
                                    src="../Images/amb-category-phone.png"
                                    alt=""
                                />
                            </Link>
                        </div>
                    </div>

                    <div className="d-flex">
                        <div>
                            <Link className="" to={'/'}>
                                <span className="text-dom-phone">
                                    Domicilio
                                </span>
                                <img src="../Images/amb-amb-phone.png" alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ButtonCategoriesPhone
