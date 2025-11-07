import { Link } from 'react-router-dom'
import { useAppSelector } from '../hooks/reduxHook'

interface itemCategory {
    imgBg: string
    description: string
    uid: string
}
const ButtonCategories = (): JSX.Element => {
    const { catalog } = useAppSelector((state) => state.categorys)
    return (
        <div className="buttonCategories mt-5 d-md-block d-none">
            <div className="mx-5 px-3 my-3">
                <span className="title-categories ">
                    Explora las categorías
                </span>
            </div>
            <>
                <div className="mx-5">
                    <div className="">
                        {catalog?.map((item: itemCategory, i: number) => (
                            <Link
                                className="buttonCategories__item col"
                                to={`/category/${item.uid}`}
                                key={i}
                            >
                                <img
                                    src={item.imgBg}
                                    alt=""
                                    className="buttonCategories__item-img"
                                />

                                <p className="buttonCategories__item-text mx-2">
                                    {item.description}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </>
        </div>
    )
}

export default ButtonCategories
