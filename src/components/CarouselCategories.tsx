import CategoryItem from './CategoryItem'
import { useState, useEffect } from 'react'
import { getAllCategorysService } from '../services/Categorysservice'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const CarrouselCategories = (): JSX.Element => {
    const [categorys, setCategorys] = useState([])

    useEffect(() => {
        getAllCategorysService()
            .then((resp: any) => {
                setCategorys(resp.data.data)
            })
            .catch((error: any) => {
                console.error(error)
            })
    }, [])

    return (
        <>
            <div className="iconCategories border-bottom">
                <div className="d-flex justify-content-center pb-2">
                    <div className="col-md-1 mt-3 iconCategories__icon-svg">
                        <a href="/" className="" style={{ marginLeft: '30px' }}>
                            <svg
                                width="35"
                                height="51"
                                viewBox="0 0 37 51"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18.5004 50.625C23.2246 50.625 27.7553 48.7483 31.0958 45.4078C34.4363 42.0673 36.3129 37.5367 36.3129 32.8125C36.3129 31.0328 35.904 29.3154 35.3783 27.6956C35.265 27.3463 34.8228 27.2449 34.5582 27.4996C30.878 31.0422 28.0601 32.8125 26.1004 32.8125C35.39 16.5354 30.5872 9.36482 17.008 0.155821C16.6585 -0.081187 16.1845 0.196153 16.2086 0.61773C16.8457 11.7606 9.38896 16.9286 6.29769 19.8379C3.69784 22.2834 1.89262 25.4535 1.11611 28.9373C0.339592 32.421 0.62759 36.0578 1.94276 39.3759C3.25793 42.694 5.53961 45.5405 8.49196 47.5463C11.4443 49.5521 14.9312 50.6247 18.5004 50.625ZM20.1867 8.43312C27.8841 14.9644 27.9221 20.0397 21.9751 30.4589C20.1677 33.6247 22.4548 37.5625 26.1004 37.5625C27.7344 37.5625 29.3874 37.0875 31.1331 36.1494C30.6156 38.104 29.6515 39.9117 28.3167 41.4304C26.9818 42.949 25.3127 44.137 23.4406 44.9009C21.5686 45.6648 19.5447 45.9837 17.5285 45.8325C15.5122 45.6812 13.5586 45.064 11.8215 44.0294C10.0843 42.9948 8.61106 41.571 7.51769 39.8703C6.42431 38.1695 5.74068 36.2381 5.52063 34.2282C5.30057 32.2183 5.5501 30.1848 6.24955 28.2877C6.94901 26.3906 8.07931 24.6819 9.55144 23.2959C9.85069 23.0156 11.3683 21.669 11.4348 21.6096C12.4418 20.7071 13.2707 19.9067 14.0901 19.0304C17.0113 15.9001 19.1108 12.4279 20.1843 8.43312H20.1867Z"
                                    fill="#F9A823"
                                />
                            </svg>
                        </a>
                    </div>
                    <div className="col-md-8 mt-2 container-carousel-phone caruselServices mx-5 d-flex">
                        {categorys?.map((category: any) => (
                            <CategoryItem
                                key={category.uid}
                                id={category.uid}
                                name={category.description}
                                image={category.imgIconApp}
                            />
                        ))}
                    </div>

                    <div className="col-md-2 d-md-block d-none mt-2">
                        <select
                            className="form-select d-flex my-3 mx-5 px-4"
                            name=""
                            id=""
                            style={{
                                border: '1px solid black',
                                borderRadius: '10px',
                                background: 'transparent',
                                height: '45px',
                                width: '135px',
                            }}
                        >
                            <option value="">Filtrar por ˅</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarrouselCategories
