import { clearCart } from "../../redux/cartSlice";
import CartShimmer from "./CartShimmer";
import ItemList from "./ItemList";
import { useSelector,useDispatch } from "react-redux";


const Cart =  ()=>{

    const cartItems = useSelector((store)=>store.cart.items);
    const dispatchActionClear = useDispatch();

    const handleClearCart = ()=>{
        dispatchActionClear(clearCart());
    }
    return (
        <div className="text-center m-4 p-4 min-h-screen">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                {cartItems.length===0 ?(null):(<button className="px-4 py-2 mx-4 rounded-lg bg-blue-300 w-20 shadow-lg hover:bg-blue-400"
                 onClick={handleClearCart}>Clear
                </button>)}
                {cartItems.length===0 ? (<CartShimmer />):(<ItemList items={cartItems}/>)}
            </div>
        </div>
    )

}

export default Cart;