interface CategoryItemI {
    image: string
    name: string
    id: string
}
const CategoryItem = ({ image, name, id }: CategoryItemI): JSX.Element => {
    return (
        <a href={id} className="categoriItem">
            <div
                className="border-0 row mt-2"
                style={{
                    width: '120px',
                    height: '80px',
                    cursor: 'pointer',
                }}
            >
                <div className="d-flex justify-content-center categoriItem__containerImg">
                    <img
                        src={image}
                        alt=""
                        className="categoriItem__containerImg-img "
                    />
                </div>

                <div className="d-flex justify-content-center text-center p-0">
                    <span
                        className=""
                        style={{ fontSize: '.7em', color: '#727171' }}
                    >
                        {name}
                    </span>
                </div>
            </div>
        </a>
    )
}

export default CategoryItem
