import React from "react"
import { useState } from "react";

export default () => {
    const [count, setCount] = useState(0);

    return(
        <div>
            <div>Count = {count}</div>
            <button onClick={() => setCount(count + 1)}> Add One </button>
        </div>
    );
}