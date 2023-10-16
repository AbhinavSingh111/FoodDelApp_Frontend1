import SearchComponent from "./SearchComponent";
import CardComponent from "./CardComponent";
import data from "../../utils/mockData";
import { LIVE_DATA_LINK } from "../../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useBodyComponent from "../../utils/useBodyComponent";
import useOnlineStatus from "../../utils/useOnlineStatus";
import NoInternet from "./NoInternet";

const BodyComponent = ()=>{
    // using useState hook to bind data and ui
    // const [resList , setResList] = useState([]); 
    // const [filteredRes , setFilteredRes] = useState([]);
    // useEffect(()=>{
    //     fetchData();
    // },[]);
    // console.log("body rendered");
    // const fetchData = async ()=>{
    //     const liveData = await fetch(LIVE_DATA_LINK);
    //     const json = await liveData.json();
    //     const trimmedData = json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    //     console.log(trimmedData);
    //     setResList(trimmedData);
    //     setFilteredRes(trimmedData);
    // };

    const {resList , filteredRes , setFilteredRes , setResList} = useBodyComponent();

    //  using custom hook to check internet connection
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false){
        return (
            <>
            <NoInternet />
            </>
            
        )
    }

    // using ternary opn
    return resList.length < 1 ?(    
            <Shimmer /> 

        ):(
            <>
            <div className="body">
                <div className="body-search">
                    <SearchComponent setNewList={setFilteredRes} origList={resList} />
                </div>
                <div className="fltr">
                    <button className="fltr-btn" onClick={()=>{
                    const newList = resList.filter((res)=>res.info.avgRating>4);
                    setFilteredRes(newList);
                }}>Filter Top</button>
                </div>
                <div className="body-card">
                    
                    {
                        // we should use uuid as key rather than index , react oficially tells us not to.
                        // because if the order of element gets changed because of a new addition of element
                        // or some other reason the react might get confuse as to which property beloongs
                        // to which component and this will affect performance negatively
                        filteredRes.map((restaurant)=>(
                        <Link id="link" key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                            <CardComponent resObj={restaurant}/>
                        </Link>
                        ))
                            
                    }
                    
                </div>

            </div>
            </>
        
    )
}

export default BodyComponent;