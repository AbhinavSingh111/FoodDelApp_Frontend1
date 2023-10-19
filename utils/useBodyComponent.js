import { LIVE_DATA_LINK } from "./constants";
import { useState,useEffect } from "react";


const useBodyComponent = ()=>{
    // using useState hook to bind data and ui
    const [resList ,  setResList] = useState(null);
    const [filteredRes , setFilteredRes] = useState([]);

    const fetchData = async ()=>{
        const liveData = await fetch(LIVE_DATA_LINK);
        const json = await liveData.json();
        const trimmedData = json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setResList(trimmedData)
        setFilteredRes(trimmedData)
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return {resList,filteredRes ,setFilteredRes , setResList};
}

export default useBodyComponent;