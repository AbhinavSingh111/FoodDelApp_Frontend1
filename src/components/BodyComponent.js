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
import { FastDeliveryComponent } from "./FastDeliveryComponent";

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

    const FastCard = FastDeliveryComponent(CardComponent);

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
    return resList === null ?(    
            <Shimmer /> 

        ):(
            <>
            <div className="body">
                <div data-testid="searchInput" className="body-search">
                    <SearchComponent setNewList={setFilteredRes} origList={resList} />
                </div>
                <div className="flex mt-5 item-center px-4 py-2 justify-center">
                    <button className="px-4 py-2 mx-4 rounded-lg bg-blue-300 items-center shadow-lg hover:bg-blue-400" onClick={()=>{
                    const newList = resList.filter((res)=>res.info.avgRating>4);
                    setFilteredRes(newList);
                }}>Filter Top</button>
                </div>
                <div className="flex flex-wrap justify-center">
                    
                    {
                        // we should use uuid as key rather than index , react oficially tells us not to.
                        // because if the order of element gets changed because of a new addition of element
                        // or some other reason the react might get confuse as to which property beloongs
                        // to which component and this will affect performance negatively
                        filteredRes.map((restaurant)=>(
                        <Link id="link" key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                                {restaurant.info.sla.deliveryTime < 30 ? (<FastCard resObj={restaurant} />) : (<CardComponent resObj={restaurant}/>)}
                        </Link>
                        ))
                            
                    }
                    
                </div>

            </div>
            </>
        
    )
}

export default BodyComponent;