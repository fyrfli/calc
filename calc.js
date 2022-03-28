const nowYr = new Date();
document.getElementById("jsyear").innerHTML = nowYr.getFullYear();

const validKeys = ["1","2","3","4","5","6","7","8","9","0","+","-","=","*","/","C","c","A","a","Backspace"];
const numbKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const opKeys = ["+", "-", "=", "*", "/"];
const clrKey = ["C", "c"];
const delLast = "Backspace";
    
let resultFld = document.getElementById("jsresult");
let errorFld = document.getElementById("jserror");
let calcArr = [];
let ctr = 0;
let keyPressd = "";
let runningTtl = 0;

// document.onkeydown = logkey;
// document.onclick = logkey;    
document.onclick = function () {
    if (validKeys.includes(event.target.value)) {
        errorFld.innerHTML = " ";
        keyPressd = event.target.value;
        if (opKeys.includes(keyPressd)) {
            // switch (keyPressd) {
            //     case "+":
            // }
            calcArr[ctr] = resultFld.textContent;
            ctr++;
            calcArr[ctr] = keyPressd;
        }
        resultFld.innerHTML += keyPressd;
    }
    else {
        errorFld.innerHTML = event.target.value + " is not a valid option";
    };
};

