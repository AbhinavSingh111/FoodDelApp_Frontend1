import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data , showItems , setShowIndex})=>{
    const [show , setShow] = useState(false);
    const handleClick = ()=>{
        // we will pass this state from parent comp to this comp , making it a controlled comp
    //    setShowItems(!showItems);
      
    //    this will control , if one is opened others must close
        setShowIndex();
        // this state will control , click expand and collapse
        setShow(!showItems);
       
        
    }
    return (
        <div className="">
            {/* Header */}
            <div className="w-6/12 bg-pink-200 shadow-lg p-4  mx-auto my-4 ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-slate-500 text-lg">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span>
                        ▽
                    </span>
                </div>
                {/* Accordian body */}
                {showItems && show && <ItemList items={data.itemCards} />}

            </div>
            

        </div>
    )

}

export default RestaurantCategory;