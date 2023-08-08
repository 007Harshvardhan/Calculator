let input = document.getElementById("input");

function appendNumber(number) {
    input.value += number;
}

function appendOperator(operator) {
    input.value += operator;
}

function calculate() {
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = "Error";
    }
}

function clearInput() {
    input.value = "";
}
