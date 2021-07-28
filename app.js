let textInput = document.querySelector("#txt-input");
let button = document.querySelector("#btn");
let textOutput = document.querySelector("#txt-output");

let apiUrl = "https://api.funtranslations.com/translate/pirate.json";

function fetchUrl(input) {
  return apiUrl + "?text=" + input
}

function errorHandler(error){
  console.log("Error has occured ! : "+ error);
  alert("Something went wrong with server! \n Please try after some time");
}

button.addEventListener("click", function clickEventHandler(){
  let inputText = textInput.value
  // fetching API
  fetch(fetchUrl(inputText))
  .then(Response => Response.json())
  .then(json=>{
    let finalOutput = json.contents.translated;
    textOutput.innerText = finalOutput;
  }) .catch(errorHandler)
});