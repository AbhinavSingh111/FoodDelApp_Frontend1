const SearchComponent = ()=>{
    return (
        <div className="search">
            <div className="search-bar">
            <input
                type="text"
                placeholder="Search your food here"
            />
            </div>
            <div className="search-button" >
                <button id="s-btn">Search</button>
            </div>
        </div>
    )
}

export default SearchComponent;