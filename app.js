var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#textinput");

console.log(textinput);

btnTranslate.addEventListener("click", function clickEventHandler() {
    console.log("clicked");
    console.log("input", txtInput.value);
})

