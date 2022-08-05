import Intro from '../components/intro'
import IntroDescription from '../components/intro-desc'
import InfiniteRerender from '../components/breaking/infinite-rerender'
import InfiniteSideEffect from '../components/breaking/infinite-side-effect'
import StaleClosure from '../components/breaking/stale-closure'
import { useState } from 'react'

const LABEL = {
    'infRerender': 'Infinite Rerender Bug',
    'infSide': 'Infinite Side Effects',
    'staleClosure': 'Stale Closure (Out of Sync Functions)'
}
const LABEL_KEYS = Object.keys(LABEL)

export default function Index() {
    const [active, setActive] = useState(null)
    
    const changeActive = (str) => {
        setActive(str)
    }

    return (<div>
        <h2>Demonstrating pieces of code that will "break" React.</h2>
        <IntroText />
        <Controls handler={changeActive} opts={['infRerender', 'infSide', 'staleClosure']}/>
        <div className='break'></div>
        {active === 'infRerender' && (
            <>
            <p>Demonstrating how to create faulty code that will cause an infinite rerender.</p>
            <p>This is done by using a setState during the render. The refreshes are capped at 20 to stop the app from crashing.</p>
            <InfiniteRerender />
            </>
        )}
        {active === 'infSide' && (<>
            <p>Demonstrating how to create infinite side effects (timers) while the app appears to be working correctly. (Refresh page when done because there'll be a memory leak).</p>
            <p>This is done by not setting up a proper teardown. Although the app looks like it's working correctly, every render introduces a new timer that React is no longer tracking.</p>
            <InfiniteSideEffect />
        </>)}
        {active === 'staleClosure' && (<>
            <p>Demonstrating how to purposely get state out of sync when pieces of state are based on each other.</p>
            <p>This is done by creating a piece of derived state that is updated based on old values. These old values are used because setState is asynchronous and the code wrongly assumes it's synchronous.</p>
            <StaleClosure />
        </>)}
    </div>)
}

const Controls = ({opts, handler}) => {
    
    return (
        <div>
            {
                opts.map((i, index) => {
                    return (<div key={index}>
                        <button onClick={() => handler(i)}>Turn on {LABEL[i]}</button>
                    </div>)
                })
            }
        </div>
    )
}

const IntroText = () => {
    return (<>
        <p>This page demonstrates mistakes people can make that will "break" react as well as a short description of how to achieve them.</p>
    </>)
}