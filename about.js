console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault(); 
  alert("The form has been submitted successfully");
}

let form = document.querySelector("#contact");

form.addEventListener("submit", handleSubmit);

function mouseOverAlert() {
  alert("You are awesome");
}

duck.addEventListener("mouseover", mouseOverAlert);


