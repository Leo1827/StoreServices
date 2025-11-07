import CarouselCategories from './CarouselCategories'
import SectionCard from './SectionCard'

const EatCategory = (): JSX.Element => {
    return (
        <div className="eatCategory" style={{ backgroundColor: '#F5F0ED' }}>
            <CarouselCategories />

            <div className="container-fluid mt-5">
                <div className="d-flex justify-content-center">
                    <div className="col-md-11">
                        <img
                            src="./Images/eat-categories.png"
                            alt=""
                            className="w-100 img-eat-barr"
                        />
                    </div>

                    <div className="">
                        <img
                            src="./Images/coverCategorias.svg"
                            alt=""
                            className="img-eat-barra-phone"
                        />
                    </div>
                </div>

                <div className="col-md-12 mt-5 row">
                    <span className="mb-2 w-75 mx-2 text-eat-barr">
                        Explora los servicios de Comida y barras
                    </span>

                    <div className="d-flex">
                        <div className="d-flex gap-5 container container-eat-phone">
                            <div className="row border-eatcategory p-2 justify-content-center">
                                <div className="row">
                                    <img
                                        src="./Images/cokies.png"
                                        className="img-fluid my-3"
                                        style={{ height: '110px' }}
                                        alt=""
                                    />
                                    <div className="section-toltip">
                                        <span className="title-services-eat d-flex justify-content-center">
                                            Bebida
                                        </span>
                                        <div className="row mx-5">
                                            <button className="btn-snack container mt-3">
                                                <img
                                                    src="./Images/barra-de-cafe.svg"
                                                    alt=""
                                                    className="mx-2"
                                                />
                                                <span className="mx-2">
                                                    Barra de café{' '}
                                                </span>
                                            </button>

                                            <button className="btn-snack container mt-3">
                                                <img
                                                    src="./Images/2_cocteleria.svg"
                                                    alt=""
                                                    className="mx-2"
                                                />
                                                <span className="mx-2">
                                                    Coctelería{' '}
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row border-eatcategory p-2 justify-content-center">
                                <div className="row">
                                    <img
                                        src="./Images/cookie.svg"
                                        className="img-fluid my-3"
                                        style={{ height: '110px' }}
                                        alt=""
                                    />
                                    <div className="section-toltip">
                                        <span className="title-services-eat d-flex justify-content-center">
                                            Comida
                                        </span>
                                        <div className="row mx-5">
                                            <button className="btn-snack container mt-3">
                                                <img
                                                    src="./Images/barra-de-snacks.svg"
                                                    alt=""
                                                    className=""
                                                />
                                                <span className="mx-2">
                                                    Barra de snaks{' '}
                                                </span>
                                            </button>

                                            <button className="btn-snack container mt-3">
                                                <img
                                                    src="./Images/baquete.svg"
                                                    alt=""
                                                    className="mx-2"
                                                />
                                                <span className="mx-2">
                                                    Banquete{' '}
                                                </span>
                                            </button>
                                            <button className="btn-snack container mt-3">
                                                <img
                                                    src="./Images/catering.svg"
                                                    alt=""
                                                    className="mx-2"
                                                />
                                                <span className="mx-2">
                                                    Catering{' '}
                                                </span>
                                            </button>
                                            <button className="btn-snack container mt-3">
                                                <img
                                                    src="./Images/food-trucks.svg"
                                                    alt=""
                                                    className="mx-2"
                                                />
                                                <span className="mx-2">
                                                    Food trucks{' '}
                                                </span>
                                            </button>

                                            <button className="btn-snack container mt-3">
                                                <img
                                                    src="./Images/taquizaa.svg"
                                                    alt=""
                                                    className="mx-2"
                                                />
                                                <span className="mx-2">
                                                    Taquiza{' '}
                                                </span>
                                            </button>

                                            <button className="btn-snack container mt-3">
                                                <img
                                                    src="./Images/veggie.svg"
                                                    alt=""
                                                    className="mx-2"
                                                />
                                                <span className="mx-2">
                                                    Veggie{' '}
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row border-eatcategory p-2 justify-content-center">
                                <div className="row">
                                    <img
                                        src="./Images/fruit.svg"
                                        className="img-fluid my-3"
                                        style={{ height: '110px' }}
                                        alt=""
                                    />
                                    <div className="section-toltip">
                                        <span className="title-services-eat d-flex justify-content-center">
                                            Bebida
                                        </span>
                                        <div className="row mx-5">
                                            <button className="btn-snack container mt-3">
                                                <img
                                                    src="./Images/mesa-de-postres.svg"
                                                    alt=""
                                                    className="mx-1"
                                                />
                                                <span className="mx-2">
                                                    Mesa de postres{' '}
                                                </span>
                                            </button>

                                            <button className="btn-snack container mt-3">
                                                <img
                                                    src="./Images/pasteles.svg"
                                                    alt=""
                                                    className="mx-2"
                                                />
                                                <span className="mx-2">
                                                    Pasteles{' '}
                                                </span>
                                            </button>

                                            <button className="btn-snack container mt-3">
                                                <img
                                                    src="./Images/postres-veggie.svg"
                                                    alt=""
                                                    className="mx-2"
                                                />
                                                <span className="mx-2">
                                                    Postres veggie{' '}
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" mt-5" id="home">
                    <SectionCard
                        title={'Lo más popular'}
                        prevTitle={''}
                        style={{ display: 'none' }}
                    />

                    <SectionCard
                        title={''}
                        prevTitle={''}
                        style={{ display: 'none' }}
                    />
                </div>
            </div>
        </div>
    )
}

export default EatCategory
