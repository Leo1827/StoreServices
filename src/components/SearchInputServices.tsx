import IconList from './IconList'

const SearchInputServices = () => {
    return (
        <form className="d-flex p-2 border-1 border-[#F9A823] rounded-full" role="search">
                <div className="iconLeft d-flex p-2 mx-3 my-2 ">
                    <IconList icon='search' color='#000' size='1x' />
                </div>
            
                <input 
                    type="text" 
                    className="input-services border-0 container p-2 
                            focus:outline-none focus:ring-0 focus:border-transparent outline-none"
                    placeholder="Realiza una búsqueda"
                />

        </form>
    )
}

export default SearchInputServices