var btnTranslator = document.querySelector("#btn-translator");
var inputText = document.querySelector("#txt-input");
var outputText = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/doge.json";

function getTranslatedURL(text){
    return serverURL+"?"+"text="+text;
}

function errorHandler(error){
    console.log("error occured "+error);
    alert("Something wrong with server");
}

function clickHandler(){

    var inp = inputText.value;
    fetch(getTranslatedURL(inp))
    .then(response => response.json())
    .then(json => {
        outputText.innerText = json.contents.translated
    })
    .catch(errorHandler);
}

btnTranslator.addEventListener("click",clickHandler);