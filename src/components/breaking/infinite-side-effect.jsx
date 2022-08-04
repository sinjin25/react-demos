import { useState } from "react"

let timerId = 0
const Timer = () => {
    const [count, setCount] = useState(0)

    timerId++
    if (timerId < 15) {
        setInterval(() => {
            console.log(`Timer ${timerId} start`)
            setCount(count + 1)
        }, 1000)
    }
    return (<>
    <div>{count}</div>
    <div>Timer ids created: {timerId}</div>
    </>)
}

export default function InfiniteSideEffect() {
    return (<div>
        <h2></h2>
        <Timer />
    </div>)
}