const nowYr = new Date();
document.getElementById("jsyear").innerHTML = nowYr.getFullYear();

window.onkeydown = function () {
//     Also takes shift and alt, etc into considering.
    const validKeys = ["1","2","3","4","5","6","7","8","9","0","+","-","=","*","/","C","c","A","a","Backspace"];
    const numbKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const opKeys = ["+", "-", "=", "*", "/"];
    const clrKey = ["C", "c"];
    let keyPressd = KeyboardEvent;
    let calcField = 0;
    let errorField = "";
    let resultField = "";
    let operatorField = "";
    let calcArr = [];
    let ctr = 0;
    
    if (validKeys.includes(keyPressd)) {
        resultField += keyPressd;
        switch (keyPressd) {
            case numbKeys.includes(keyPressd):
                calcField += keyPressd;
                break;
            case "+":
                ctr++;
                calcArr[ctr] = calcField;
                calcField = 0;
                break;
            default:
                errorField = "Default reached ...";

        }
    }
    document.getElementById("jserror").innerHTML = errorField;
    document.getElementById("jsresult").innerHTML = resultField;
}

// if (validKeys.includes(event.key)) {
    //         1. Display keys until + - * / = c/C pressed
    //         2. When + - * / = c/C pressed: calc or clear screen
    //         3. When = pressed, show result.
    // document.getElementById("jsresult").innerHTML = "You typed: " + event.key;
// } else {
    // document.getElementById("jserror").innerHTML = "Key " + event.key + " is not a number or operator";

// };

// jscontainer.onclick = function () {
// document.getElementById("jsresult").innerHTML =
    // "You clicked: " + event.target.value;
// };