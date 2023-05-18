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

//ESERCIZIO 9

function exercise9() {
    let string9 = (document.getElementById("ex9-1")).value;
    let result9 = document.getElementById("result9");
    let onCallLetter = "";
    let higherLetter = [];
    let higherLettersAmount = 0;
    for(i = 0; i < string9.length; i++) {
        if(!higherLetter.includes(string9[i])) { 
            onCallLetter = string9[i];
            let onCallLettersAmount = 0;
            for(n = 0; n < string9.length; n++) { 
                if(string9[n] == onCallLetter) {
                    onCallLettersAmount++;
                }
            }
            if (onCallLettersAmount > higherLettersAmount) {
                higherLetter = [onCallLetter];
                higherLettersAmount = onCallLettersAmount;
            } else if (onCallLettersAmount == higherLettersAmount) {
                higherLetter.push(onCallLetter);
            }
        }
    }
    if(higherLetter.length == 1) {
        result9.innerText = "Lettera più frequente: " + higherLetter + ". Utilizzata " + higherLettersAmount + " volte.";
    } else {
        result9.innerText = "Lettere più frequenti: " + higherLetter + ". Utilizzate " + higherLettersAmount + " volte ciascuna.";
    }
    
}

// ESERCIZIO 10 //bisogna ignorare i caratteri speciali

function exercise10() {
    let string10_1 = ((document.getElementById("ex10-1").value).toLowerCase()).replace(/ /g, "");
    let string10_2 = ((document.getElementById("ex10-2").value).toLowerCase()).replace(/ /g, "");
    let string10_2Array = string10_2.split("");
    let result10 = document.getElementById("result10");
    if(string10_1.length == string10_2Array.length) {
        for(i = 0; i < string10_1.length; i++) {
            for(n = string10_2Array.length; n > 0; n--) {
                if(string10_1[i] == string10_2Array[n - 1]) {
                    string10_2Array.splice(n - 1, 1);
                    break;
                }
            }
        }
        if(string10_2Array.length == 0) {
            result10.innerText = "Sono anagrammi! (" + true + ")";

        } else {
            result10.innerText = "Non sono anagrammi (" + false + ")";
        }
    } else {
        result10.innerText = "Errore: Inserisci parole con lo stesso numero di lettere";
    }
    
}