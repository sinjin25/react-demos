import makeObserver from "../js/observer";
import { debounceFirst } from "../js/debounce";
import { useEffect, useRef, useState } from "react";

export default function InfiniteScroll({onTrigger, timeout = 2000}) {
    const [debounceHandler, setDebounceHandler] = useState()
    /* const dbRef = useRef(debounceHandler) */
    const eleRef = useRef(null)

    useEffect(() => {
        console.log('idk', onTrigger)
        setDebounceHandler(() => {
            return onTrigger
        })
    }, [onTrigger])

    useEffect(() => {
        if (eleRef === null) return
        const obs = makeObserver()
        obs.observe(eleRef.current)
        return (() => {
            obs.disconnect()
        })
    }, [])

    return (<div ref={eleRef} onClick={debounceHandler}>Hello</div>)
}