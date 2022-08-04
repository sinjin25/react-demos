import Intro from '../components/intro'
import IntroDescription from '../components/intro-desc'
import PostsContainer from '../components/posts-container'
import Tech from '../components/tech'

const items = [
    'Hooks: useState, useEffect',
    'React Router',
    'Api fetching',
    'Pagination',
    'Debouncing'
]
export default function Index() {

    return (<div>
        <Tech items={items} />
        <h2><Intro /></h2>
        <IntroDescription />
        <PostsContainer />
    </div>)
}