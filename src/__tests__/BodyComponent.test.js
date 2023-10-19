import { fireEvent, render , screen} from "@testing-library/react";
import BodyComponent from "../components/BodyComponent";
import MOCK_DATA from "../mocks/bodyMockData.json";
import {act} from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })

});
it("should render body component with search input of burger" , async ()=>{
    await act(async () => render(
    <BrowserRouter>
        <BodyComponent />
    </BrowserRouter>));

    // assertion

    const cardsBeforeSearch = screen.getAllByTestId("rescard");
    expect(cardsBeforeSearch.length).toBe(9);
    const sbtn = screen.getByRole("button",{name:"Search"})
    const sip = screen.getByTestId("sbx");
    fireEvent.change(sip , {target :{value:"burger"}});
    fireEvent.click(sbtn);
    const cardsAfterSearch = screen.getAllByTestId("rescard");
    expect(cardsAfterSearch.length).toBe(1);
    // screen should load 1 card
    // console.log(sip)
    // expect(sip).toBeInTheDocument();
});

it("should render with top rated restaurant" , async ()=>{
    await act(async ()=>{
        render(
            <BrowserRouter>
                <BodyComponent />
            </BrowserRouter>
        )
    });

    const fbtn = screen.getByRole("button",{name:"Filter Top"});
    const cardsBF = screen.getAllByTestId("rescard");
    expect(cardsBF.length).toBe(9);
    fireEvent.click(fbtn);
    const cardsAF = screen.getAllByTestId("rescard");
    expect(cardsAF.length).toBe(7);
});