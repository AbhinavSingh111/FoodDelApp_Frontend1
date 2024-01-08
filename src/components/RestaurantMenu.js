import useRestaurantMenu from "../../utils/useRestaurantMenu";
import MenuShimmer from "./MenuShimmer";
import React, { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";
// hook from react router dom to fetch params passed to link/path
import { useParams } from "react-router-dom";
import useBodyComponent from "../../utils/useBodyComponent";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  // const [resInfo , setResInfo] = useState(null);
  // using custom hook to get data from
  const resInfo = useRestaurantMenu(resId);
  
  const { deviceWidth } = useBodyComponent();
  const [menuWidth, setMenuWidth] = useState(deviceWidth);

  const handleWindowResize = ()=>{
    setMenuWidth(window.innerWidth);
  }
  window.addEventListener('resize', handleWindowResize);

  if (resInfo === null) {
    return <MenuShimmer />;
  }
  let info = {};

  for (let i = 0; i < resInfo.data.cards.length; i++) {
    info = resInfo?.data?.cards[i]?.card?.card?.info;
    if (info === undefined) {
      continue;
    }
    break;
  }
  const { name, locality, costForTwoMessage, avgRating } = info;
  const { deliveryTime } = info?.sla;

  let categories;
  if (menuWidth < 768) {
    categories =
      resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
  } else {
    categories =
      resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
  }

  return categories===undefined ? (<MenuShimmer />):(
    <>
      <div className="w-6/12 text-center mx-auto mt-5 bg-pink-200 p-5 shadow-lg">
        <h3 className="text-slate-600 font-bold text-2xl">{name}</h3>
        <h5 className="text-slate-600 font-bold text-xl">
          {costForTwoMessage}
        </h5>
        <h5 className="text-slate-600 font-semibold text-xl">{locality}</h5>
        <h5 className="text-slate-600 font-semibold text-xl">{avgRating}</h5>
        <h5 className="text-slate-600 font-semibold text-xl">{deliveryTime}</h5>
      </div>
      <div className="text-center mt-5 p-5 ">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={showIndex === index ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
        {/* {
            dishList1.map((dish)=>(
            <li key={dish?.card?.info?.id}>{dish?.card?.info?.name || "Name not available"} -{" "} {dish?.card?.info?.defaultPrice/100 || dish?.card?.info?.price/100 || "Price not available" }
            </li>)
            )
            } */}
      </div>
    </>
  );
};

export default RestaurantMenu;
