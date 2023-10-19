import { fireEvent, render , screen} from "@testing-library/react"
import HeadingComponent from "../components/HeadingComponent";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../redux/appStore";
import "@testing-library/jest-dom";

it("should render login button in heading comp" , ()=>{
    render(
        <BrowserRouter>
        // since it also uses link , we wrap it in Browser Router
        <Provider store={appStore}>
        // since this uses redux we wrap it in provider
            <HeadingComponent />
        </Provider>
        </BrowserRouter>
    );
    const hbt = screen.getByText("Login");
    expect(hbt).toBeInTheDocument();
});
it("should render login button in heading comp" , ()=>{
    render(
        <BrowserRouter>
        // since it also uses link , we wrap it in Browser Router
        <Provider store={appStore}>
        // since this uses redux we wrap it in provider
            <HeadingComponent />
        </Provider>
        </BrowserRouter>
    );
    const hbt = screen.getByRole("button");
    expect(hbt).toBeInTheDocument();
});
it("should render login button in heading comp" , ()=>{
    render(
        <BrowserRouter>
        // since it also uses link , we wrap it in Browser Router
        <Provider store={appStore}>
        // since this uses redux we wrap it in provider
            <HeadingComponent />
        </Provider>
        </BrowserRouter>
    );
    const hbt = screen.getByRole("button",{name:"Login"});
    expect(hbt).toBeInTheDocument();
});

it("should render heading comp with cart item 0" , ()=>{
    render(
        <BrowserRouter>
        // since it also uses link , we wrap it in Browser Router
        <Provider store={appStore}>
        // since this uses redux we wrap it in provider
            <HeadingComponent />
        </Provider>
        </BrowserRouter>
    );
    const ct = screen.getByText("Cart (0)");
    expect(ct).toBeInTheDocument();
});

it("should render heading comp with cart item " , ()=>{
    render(
        <BrowserRouter>
        // since it also uses link , we wrap it in Browser Router
        <Provider store={appStore}>
        // since this uses redux we wrap it in provider
            <HeadingComponent />
        </Provider>
        </BrowserRouter>
    );
    // using regex
    const ct = screen.getByText(/Cart/);
    expect(ct).toBeInTheDocument();
});

it("should render heading comp and change login to logout on click" , ()=>{
    render(
        <BrowserRouter>
        // since it also uses link , we wrap it in Browser Router
        <Provider store={appStore}>
        // since this uses redux we wrap it in provider
            <HeadingComponent />
        </Provider>
        </BrowserRouter>
    );
    // to work with events import fireEvent
    const libt = screen.getByRole("button" , {name: "Login"});
    fireEvent.click(libt);
    const lobt = screen.getByRole("button" , {name: "Logout"});
    expect(lobt).toBeInTheDocument();
});