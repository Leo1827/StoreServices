import IconList from './IconList'

const SearchInputServices = () => {
    return (
        <form className="d-flex p-3" role="search">
                <div className="iconLeft d-flex p-2 mx-3">
                    <IconList icon='search' color='#000' size='1x' />
                </div>
            
                <input type="text" className="input-services border-0 container" placeholder="Realiza una búsqueda"></input>
        </form>
    )
}

export default SearchInputServices