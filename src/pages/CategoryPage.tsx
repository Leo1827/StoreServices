import { useNavigate, useParams } from 'react-router-dom'
import CarrouselCategories from '../components/CarouselCategories'
import SectionCard from '../components/SectionCard'
import { useAppSelector } from '../hooks/reduxHook'
import { useEffect, useState } from 'react'

const CategoryPage = (): JSX.Element => {
    const [categoryItem, setCategoryItem] = useState<any>({})
    const params = useParams()
    const { catalog } = useAppSelector((state) => state.categorys)
    const myCategory = catalog.filter(
        (category: any) => category.uid === params.id
    )
    const navigate = useNavigate()

    useEffect(() => {
        if (myCategory.length > 0) {
            setCategoryItem(myCategory[0])
        } else {
            navigate(-1)
        }
    }, [])

    console.log(categoryItem)

    return (
        <div className="eatCategory" style={{ backgroundColor: '#F5F0ED' }}>
            <CarrouselCategories />

            <div className="container-fluid mt-5">
                <div className="d-flex justify-content-center">
                    <div className="col-md-11">
                        <img
                            src={categoryItem.imgCoverLandscape}
                            alt=""
                            className="w-100 img-eat-barr"
                        />
                    </div>

                    <div className="">
                        <img
                            src={categoryItem.imgCoverLandscape}
                            alt=""
                            className="img-eat-barra-phone"
                        />
                    </div>
                </div>

                <div className="col-md-12 mt-5 row">
                    <span className="mb-2 text-eat-barr">
                        Explora los servicios de Comida y barras
                    </span>

                    <div className="d-flex ">
                        <div className="d-flex gap-5 container container-eat-phone">
                            {categoryItem?.masterSubCategoryList?.map(
                                (item: any, i: number) => (
                                    <div
                                        className="row border-eatcategory "
                                        key={i}
                                    >
                                        <div className="">
                                            <img
                                                src={item.imgCover}
                                                className="img-fluid p-1 my-3 img-category-page"
                                                alt=""
                                            />
                                            <div className="section-toltip ">
                                                <span className="title-services-eat d-flex mt-2 justify-content-center">
                                                    {item.description}
                                                </span>
                                                <div
                                                    className="row mx-2 btn-snak-container"
                                                    style={{ width: '200px' }}
                                                >
                                                    {item.masterSubCategorySubList?.map(
                                                        (
                                                            subitem: any,
                                                            i: number
                                                        ) => (
                                                            <button
                                                                className="btn-snack container mt-3"
                                                                key={i}
                                                            >
                                                                <img
                                                                    src={
                                                                        subitem.imgIconApp
                                                                    }
                                                                    alt=""
                                                                    className="mx-2"
                                                                    width={
                                                                        '20px'
                                                                    }
                                                                />
                                                                <span className="">
                                                                    {
                                                                        subitem.description
                                                                    }
                                                                </span>
                                                            </button>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-5" id="home">
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

export default CategoryPage
