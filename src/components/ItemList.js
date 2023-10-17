import { CARD_IMG_LINK } from "../../utils/constants";
const ItemList = ({items})=>{
    return (
        <div>
            {
                items.map((item)=>(
                    <div key={item.card.info.id} className="p-2 m-2 border-gray border-b-2 text-left justify-between">
                       
                            <div >
                                <img src={CARD_IMG_LINK+item.card.info.imageId} className="w-14 " />
                                <span className="text-md text-slate-900 block">{item.card.info.name}</span>
                                <span className="text-sm text-slate-800 block">₹ {item.card.info.price/100}</span>
                            </div>
                
                            <p className="text-xs text-slate-600">{item.card.info.description}</p>
                         
                
                      
                    </div>

                ))
            }
        </div>
    )

}

export default ItemList;