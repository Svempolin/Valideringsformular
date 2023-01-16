const container = document.querySelector("#astros");

fetch("http://api.open-notify.org/astros.json")
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    container.innerHTML = `<h1>There are ${json.number} people in space right now</h1>`;
   json.people.forEach((person) =>{
   container.innerHTML += `<p>${person.name}</p>`

})

  });
