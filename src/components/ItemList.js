import { CARD_IMG_LINK } from "../../utils/constants";
const ItemList = ({items})=>{
    return (
        <div>
            {
                items.map((item)=>(
                    <div key={item.card.info.id} className="p-2 m-2 border-gray border-b-2 text-left flex justify-between">
                        <div className="w-9/12" >
                            <div className="py-2" >
                                
                                <span className="text-md text-slate-900 block ">{item.card.info.name}</span>
                                <span className="text-sm text-slate-800 block ">₹ {item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                            </div>
                            <p className="text-xs text-slate-600">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-4">
                            <div className="absolute">
                                <button className="px-2 py-1 bg-green-400 shadow-md mt-[70px] mx-10 rounded-md">Add +</button>
                            </div>
                            <img src={CARD_IMG_LINK+item.card.info.imageId} className="w-[300px]" />
                        </div>
                    </div>

                ))
            }
        </div>
    )

}

export default ItemList;