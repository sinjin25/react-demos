import { useEffect, useRef, useState } from "react";
import { getPosts } from "../js/fetch";
import Post from "./post";
import NoMoreContent from './no-more-content'
import InfiniteScroll from "./infinite-scroll";

export default function PostsContainer() {
    const [data, setData] = useState([])
    const [lastPost, setLastPost] = useState(10)
    const [pagination, setPagination] = useState(10)

    const loadMore = () => {
        console.log('loadMore ran')
        setPagination(v => v+10)
    }

    useEffect(() => {
        getPosts()
        .then((json) => {
            console.log('got data', json)
            setData(json)
            setLastPost(json.length)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    
    return (<>
        {
            data.slice(0, pagination).map((item, index) => {
                return <div className="card" key={item.id}><Post data={item} /></div>
            })
        }
        <InfiniteScroll onTrigger={loadMore} />
        {
            lastPost === pagination
            ? (<h2><NoMoreContent /></h2>)
            : ''
        }
    </>)
}