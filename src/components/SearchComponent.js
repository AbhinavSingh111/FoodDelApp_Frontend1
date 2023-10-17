import { useState } from "react";

const SearchComponent = ({setNewList, origList})=>{
    const [searchText , setSearchText] = useState("");
    // console.log("search render")
        return (
        <div className="flex mt-5 item-center px-4 py-2 justify-center">
            <div className="search-bar">
            <input className="border border-solid border-orange-200 rounded-lg text-center py-2 shadow-lg hover:border-orange-300"
                type="text"
                placeholder="Search your food here"
                value={searchText}
                onChange={(e)=>{setSearchText(e.target.value)}}
            />
            </div>
            <div className="search-button">
                <button className="px-4 py-2 mx-4 rounded-lg bg-blue-300 items-center shadow-lg hover:bg-blue-400" id="s-btn" onClick={()=>{
                    if(searchText===""){
                        alert("Enter food name")
                     }
                     else{
                        const searchList = origList.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setNewList(searchList);
                        setSearchText("");
                     }
                    
                }}>Search</button>
            </div>
        </div>
    )
}

export default SearchComponent;