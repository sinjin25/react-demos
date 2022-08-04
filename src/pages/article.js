import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { getAPost } from '../js/fetch';
import Post from '../components/post';

export default function Article() {
    let { id } = useParams();
    let [data, setData] = useState(null)

    useEffect(() => {
        getAPost(id)
        .then((json) => {
            console.log('got data', json)
            setData(json)
            /* setLastPost(json.length) */
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
    if (!data) return <div>Loading...</div>
    return (<div>
        <Post data={data} />
    </div>)
}