const nowYr = new Date();
document.getElementById("jsyear").innerHTML = nowYr.getFullYear();

window.onkeydown = function () {
//     Also takes shift and alt, etc into considering.
const validKeys = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "=",
    "*",
    "/",
];
const numbKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const opKeys = ["+", "-", "=", "*", "/"];
const clrKey = ["C", "c"];
if (validKeys.includes(event.key)) {
    //         1. Display keys until + - * / = c/C pressed
    //         2. When + - * / = c/C pressed: calc or clear screen
    //         3. When = pressed, show result.
    document.getElementById("jsresult").innerHTML =
    "You typed: " + event.key;
} else {
    alert("That key is not a number or operator");
}
};

jscontainer.onclick = function () {
document.getElementById("jsresult").innerHTML =
    "You clicked: " + event.target.value;
};