import React, { lazy , Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import BodyComponent from "./components/BodyComponent";
import FooterComponent from "./components/FooterComponent";
import HeadingComponent from "./components/HeadingComponent";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import userContext from "../utils/userContext";
// setting upp routing
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

// connecting redux store to app
import { Provider } from "react-redux";
import appStore from "../redux/appStore";
import Cart from "./components/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Grocery = lazy(()=>import("./components/Grocery"));




const AppLayout = ()=>{
    const [userName , setUSerName] = useState("");
    const {loggedUser} = userContext;
    // dummy userdata fetch op
    useEffect(()=>{
        const data = {
            loggedUser : "Sanji",
        }
        setUSerName(data.loggedUser)
    },[])


    return (
        // we wrap the part of app we want access of redux store to\

        <Provider store={appStore}>
        <userContext.Provider value={{loggedUser:"Brooke"}}>
            <div id="app">
                {/* wrapping only head in prider , hence only head will get the passed data , rest comp will get default context data */}
                <userContext.Provider value={{loggedUser:userName}}>
                    <HeadingComponent />
                </userContext.Provider>
                <Outlet />
                <FooterComponent />
            </div>
        </userContext.Provider>
        </Provider>
        
    )

}

// creating routing config

const AppRoute = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        // using child routing
        children:[
            {
                path:"/",
                element:<BodyComponent />,
               
            },
            {
                path:"/about",
                element:<About />,
               
            },
            {
                path:"/contact",
                element:<Contact />,
            },
            {
                path:"/cart",
                element:<Cart />,
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<Shimmer />}><Grocery /></Suspense>,
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu />,
               
            },
        ],
        errorElement:<Error />,
    },
    
]);

root.render(<RouterProvider router={AppRoute} />)