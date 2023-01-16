const popBtn = document.querySelector("#openBtn")
const card =document.querySelector("#card")
const closingBtn = document.querySelector("#closingBtn")
const wrapper = document.querySelector("#mainWrapper")


popBtn.addEventListener("click", pop)

function pop(){
    card.classList.toggle("hidden")
}


closingBtn.addEventListener("click", hideBtn)
function hideBtn() {
 card.classList.add("hidden")
}

wrapper.addEventListener("click", e => {
 if (e.target == wrapper){
    card.classList.add("hidden")
 }
})


preventDefault()