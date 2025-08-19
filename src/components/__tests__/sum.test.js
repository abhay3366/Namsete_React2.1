import { sum } from "../sum";

test("sum function calculate the sum of two function",()=>{
    const result=sum(3,4);

    expect(result).toBe(7)
})