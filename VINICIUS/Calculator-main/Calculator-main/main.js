var display = document.getElementById("display");

function addNoDisplay(value) {
    display.value += value;
}

function limpar() {
    display.value = "";
}

function calcular() {
    var result = eval(display.value);
    display.value = result;
}


