import { useState } from "react";

export default function Counter() {

    // [0] - value
    // [1] - setter method
    let [count, setCount] = useState(0);

    const plus = () => {
        console.log("Plus");

        //++count;              // page does not update
        setCount(count + 1);    // page update content
    }
    const minus = () => {
        console.log("Minus");

        //--count;
        setCount(count - 1);
    }

    return (
        <>
            <h2>Counter: {count}</h2>
            <button onClick={plus}>Plus</button>
            <button onClick={minus}>Minus</button>
        </>
    )
}