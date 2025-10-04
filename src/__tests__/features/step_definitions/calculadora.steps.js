const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let a, b, resultado;

class Calculadora {
    sumar(a, b) {
        return a + b;
    }

    restar(a, b) {
        return a - b;
    }
}

const calculadora = new Calculadora();

Given('I have the numbers {int} and {int}', function (num1, num2) {
    a = num1;
    b = num2;
});

When('I add them', function () {
    resultado = calculadora.sumar(a, b);
});

When('I subtract them', function () {
    resultado = calculadora.restar(a, b);
});

Then('the result should be {int}', function (expected) {
    assert.strictEqual(resultado, expected);
});
