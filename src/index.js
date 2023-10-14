import React from "react";
import ReactDOM from "react-dom/client";
import BodyComponent from "./components/BodyComponent";
import FooterComponent from "./components/FooterComponent";
import HeadingComponent from "./components/HeadingComponent";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

// setting upp routing
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = ()=>{
    return (
    <div id="app">
        <HeadingComponent />
        <BodyComponent />
        <FooterComponent />
    </div>
    )

}

// creating routing config

const AppRoute = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        errorElement:<Error />,
    },
    {
        path:"/about",
        element:<About />,
       
    },
    {
        path:"/contact",
        element:<Contact />,
    }
]);

root.render(<RouterProvider router={AppRoute} />)