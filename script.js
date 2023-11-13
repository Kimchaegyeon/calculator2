function appendNumber(num) {
    document.getElementById('display').value += num;
}

function appendOperator(operator) {
    document.getElementById('display').value += operator;
}

function calculate() {
    var display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = '오류';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}
