
// const params = new URLSearchParams (window.location.search)
// params.forEach(p => {
//     console.log(p)
// })

const id = new URLSearchParams (window.location.search).get("id")

console.log(id)

const BASE_URL = "https://jsonplaceholder.typicode.com/posts/" 

const output= document.querySelector("#output");


const getPost =  async () => {
    const res = await fetch (BASE_URL + id)
    const post = await res.json()

    console.log(post)

    output.appendChild(createCardElement(post))

}
    
getPost()

const createCardElement = (post) =>{
    const card = document.createElement("div")
    card.className = " text-white text-decoration-none card  card bg-secondary p-2 mb-3"
    // card.href = `details.html?id=${post.id}`
    const title = document.createElement("h2")
    title.innerText = post.title
    const snippet = document.createElement("p")
    snippet.innerText = post.body
    const button = document.createElement("a")
    button.setAttribute("herf", `index.html`)
    button.className = " text-white text-decoration-none border border-white p-2 mb-3"
    button.innerText = "go back"
 
    card.appendChild(title)
    card.appendChild(snippet)
    card.appendChild(button)
    
    return card
    }