import IconList from "./IconList";

const SearchInput = () => {
  return (
    <form className="" role="search">
      <div className="input-search bg-white d-flex ">
        <div className="iconLeft p-4">
          <IconList icon="search" color="yellow" size="xs" />
        </div>

        <input
          type="text"
          className="input border-0 input-border-media"
          placeholder="Realiza una búsqueda"
        ></input>

        <button className="btn btn-search-input">
          <a href={"home"}>
            <IconList icon="notify" color="yellow" size="lg" />
          </a>
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
