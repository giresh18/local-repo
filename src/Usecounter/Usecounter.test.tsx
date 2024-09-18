import { renderHook,act } from "@testing-library/react";
import { useCounter } from "./Usecounter";


describe("useCounter",() => {
    test("should render initial value", () =>{
        const { result } =renderHook(useCounter);
        expect(result.current.count).toBe(0);
    })
    test('should render the value with ten',() =>{
      const {result} =  renderHook(useCounter,{
            initialProps:{
                initialCount:10
            }
        })
        expect(result.current.count).toBe(10);
    })
    test("should icrement the count",()=>{
        const {result} =renderHook(useCounter)
        act( () =>result.current.increment())
        expect(result.current.count).toBe(1)
    })
    test("should decrement the count",()=>{
        const {result} =renderHook(useCounter)
        act( () =>result.current.decrement())
        expect(result.current.count).toBe(-1)
    })
})