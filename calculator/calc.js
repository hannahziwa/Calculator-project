function display(value) {
    let result = document.getElementById("result");
    result.value += value;
}

function clearScreen() {
    let result = document.getElementById("result");
    result.value = "";
}

function calculate() {
    let result = document.getElementById("result");
    let expression = result.value;

    try {
        let calculatedResult = eval(expression);
        result.value = calculatedResult;
    } catch (error) {
        result.value = "Error";
    }
}