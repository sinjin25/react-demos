import {useEffect, useState} from 'react'

export default function StaleClosure() {
    let [randomVal, setrandomVal] = useState(0)
    let [derivedCorrect, setDerivedCorrect] = useState(null)
    let [derivedWrong, setDerivedWrong] = useState(null)

    useEffect(() => {
        setDerivedCorrect(randomVal)
        setDerivedWrong(randomVal)
    }, [])

    const badFunction = () => {
        setrandomVal(curr => {
            const newVal = curr+1
            setDerivedCorrect(newVal)
            return newVal
        })
        setDerivedWrong(randomVal)
    }

    return (<>
        <div>Random val is {randomVal}</div>
        <div>Correct derived val is {derivedCorrect}</div>
        <div>Wrong derived val is {derivedWrong}</div>
        <button onClick={badFunction}>Increase value (and cause desync)</button>
    </>)
}