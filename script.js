// ESERCIZIO 1


function exercise1() {
    let input1 = document.getElementById("1_1");
    let input2 = document.getElementById("1_2");
    if (input1.value == 50 || input2.value == 50 || parseInt(input1.value) + parseInt(input2.value) == 50 ) {
        console.log(true);
    } else {
        console.log(false);
    }
}