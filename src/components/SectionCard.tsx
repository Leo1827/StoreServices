import CardProduct from './CardProduct'

const SectionCard = ({ title, prevTitle, style }: any): JSX.Element => {
    return (
        <div className="sectionCard my-5">
            <div className="d-flex my-2">
                <span
                    className="my-2 sectionCard__title-section"
                    style={{ fontSize: '2.1em', marginLeft: '2rem' }}
                >
                    {prevTitle}
                    <strong>{title}</strong>
                </span>

                <button className="sectionCard__btn-plus" style={style}>
                    Ver más
                </button>
            </div>

            <div className="container px-4 py-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                </div>
            </div>

        </div>
    )
}

export default SectionCard
