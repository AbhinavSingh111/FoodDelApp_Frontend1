import Sum from "../components/Sum";

test("Sum of 2 numbers" , ()=>{
    const res = Sum(3 , 4);
    expect(res).toBe(7);
});