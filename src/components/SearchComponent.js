import { useState } from "react";

const SearchComponent = ({setNewList, origList})=>{
    const [searchText , setSearchText] = useState("");
    console.log("search render")
        return (
        <div className="search">
            <div className="search-bar">
            <input
                type="text"
                placeholder="Search your food here"
                value={searchText}
                onChange={(e)=>{setSearchText(e.target.value)}}
            />
            </div>
            <div className="search-button">
                <button id="s-btn" onClick={()=>{
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