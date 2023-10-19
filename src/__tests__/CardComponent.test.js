import CardComponent from "../components/CardComponent";
import resCardMock from "../mocks/resCardMock.json";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
it("should render Card comp " , ()=>{
    render(
        <CardComponent resObj={resCardMock} />
    );
    const namet = screen.getByText("Big Bowl");
    expect(namet).toBeInTheDocument();
});