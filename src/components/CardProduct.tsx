import IconList from './IconList'

const CardProduct = (): JSX.Element => {
    return (
        <div className="cardProduct mx-3 my-3 ">
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="../Images/eat-card.png"
                            className="d-block w-100 img-product"
                            alt="..."
                            style={{ borderRadius: '25px 25px 0px 0px' }}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="./Images/fruit.png"
                            className="d-block w-100 img-product"
                            alt="..."
                            style={{ borderRadius: '25px 25px 0px 0px' }}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="./Images/eat-carrusel.png"
                            className="d-block w-100 img-product"
                            alt="..."
                            style={{ borderRadius: '25px 25px 0px 0px' }}
                        />
                    </div>

                    <div className="row d-flex mx-1 p-1">
                        <div className="col position-relative text-start p-2">
                            <div className="btn-tooltip p-1"> Taquiza</div>
                        </div>

                        <div className="col my-2 text-center position-absolute">
                            <div className="favorite-card">
                                <a href="#" className="">
                                    <IconList
                                        icon={'favorite'}
                                        color={'#fff'}
                                        size={'2x'}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="pt-2 pb-3 container-description">
                <img
                    src="./Images/symbol-list.png"
                    className="position-absolute d-flex mx-3"
                    style={{ width: '30px' }}
                    alt=""
                />

                <div className="card-description">
                    <a href="#">
                        <span className="pb-2 mx-2 text-start row">
                            Lorem ipsum dolor sit amet, sed do consectet
                        </span>
                    </a>
                </div>

                <div
                    className="pb-2 text-start mx-5 px-2 list-text-card"
                    style={{ color: '#333333' }}
                >
                    <span className="mx-2">Tacos {'El tamal'}</span>
                    <svg
                        className=""
                        width="15"
                        height="15"
                        viewBox="0 0 101 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M98.1982 49.3101C94.0373 44.8549 92.8987 38.3181 95.3034 32.6906C98.0318 26.3052 93.9022 19.0645 87.0739 18.2632C81.0569 17.5566 76.0342 13.2909 74.3027 7.416C72.3373 0.748998 64.5758 -2.11017 58.8369 1.71872C53.7791 5.09235 47.2226 5.09235 42.1648 1.71872C36.4259 -2.11017 28.6643 0.750314 26.6989 7.416C24.9675 13.2909 19.9448 17.5579 13.9277 18.2632C7.10082 19.0645 2.97114 26.3052 5.69826 32.6906C8.10302 38.3181 6.96433 44.8549 2.80345 49.3101C-1.91767 54.3665 -0.483913 62.5993 5.66187 65.7164C11.0771 68.4624 14.3554 74.211 13.9979 80.3319C13.5924 87.2765 19.9188 92.6515 26.6054 91.0396C32.4977 89.6199 38.659 91.8896 42.2714 96.8119C46.3699 102.396 54.6305 102.396 58.729 96.8119C62.3413 91.8909 68.5027 89.6199 74.395 91.0396C81.0816 92.6501 87.408 87.2765 87.0024 80.3319C86.645 74.211 89.9233 68.4637 95.3385 65.7164C101.483 62.5993 102.918 54.3665 98.1969 49.3101H98.1982ZM76.1706 39.4865L46.8989 74.1557C46.3101 74.8531 45.4613 75.2702 44.5552 75.3057C44.5123 75.307 44.4707 75.3083 44.4279 75.3083C43.5673 75.3083 42.7406 74.9636 42.1297 74.3452L25.0039 57.0099C23.7352 55.7257 23.7352 53.6429 25.0039 52.3574C26.2726 51.0719 28.3303 51.0732 29.6003 52.3574L44.2407 67.1769L71.2298 35.2116C72.3958 33.83 74.447 33.6682 75.8119 34.8484C77.1767 36.0287 77.3366 38.105 76.1706 39.4865Z"
                            fill="#F9A823"
                        />
                    </svg>
                </div>

                <div className="container container-btn">
                    <div className="d-flex">
                        <div
                            className="flex-sm-row"
                            style={{ fontSize: '1.1em' }}
                        >
                            <span className="mx-5 px-1 price-product">
                                $ <b>+1,000 MXN</b>
                            </span>
                        </div>
                        <div className="col d-flex justify-content-end flex-sm-row flex-md-row spacing-product">
                            <button className="form-control btn-product mx-3">
                                <span>Ver perfil</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProduct
