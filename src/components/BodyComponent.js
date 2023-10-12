import SearchComponent from "./SearchComponent";
import CardComponent from "./CardComponent";
import data from "../../utils/mockData";
import { useState } from "react";

const BodyComponent = ()=>{
    // using useState hook to bind data and ui
    const [resList , setResList] = useState(data); 
    return (
        <>
        <div className="body">
            <div className="body-search">
                <SearchComponent />
            </div>
            <div className="fltr">
                <button className="fltr-btn" onClick={()=>{
                const newList = resList.filter((res)=>res.info.avgRating>4);
                setResList(newList);
            }}>Filter Top</button>
            </div>
            <div className="body-card">
                {
                    // we should use uuid as key rather than index , react oficially tells us not to.
                    // because if the order of element gets changed because of a new addition of element
                    // or some other reason the react might get confuse as to which property beloongs
                    // to which component and this will affect performance negatively
                    resList.map((restaurant)=>(<CardComponent key={restaurant.info.id} resObj={restaurant}/>))
                        
                }
                
            </div>

        </div>
        </>
        
    )
}

export default BodyComponent;