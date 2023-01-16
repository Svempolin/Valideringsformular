
const BASE_URL = "https://jsonplaceholder.typicode.com/users/"
const users = []

const userList = document.querySelector("#user-list");
const form = document.querySelector("#form")




const fetchUser = () => {
  fetch(BASE_URL)
    .then((res) => {
      return (res.json());
    })
    .then((data) => {
      console.log(data[0].name);
      console.log(data)
      data.forEach((user) => {
        users.push(user)
      })
      listUsers()
    });
};

fetchUser();


const listUsers = ()=> {
userList.innerHTML = " "
users.forEach(user => {
const userElement =  createUserElement(user) 
    userList.appendChild(userElement)

})
}

const createUserElement = (userData) => {
    let user = document.createElement("div")
    user.id = userData.id
    user.classList.add("user")
    user.classList.add("user-dark")

    let name = document.createElement("p")
    name.classList.add("user_name")
    name.innerHTML = userData.name

    let company = document.createElement("p")
    company.classList.add("user_company")
    company.innerHTML = userData.company.name
    let email = document.createElement("p")
    email.classList.add("user_email")
    email.innerHTML = userData.email


    user.appendChild(name)
    user.appendChild(company)
    user.appendChild(email)

    return user
}



// Detta  är inte mest effektiva sättet att göra det på 

 const removeUser = e => {

if(!e.target.classList.contains("user")){
 console.log("dit not include a div")
  return
}
 fetch(BASE_URL + e.target.id, {
    method: "DELETE"
 })
 .then((res)=> {
    console.log(res)
if(res.ok) {
    e.target.remove()
    const index =(users.findIndex(user => user.id == e.target.id))
    users.splice(index, 1)
    console.log(users)
}
 })

}


const handleSubmit = e =>{
    e.preventDefault()
    // validera formuläret

const newUser = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value ,
    company: {
        name: document.querySelector("#company").value,
    }
}
 console.log(newUser)
 fetch(BASE_URL, {
  method: 'POST',
  body: JSON.stringify(newUser),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => {
    users.push(data)
    const userElement =  createUserElement(data) 
    userList.appendChild(userElement)
    console.log(data)
  });
}


userList.addEventListener("click", removeUser)
form.addEventListener("submit", handleSubmit)