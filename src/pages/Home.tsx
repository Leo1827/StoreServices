import ButtonCategories from '../components/ButtonCategories'
import CarouselCategories from '../components/CarouselCategories'
import SectionCard from '../components/SectionCard'

const Home = (): JSX.Element => {
    return (
        <>
            <div style={{ backgroundColor: '#F8F4F3' }} className="home-scroll">
                <CarouselCategories />

                <div className="py-6">
                    <ButtonCategories />
                </div>

                <div
                    className="mx-md-2 px-md-4 px-sm-4 my-5"
                    id="home"
                >
                    <SectionCard
                        title={'comida y barra.'}
                        prevTitle={'Lo mas popular de '}
                    />
                </div>
            </div>
        </>
    )
}

export default Home
