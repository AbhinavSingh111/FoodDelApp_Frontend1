import React from "react";
import ReactDOM from "react-dom/client";
import BodyComponent from "./components/BodyComponent";
import FooterComponent from "./components/FooterComponent";
import HeadingComponent from "./components/HeadingComponent";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

// setting upp routing
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = ()=>{
    return (
    <div id="app">
        <HeadingComponent />
        <Outlet />
        <FooterComponent />
    </div>
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
                path:"/restaurants/:resId",
                element:<RestaurantMenu />,
               
            },
        ],
        errorElement:<Error />,
    },
    
]);

root.render(<RouterProvider router={AppRoute} />)