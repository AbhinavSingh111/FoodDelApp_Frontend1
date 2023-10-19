import FastDeliveryComponent from "../components/CardComponent";
import resCardMock from "../mocks/resCardMock.json";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardComponent from "../components/CardComponent";
it("should render fast delivery Card comp " , ()=>{
    render(
        <FastDeliveryComponent resObj = {resCardMock} />
        
    );
    
    // const lab = screen.getByText("Fast Delivery");
    // // console.log(lab);
    // expect(lab).toBeInTheDocument();
});