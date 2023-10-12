import SearchComponent from "./SearchComponent";
const Shimmer = ()=>{
    return (
        <div className="body">
                <div className="body-search">
                    <SearchComponent />
                </div>
                <div className="fltr">
                    <button className="fltr-btn">Filter Top</button>
                </div>
                <div className="body-card">
                    <div className="shimmer-comp" id="shimmer">
                        <div id="shimmer-cd"></div>
                        <div id="shimmer-cd"></div>
                        <div id="shimmer-cd"></div>
                        <div id="shimmer-cd"></div>
                        <div id="shimmer-cd"></div>
                        <div id="shimmer-cd"></div>
                        <div id="shimmer-cd"></div>
                        <div id="shimmer-cd"></div>
                        <div id="shimmer-cd"></div>
                        <div id="shimmer-cd"></div>
                    </div>
                </div>
        </div>
    )
}

export default Shimmer;