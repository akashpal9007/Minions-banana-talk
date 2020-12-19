var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#textinput");
var outputDiv = document.querySelector("#output");

function clickHandler() {
    outputDiv.innerText = "translated " + txtInput.value;
}
btnTranslate.addEventListener("click", clickHandler)
