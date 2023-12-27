import { LIVE_DATA_LINK } from "./constants";
import { useState,useEffect } from "react";


const useBodyComponent = ()=>{
    // Attach the event listener to the window's resize event
   
    // using useState hook to bind data and ui
    const [resList ,  setResList] = useState(null);
    const [filteredRes , setFilteredRes] = useState([]);
    const [deviceWidth , setDeviceWidth] = useState(window.innerWidth)
    const handleWindowResize = ()=>{
       setDeviceWidth(window.innerWidth);
      }
    window.addEventListener('resize', handleWindowResize);


    const fetchData = async ()=>{   
        
        if(deviceWidth < 768){
            const mobileData = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=26.876313600000024&lng=81.02215679999999");
            const mobJson = await mobileData.json();
            const alterData = mobJson?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
            setResList(alterData)
            setFilteredRes(alterData)
        }
        else{
            const liveData = await fetch(LIVE_DATA_LINK);
            const json = await liveData.json();

            for (let index = 0; index < json.data.cards.length; index++) {
                const test =
                  json?.data?.cards[index]?.card?.card?.gridElements?.infoWithStyle
                    ?.restaurants;
        
                if (test === undefined) {
                  continue;
                }
                setResList(test);
                setFilteredRes(test);
                break;

            }
        
        }
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return {resList,filteredRes, deviceWidth ,setFilteredRes , setResList};
}


export default useBodyComponent;