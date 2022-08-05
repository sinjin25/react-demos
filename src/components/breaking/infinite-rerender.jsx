import { useState } from "react"

export default function InfiniteRerender() {
    console.log('comp start')
    const [num, setNum] = useState([])
    const [renders, setRenders] = useState(0)

    const breakIt = async () => { // both of these work
        console.log('changed nums')
        setRenders(v => v+1)
        setNum([1,2,3])
    }
    if (renders < 20) /* breakIt() */ setRenders(v => v + 1) && setNum([...num, num.length])
    const out = (<div>
        <h2>Inf rerender</h2>
        <h2>Rerenders: {renders}</h2>
        {
            num.map((i, index) => {
            return (<span key={index}>{i}</span>)
            })
        }
    </div>)

    console.log('comp finish')
    return out
}