import ItemList from "./ItemList";

const RestaurantCategory = ({data})=>{
    return (
        <div className="">
            {/* Header */}
            <div className="w-6/12 bg-pink-200 shadow-lg p-4  mx-auto my-4 ">
                <div className="flex justify-between">
                    <span className="font-bold text-slate-500 text-lg">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span>
                        ▽
                    </span>
                </div>
                {/* Accordian body */}
                <ItemList items={data.itemCards} />

            </div>
            

        </div>
    )

}

export default RestaurantCategory;