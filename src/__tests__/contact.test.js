import { render,screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

test('should load contact us comp', () => { 
    render(<Contact />);
    const heading = screen.getByRole("heading");
    // assertion
    expect(heading).toBeInTheDocument();
 });

 test('should load button in contact us comp', () => { 
    render(<Contact />);
    const button = screen.getByRole("button");
    // assertion
    expect(button).toBeInTheDocument();
 });
 
 test('should load button text in contact us comp', () => { 
    render(<Contact />);
    const btext = screen.getByText("Send");
    // assertion
    expect(btext).toBeInTheDocument();
 });

 it('should load button in contact us comp', () => { 
    render(<Contact />);
    const ptext = screen.getByPlaceholderText("name");
    // assertion
    expect(ptext).toBeInTheDocument();
 });

//  to get multiple elements
test('should load all input boxes in contact us comp', () => { 
    render(<Contact />);
    const itext = screen.getAllByRole("textbox");
    // assertion
    expect(itext.length).toBe(2);
 }); 

