export function getPosts(limit = 10) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
        .then(response => response.json())
}