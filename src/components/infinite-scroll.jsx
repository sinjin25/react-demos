/* import makeObserver from "../js/observer"; */
/* import { debounceFirst } from "../js/debounce"; */
import { useEffect, useRef, useState } from "react";

const bugCheck = () => { console.log('you are calling a stale value' )}

export default function InfiniteScroll({onTrigger, timeout = 0}) {
    const [debounceHandler, setDebounceHandler] = useState(() => bugCheck)
    const [eleVisible, setEleVisible] = useState()
    const [armed, setArmed] = useState(true)
    const eleRef = useRef()
    
    useEffect(() => {
        setDebounceHandler(() => {
            return onTrigger
        })
    }, [onTrigger])

    useEffect(() => {
        const createObs = () => {
            const observer = new IntersectionObserver((entries) => {
                const entry = entries[0]
                setEleVisible(entry.isIntersecting)
                if (!entry.isIntersecting) return
                observer.unobserve(entry.target)
            })
            observer.observe(eleRef.current)
            return observer
        }
        const obs = createObs()
        return () => {
            // ensure no sideeffects
            console.log('observer disconnecting')
            obs.disconnect()
        }
    }, [onTrigger])

    // does not work because if when the observer rearms and you scroll down, the eleVisible will not change
    useEffect(() => {
        if (!armed) return
        if (eleVisible !== true) return
        debounceHandler()
        setArmed(false)
    }, [eleVisible, armed])

    useEffect(() => {
        if (!armed) {
            if (timeout > 0) {
                setTimeout(() => {
                    setArmed(true)
                }, timeout)
            }
        }
    }, [armed, timeout])

    return (<div ref={eleRef} onClick={debounceHandler}>{eleVisible ? 'Hey' : 'invisible'}</div>)
}