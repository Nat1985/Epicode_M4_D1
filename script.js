// ESERCIZIO 1

function exercise1() {
    let input1_1 = document.getElementById("ex1-1");
    let input1_2 = document.getElementById("ex1-2");
    let result1 = document.getElementById("result1");
    if (input1_1.value == 50 || input1_2.value == 50 || parseInt(input1_1.value) + parseInt(input1_2.value) == 50 ) {
        result1.innerText = "true";
    } else {
        result1.innerText = "false";
    }
    
}

// ESERCIZIO 2

function exercise2() {
    let input2_1 = document.getElementById("ex2-1");
    let input2_2 = document.getElementById("ex2-2");
    let result2 = document.getElementById("result2");
    let input2_1Array = input2_1.value.split("");
    input2_1Array.splice(input2_2.value, 1);
    result2.innerText = input2_1Array.join("");
}

// ESERCIZIO 3

function exercise3() {
    let value3_1 = (document.getElementById("ex3-1")).value;
    let value3_2 = (document.getElementById("ex3-2")).value;
    let result3 = document.getElementById("result3");
    if (((value3_1 >= 40 && value3_1 <= 60) || (value3_1 >= 70 && value3_1 <= 100)) && ((value3_2 >= 40 && value3_2 <= 60) || (value3_2 >= 70 && value3_2 <= 100))) {
        result3.innerText = "true";
    } else {
        result3.innerText = "false";
    }
}

// ESERCIZIO 4

function exercise4() {
    let value4_1 = (document.getElementById("ex4-1")).value;
    let result4 = document.getElementById("result4");
    let firstThreeLetters = "";
    for (i = 0; i < 3; i++) {
        firstThreeLetters = firstThreeLetters.concat(value4_1[i]);
    }
    if (firstThreeLetters.toLowerCase() == "los" || firstThreeLetters.toLowerCase() == "new") {
        result4.innerText = value4_1;
    } else {
        result4.innerText = "false";
    }
}

// ESERCIZIO 5

function exercise5() {
    inputArray5 = document.getElementsByClassName("value5");
    let result5 = document.getElementById("result5");
    let arrayElementsSum = 0;
    for (i = 0; i < inputArray5.length; i++) {
        arrayElementsSum = arrayElementsSum + parseInt(inputArray5[i].value);
    }
    result5.innerText = arrayElementsSum;
}

// ESERCIZIO 6

function exercise6() {
    valueArray6 = document.getElementsByClassName("value6");
    let result6 = document.getElementById("result6");
    let boolResult;
    for (i = 0; i < valueArray6.length; i++) {
        if(valueArray6[i].value == 1 || valueArray6[i].value == 3) {
            boolResult = false;
            break;
        } else {
            boolResult = true;
        }
    }
    result6.innerText = boolResult;
}

// ESERCIZIO 7

function exercise7() {
    let angleValue7 = (document.getElementById("ex7-1")).value;
    let result7 = document.getElementById("result7");
    if (angleValue7 == 90) {
        result7.innerText = "Angolo RETTO";
    } else if (angleValue7 == 180) {
        result7.innerText = "Angolo PIATTO";
    } else if (angleValue7 < 90) {
        result7.innerText = "Angolo ACUTO";
    } else if (angleValue7 < 180 && angleValue7 !== 90) {
        result7.innerText = "Angolo OTTUSO";
    } else {
        result7.innerText = "Scrivi un numero compreso fra 0 e 180";
    }
}

// ESERIZIO 8

function exercise8() {
    let script8 = (document.getElementById("ex8-1")).value;
    let result8 = document.getElementById("result8");
    wordsArray8 = script8.split(" ");
    let firstLetters8 = "";
    for (i = 0; i < wordsArray8.length; i++) {
        firstLetters8 = firstLetters8.concat(wordsArray8[i][0]);
    }
    result8.innerText = firstLetters8.toUpperCase();
}