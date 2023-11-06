import { CART_SHIMMER_IMAGE } from "../../utils/constants";
const CartShimmer = ()=>{
    return (
        <div  className="text-center p-2 m-2 h-screen border-gray border-2 rounded-lg shadow-md bg-slate-50 relative ">

                <p className="absolute t-0 l-0  mt-2 p-2 w-full text-slate-500 text-2xl">Your plate is empty...</p>

                <img className="h-[100%]" src={CART_SHIMMER_IMAGE}/>
    
        </div>
    )
}

export default CartShimmer;