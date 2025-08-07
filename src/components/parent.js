import Child from "./child";

const { useState } = require("react")

const Parent = () => {
    const [count, setCount] = useState(0);
    const userName = "Hiep";

    return (
        <div>
            <Child count = {count} userName = {userName} />
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}

export default Parent;