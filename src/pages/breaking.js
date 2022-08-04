import Intro from '../components/intro'
import IntroDescription from '../components/intro-desc'
import InfiniteRerender from '../components/breaking/infinite-rerender'
import InfiniteSideEffect from '../components/breaking/infinite-side-effect'

export default function Index() {

    return (<div>
        <h2><Intro /></h2>
        <IntroDescription />
        <InfiniteRerender />
        <InfiniteSideEffect />
    </div>)
}