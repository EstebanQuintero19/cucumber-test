import Calculadora from '../../calculadora.js';

describe('Calculadora', () => {
    let calculadora;

    // Esto se ejecuta antes de cada prueba
    beforeEach(() => {
        calculadora = new Calculadora();
    });

    describe('sumar', () => {
        it('debe sumar dos números correctamente', () => {
            expect(calculadora.sumar(2, 3)).toBe(5);
            expect(calculadora.sumar(-1, 1)).toBe(0);
            expect(calculadora.sumar(0.1, 0.2)).toBeCloseTo(0.3);
        });
    });

    describe('restar', () => {
        it('debe restar dos números correctamente', () => {
            expect(calculadora.restar(5, 3)).toBe(2);
            expect(calculadora.restar(10, -5)).toBe(15);
        });
    });

    describe('multiplicar', () => {
        it('debe multiplicar dos números correctamente', () => {
            expect(calculadora.multiplicar(2, 3)).toBe(6);
            expect(calculadora.multiplicar(-2, 3)).toBe(-6);
            expect(calculadora.multiplicar(0, 5)).toBe(0);
        });
    });

    describe('dividir', () => {
        it('debe dividir dos números correctamente', () => {
            expect(calculadora.dividir(6, 3)).toBe(2);
            expect(calculadora.dividir(1, 2)).toBe(0.5);
        });

        it('debe lanzar un error al dividir por cero', () => {
            expect(() => calculadora.dividir(5, 0)).toThrow('No se puede dividir por cero');
        });
    });
});
