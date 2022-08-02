export default function Post({data}) {
    return (<>
        <h2>{data.title}</h2>
        <div>post #{data.id}</div>
        <pre>{data.body}</pre>
    </>)
}