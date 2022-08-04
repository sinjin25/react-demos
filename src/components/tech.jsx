export default function Tech({items}) {

    if (items.length === 0) return <></>
    return (<>
    <h2>Tech used in this page:</h2>
    <ul>
        {items.map((i, index) => {
            return <li key={index}>{i}</li>
        })}
    </ul>
    </>)
}