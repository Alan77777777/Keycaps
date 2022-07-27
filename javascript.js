var input = document.querySelector("#campo_texto");
var keys = document.querySelectorAll(".keys");
var bLetter = "";

input.addEventListener('keydown', function(event) {
    let letter = event.key;
    letterCode = event.keyCode;
    console.log(`KEYDOWN` + " " + letter + " = " + letterCode);
    if (event.keyCode == letterCode) {
        bLetter = document.querySelector(`#${letter}`);
        bLetter.style.color = "black";
        bLetter.style.background = "coral";
    } else {
        return false;
    }
});

input.addEventListener('keyup', function(event) {
    let letter = event.key;
    letterCode = event.keyCode;
    console.log(`KEYUP` + " " + letter + " = " + letterCode);
    if (event.keyCode == letterCode) {
        bLetter1 = document.querySelector(`#${letter}`);
        bLetter.style.color = "white";
        bLetter.style.background = "black";
    } else {
        return false;
    }
});