import SearchInputServices from '../SearchInputServices'
const Step1 = () => {
    return (
        <div className="">
            <div className="text-center ">
                <div className="justify-content-center">
                    <h1 className="pt-5">Encuentra lo que necesitas</h1>
                </div>

                <div className="mt-4">
                    <div className="mt-5 mx-4 px-5">
                        <div className="input-search-services">
                            <div className="search-services ">
                                <div className="border-0">
                                    {/* <Input icon={"search"} placeholder={"Realiza una búsqueda"} type={"text"} classCustom="input-search-services border-0 row" /> */}
                                    <SearchInputServices />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 pt-3 d-flex mx-5 gap-2">
                        <div className="mx-3">
                            <span
                                className="text-start mx-2 bg-gray-200 p-1 rounded px-3 lead"
                                style={{ fontSize: '1.4em' }}
                            >
                                Tags populares
                            </span>

                            <button className="btn tag-service mx-2 text-center">
                                <a href="#" className="lead ">
                                    Café
                                </a>
                            </button>

                            <button className="btn tag-service mx-2">
                                <a href="#" className="lead">
                                    15 años
                                </a>
                            </button>

                            <button className="btn tag-service mx-2">
                                <a href="#" className="lead">
                                    Bodas
                                </a>
                            </button>

                            <button className="btn tag-service mx-2">
                                <a href="#" className="lead">
                                    Fotografía
                                </a>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center mt-2">
                    <div className="border-bottom mx-5 w-50">
                        <p className="pt-5 lead ">EXPLORA LAS CATEGORÍAS</p>
                    </div>
                </div>

                <div className="mt-3 p-3 d-flex justify-content-center gap-4">
                    <div className="btn mb-5">
                        <a href="#">
                            {/* TODO: svg gigante que enviaste */}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Step1
