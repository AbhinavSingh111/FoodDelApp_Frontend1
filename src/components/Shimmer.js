import SearchComponent from "./SearchComponent";
const Shimmer = ()=>{
    return (
        <div className="body">
                <div className="body-search">
                    <SearchComponent />
                </div>
                <div className="flex mt-5 item-center px-4 py-2 justify-center">
                    <button className="px-4 py-2 mx-4 rounded-lg bg-blue-300 items-center">Filter Top</button>
                </div>
                <div className="body-card">
                    <div className="flex flex-wrap justify-center" id="shimmer">
                        <div className="bg-pink-100 rounded-lg p-5 m-5 w-80 h-80"></div>
                        <div className="bg-pink-100 rounded-lg p-5 m-5 w-80 h-80"></div>
                        <div className="bg-pink-100 rounded-lg p-5 m-5 w-80 h-80"></div>
                        <div className="bg-pink-100 rounded-lg p-5 m-5 w-80 h-80"></div>
                        <div className="bg-pink-100 rounded-lg p-5 m-5 w-80 h-80"></div>
                        <div className="bg-pink-100 rounded-lg p-5 m-5 w-80 h-80"></div>
                        <div className="bg-pink-100 rounded-lg p-5 m-5 w-80 h-80"></div>
                        <div className="bg-pink-100 rounded-lg p-5 m-5 w-80 h-80"></div>
                        <div className="bg-pink-100 rounded-lg p-5 m-5 w-80 h-80"></div>
                        <div className="bg-pink-100 rounded-lg p-5 m-5 w-80 h-80"></div>
                    </div>
                </div>
        </div>
    )
}

export default Shimmer;