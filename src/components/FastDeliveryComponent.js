
// defining higher order component , takes a comp and returns enhanced version of it
export const FastDeliveryComponent = (CardComponent) =>{
    // returning a component
    return (props)=>{
        return(
        <div>
        <label className="absolute bg-gray-200 text-blacl m-2 p-2 rounded-lg shadow-lg">Fast Delivery</label>
        <CardComponent {...props} />
        </div>
        )
    }

}


// ... takes all the props and passes down