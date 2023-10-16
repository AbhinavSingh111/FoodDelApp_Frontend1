import { useState, useEffect } from "react";
import {LIVE_MENU_LINK} from "./constants";

const useRestaurantMenu = (resId)=>{
    const [resInfo , setResInfo] = useState(null);
    // const {resId} = props;
    console.log(resId)

    const fetchInfo = async ()=>{
        const data =  await fetch(LIVE_MENU_LINK+resId);
        const json = await data.json();
        setResInfo(json);
    }

    useEffect(()=>{
       fetchInfo();
    },[]);


    return resInfo;
}

export default useRestaurantMenu;