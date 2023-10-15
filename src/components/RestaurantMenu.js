import { useEffect,useState } from "react";
import { LIVE_MENU_LINK } from "../../utils/constants";
import Shimmer from "./Shimmer";
import React from "react";

// hook from react router dom to fetch params passed to link/path
import { useParams } from "react-router-dom";


const RestaurantMenu = ()=>{
    const [resInfo , setResInfo] = useState(null);
    const {resId} = useParams();
    
    const fetchMenu = async ()=>{
        const data =  await fetch(LIVE_MENU_LINK+resId);
        const json = await data.json();
        setResInfo(json);
        // console.log(resInfo)
    }

    useEffect(()=>{
        fetchMenu();
    },[]);

    if(resInfo===null){
        return <Shimmer />
    }
    const {name , id , cloudinaryImageId,locality,costForTwoMessage , avgRating} = resInfo?.data?.cards[0]?.card?.card?.info;
    const {restaurantId,deliveryTime} = resInfo?.data?.cards[0]?.card?.card?.info.sla;
    const dishList2 = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    const dishList1 = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    // console.log('dishList', dishList)
    return(
        <div className="res-menu">
            <h3 className="res-name">{name}</h3>
            <h5 className="res-price-for-2">{costForTwoMessage}</h5>
            <h5 className="res-rating">{locality}</h5>
            <h5 className="res-time">{avgRating}</h5>
            <h5 className="res-area">{deliveryTime}</h5>
            <h4>Recommend Dishes</h4>

            {
            dishList1.map((dish)=>(
            <li key={dish?.card?.info?.id}>{dish?.card?.info?.name || "Name not available"} -{" "} {dish?.card?.info?.defaultPrice/100 || dish?.card?.info?.price/100 || "Price not available" }
            </li>)
            )
            }




        </div>
    )

}


export default RestaurantMenu;