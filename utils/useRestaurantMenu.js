import { useState, useEffect } from "react";
import {LIVE_MENU_LINK} from "./constants";
import useBodyComponent from "./useBodyComponent";


const useRestaurantMenu = (resId)=>{
    const [resInfo , setResInfo] = useState(null);
 
    const fetchInfo = async ()=>{
        const data =  await fetch(LIVE_MENU_LINK+resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json);
    }

    useEffect(()=>{
       fetchInfo();
    },[]);


    return resInfo;
}

export default useRestaurantMenu;