import { useState } from "react"

export const useCounter = (initValue=10) =>{
    
    const [counter, setcounter] = useState(initValue);

    const increment = () =>{
        setcounter(counter+1);
    }

    const decrement = ()  => {
        setcounter(counter-1);
    }

    const reset = () => {
        setcounter(initValue);
    }
    
    return {
        counter,
        increment,
        decrement,
        reset
    }
}