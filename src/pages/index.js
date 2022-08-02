import Intro from '../components/intro'
import IntroDescription from '../components/intro-desc'
import PostsContainer from '../components/posts-container'

export default function Index() {

    return (<div>
        <h2><Intro /></h2>
        <IntroDescription />
        <PostsContainer />
    </div>)
}