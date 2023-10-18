import useRestaurantMenu from "../../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import React, { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";
// hook from react router dom to fetch params passed to link/path
import { useParams } from "react-router-dom";


const RestaurantMenu = ()=>{
    const [showIndex , setShowIndex] = useState(0);
    const {resId} = useParams();
    // const [resInfo , setResInfo] = useState(null);
    // using custom hook to get data from
    const resInfo = useRestaurantMenu(resId);
    console.log(resInfo)

    if(resInfo===null){
        return <Shimmer />
    }
    const {name , id , cloudinaryImageId,locality,costForTwoMessage , avgRating} = resInfo?.data?.cards[0]?.card?.card?.info;
    const {restaurantId,deliveryTime} = resInfo?.data?.cards[0]?.card?.card?.info.sla;
    const dishList2 = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    const dishList1 = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    const categories = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


    console.log("acc data" , categories);
    // console.log('dishList', dishList)
    return(
        <>
        <div className="w-6/12 text-center mx-auto mt-5 bg-pink-200 p-5 shadow-lg">
            <h3 className="text-slate-600 font-bold text-2xl">{name}</h3>
            <h5 className="text-slate-600 font-bold text-xl">{costForTwoMessage}</h5>
            <h5 className="text-slate-600 font-semibold text-xl">{locality}</h5>
            <h5 className="text-slate-600 font-semibold text-xl">{avgRating}</h5>
            <h5 className="text-slate-600 font-semibold text-xl">{deliveryTime}</h5>
        </div>
        <div className="text-center mt-5 p-5 ">
            {
                categories.map((category , index) => (

                <RestaurantCategory key={category?.card?.card?.title} 
                data={category?.card?.card}
                showItems = {showIndex === index ? true : false}
                setShowIndex = {()=>setShowIndex(index)}
                
                />))
            }
            {/* {
            dishList1.map((dish)=>(
            <li key={dish?.card?.info?.id}>{dish?.card?.info?.name || "Name not available"} -{" "} {dish?.card?.info?.defaultPrice/100 || dish?.card?.info?.price/100 || "Price not available" }
            </li>)
            )
            } */}

        </div>
        </>
    )

}


export default RestaurantMenu;