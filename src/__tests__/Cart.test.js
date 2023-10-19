import { render , screen , fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import HeadingComponent from "../components/HeadingComponent";
import RestaurantMenu from "../components/RestaurantMenu";
import {act} from "react-dom/test-utils";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/menuMockData.json";
import Cart from "../components/Cart";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("should load restaurant menu component and change the cart header",async ()=>{
    await act(async ()=>{
        render(
            <BrowserRouter>
            <Provider store={appStore}>
                <HeadingComponent />
                <RestaurantMenu />
                <Cart />
            </Provider>

            </BrowserRouter>
            
        )
    });

    const accHeader = screen.getByText("Veg Classic Pizza (15)");
    fireEvent.click(accHeader);
    expect(screen.getAllByTestId("foodItem").length).toBe(15);
    const addbt = screen.getAllByRole("button",{name:"Add +"});
    fireEvent.click(addbt[0]);
    fireEvent.click(addbt[1]);
    const htxt = screen.getByText("Cart (2)");
    expect(htxt).toBeInTheDocument();
    expect(screen.getAllByTestId("foodItem").length).toBe(17);
    fireEvent.click(screen.getByRole("button",{name:"Clear"}));
    expect(screen.getAllByTestId("foodItem").length).toBe(15);
    expect(screen.getByText("Cart is empty!")).toBeInTheDocument();

    
    
});