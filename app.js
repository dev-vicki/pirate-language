const translateButton = document.querySelector('#btn-translate');
translateButton.addEventListener("click", buttonClickHandler)
const translateInput = document.querySelector("#txt-input");
const translateOutput = document.querySelector("#txt-output");

const url = "https://api.funtranslations.com/translate/pirate.json";

function buttonClickHandler(event) {
    console.log("button clicked");
    const input = translateInput.nodeValue;
    const finalURL = constructURL(input);
    console.log(finalURL);
    fetch(finalURL)
    .then(response => response.json())
    .then(json => {
        translateOutput.innerText= json.contents.translated;
    })
    .catch(() => alert("some error occured"))
}

function constructURL(inputText) {
    const encodedURI = encodeURI(inputText);
    return `${url}?text=${encodedURI}`;
}