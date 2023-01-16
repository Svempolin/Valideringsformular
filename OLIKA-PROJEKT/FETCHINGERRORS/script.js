const errors = []
const userList = document.querySelector("#user-list");

const fetchSubject = ()=> {

fetch ("https://fnd22-shared.azurewebsites.net/api/Cases")
.then((res) => {
    return(res.json())
})
 
.then((data) => {
console.log(data)
data.forEach((error)=> {
    errors.push(error)
})

})


}

fetchSubject()

// const listErrors = () => {
// userList.innerHTML = ""
// errors.forEach(error => {
//     const errorElement = 
// })
// }


const createErrorElement = (userData) => {
    let subject = document.createElement("div")
    subject.id = userData.id
    subject.classList.add("user")
    subject.classList.add("user-dark")
}

