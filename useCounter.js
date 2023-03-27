import { useState } from "react"

export const useCounter = ( initalValue = 10) => {

    const [counter, setCounter] = useState(initalValue)

    const increment = ( value = 1) => {
        setCounter( (current) => current + value);
    }

    const decrement = ( value = 1 ) => {
        setCounter( (current) => current - value);
    }

    const reset = () => {
        setCounter( 10 );
    }

    return{
        counter,
        increment,
        decrement,
        reset
    }
}