const DOMAIN = "https://jsonplaceholder.typicode.com/"
const POSTS = DOMAIN + "posts"

const requestIsOkay = function(data) {
    if (data.ok) return data.json()
    throw Error("There was an error")
}

const simplyReturnData = function(data) {
    return data
}

const pushErrorUp = function(err) {
    return Promise.reject(err)
}


export function getPosts() {
    // SAMPLE RETURN
    /* [
        {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
    ] */
    return fetch(POSTS)
    .then(requestIsOkay)
    .then(simplyReturnData)
    .catch(pushErrorUp)
}

export function getAPost(id) {
    return fetch(POSTS+'/'+id)
    .then(requestIsOkay)
    .then(simplyReturnData)
    .catch(pushErrorUp)
}