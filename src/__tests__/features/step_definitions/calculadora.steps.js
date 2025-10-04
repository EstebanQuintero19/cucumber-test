import { Given, When, Then } from '@cucumber/cucumber';
import assert from 'node:assert';
import Calculadora from '../../../../src/calculadora.js';

let a, b, resultado;
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
    assert.strictEqual(resultado, expected, `Expected ${resultado} to be ${expected}`);
});
