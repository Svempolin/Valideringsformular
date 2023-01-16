// const BASE_URL = "https://jsonplaceholder.typicode.com/posts?userId=2" // Om man lägger till tex en 2 så skickar man med en parameter. Lägger man till ? man till en query 
// const BASE_URL = "https://jsonplaceholder.typicode.com/posts?userId=2" 
// const BASE_URL = "https://jsonplaceholder.typicode.com/posts?userId=2&_page=1&_limit=3" // Fler querys

const BASE_URL = "https://jsonplaceholder.typicode.com/posts" 

const output= document.querySelector("#output");


const getPosts =  async () => {
    const res = await fetch (BASE_URL)
    const posts = await res.json()

    console.log(posts)
    // Loopar igenom Post somkommer fårn databasen
    posts.forEach(post => {

        // Lägg till ett nytt element i output
        output.appendChild(createCardElement(post))
    });
}
getPosts()

// skapar ett card element med information från post > databasen
const createCardElement = (post) =>{
const card = document.createElement("a")
card.className = " text-white text-decoration-none card bg-dark p-2 mb-3"
// card.href = `details.html?id=${post.id}`
card.setAttribute("href", `details.html?id=${post.id}`)
const title = document.createElement("h2")
title.innerText = post.title
const snippet = document.createElement("p")
snippet.innerText = post.body.slice(0,35) + "...."

card.appendChild(title)
card.appendChild(snippet)

return card
}