// ESERCIZIO 1

function exercise1() {
    console.log("ESERCIZIO 1:");
    let input1_1 = document.getElementById("1_1");
    let input1_2 = document.getElementById("1_2");
    if (input1_1.value == 50 || input1_2.value == 50 || parseInt(input1_1.value) + parseInt(input1_2.value) == 50 ) {
        console.log(true);
    } else {
        console.log(false);
    }
}

// ESERCIZIO 2

function exercise2() {
    let input2_1 = document.getElementById("2_1");
    let input2_2 = document.getElementById("2_2");
    let input2_1Array = input2_1.value.split("");
    input2_1Array.splice(input2_2.value, 1);
    console.log(input2_1Array.join(""));
}

//ESERCIZIO 3

function exercise3() {
    let value3_1 = (document.getElementById("3_1")).value; // V
    let value3_2 = (document.getElementById("3_2")).value; // V
    if (((value3_1 >= 40 && value3_1 <= 60) || (value3_1 >= 70 && value3_1 <= 100)) && ((value3_2 >= 40 && value3_2 <= 60) || (value3_2 >= 70 && value3_2 <= 100))) {
        console.log(true);
    } else {
        console.log(false);
    }
}