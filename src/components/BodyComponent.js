import SearchComponent from "./SearchComponent";
import CardComponent from "./CardComponent";
import data from "../../utils/mockData";

const BodyComponent = ()=>{
    return (
        <>
        <div className="body">
            <div className="body-search">
                <SearchComponent />
            </div>
            <div className="body-card">
                {
                    // we should use uuid as key rather than index , react oficially tells us not to.
                    // because if the order of element gets changed because of a new addition of element
                    // or some other reason the react might get confuse as to which property beloongs
                    // to which component and this will affect performance negatively
                    data.map((restaurant)=>(<CardComponent key={restaurant.info.id} resObj={restaurant}/>))
                        
                }
                
            </div>

        </div>
        </>
        
    )
}

export default BodyComponent;