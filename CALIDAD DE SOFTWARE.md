
## 1. ¿Qué son las pruebas de software y su importancia en el desarrollo?
Las pruebas de software son procesos donde verificamos que las funcionalidades de una aplicación o programa funcionen correctamente. Su importancia radica en que nos ayudan a identificar errores antes de que el producto llegue a los usuarios, mejorando la calidad del software, evitando fallos graves y asegurando que todo se haga como se espera.

## 2. ¿Qué diferencia hay entre encontrar un error durante las pruebas y que lo encuentre el usuario en caliente?
Si un error se detecta durante las pruebas, podemos corregirlo antes de que el software llegue al usuario. En cambio, si el usuario lo encuentra "en caliente" (es decir, después de que la aplicación ya está en uso), puede afectar su experiencia, causar frustración y dañar la reputación del software.

## 3. ¿Qué es una prueba manual y una automatizada?
- **Prueba manual**: Es cuando un tester (o tú como desarrollador) realiza las pruebas de forma manual, interactuando con el software como lo haría un usuario. Es útil cuando no se tienen muchas pruebas o cuando se necesita comprobar cosas que son difíciles de automatizar.
- **Prueba automatizada**: Son pruebas que se hacen a través de scripts o herramientas que se ejecutan de forma automática. Son útiles cuando hay muchas pruebas repetitivas que deben hacerse varias veces, como en proyectos grandes.

## 4. ¿Qué diferencia existe entre una prueba funcional y una no funcional?
- **Pruebas funcionales**: Se centran en verificar que las funcionalidades del software funcionen como deberían. Por ejemplo, si un botón realiza la acción correcta al hacer clic en él.
- **Pruebas no funcionales**: Se enfocan en aspectos como el rendimiento (¿la app es rápida?), la seguridad (¿es segura contra ataques?) o la usabilidad (¿es fácil de usar?).

## 5. Nombra una herramienta de pruebas usada en JS/NodeJS
Una herramienta popular para pruebas en JS/Node.js es **Jest**. Permite hacer pruebas unitarias, integradas y de rendimiento de manera sencilla.

## 6. ¿Qué significa cobertura de pruebas y por qué no basta con tener el 100% de cobertura?
La cobertura de pruebas es un indicador que muestra el porcentaje de código que está siendo probado por nuestras pruebas automáticas. Aunque tener el 100% de cobertura parece ideal, no garantiza que el software esté libre de errores. Esto se debe a que solo cubrimos el código, pero no necesariamente estamos probando todos los escenarios posibles de uso o errores lógicos. A veces, es más importante tener pruebas bien diseñadas que solo enfocarse en la cantidad.

---

# Pruebas Unitarias de Validación de Contraseña

Para implementar las pruebas unitarias del validador de contraseñas, seguimos estos pasos:

## 1. Estructura del Archivo de Pruebas

Creamos el archivo [test-password-validator.js](cci:7://file:///c:/Users/albee/OneDrive/Escritorio/2025-1/SENA_EVIDENCIAS/SKILLTRADE_NODEjs/backend/test-password-validator.js:0:0-0:0) que contiene:

1. **Caso de prueba exitoso**:
   - Contraseña: `'Clave123!'`
   - Verifica que cumple con todos los requisitos

2. **Casos de prueba de error**:
   - Falta mayúscula (`'clave123!'`)
   - Falta minúscula (`'CLAVE123!'`)
   - Falta número (`'Claveabc!'`)
   - Falta carácter especial (`'Clave1234'`)
   - Muy corta (`'Cl1!'`)

## 2. Validaciones Implementadas

Cada prueba verifica:

1. **Longitud mínima** (8 caracteres)
2. **Letra mayúscula**
3. **Letra minúscula**
4. **Número**
5. **Carácter especial** (`@$!%*?&`)

## 3. Resultados de la Prueba

El sistema muestra:
- ✅ **Pruebas exitosas**
- ❌ **Pruebas fallidas**
- **Mensaje de error específico**

## 4. Ejecución

Para ejecutar las pruebas:

```bash
node test-password-validator.js
```

## 5. Salida

La salida incluye:

- Nombre de la prueba
    
- Contraseña probada
    
- Resultado (VÁLIDA/INVÁLIDA)
    
- Mensaje descriptivo


![[Pasted image 20250919214323.png]]

# **PRUEBAS DE INTEGRACIÓN**
![[Pasted image 20250919221607.png]]

Se implementaron pruebas de integración con Cucumber para el registro de usuarios en el backend. Aquí está el resumen:

1. **Estructura de Pruebas**:
   - Se crearon archivos de características ([.feature](cci:7://file:///c:/Users/albee/OneDrive/Escritorio/2025-1/SENA_EVIDENCIAS/SKILLTRADE_NODEjs/backend/test/unit/features/password_validation.feature:0:0-0:0)) con escenarios BDD
   - Se implementaron definiciones de pasos en JavaScript

2. **Escenarios Cubiertos**:
   - Registro exitoso de usuario
   - Validación de correo duplicado
   - Verificación de roles de usuario
   - Validación de contraseñas
   - Manejo de errores

3. **Tecnologías**:
   - Cucumber.js para BDD
   - Supertest para peticiones HTTP
   - Chai para aserciones
   - MongoDB en memoria para pruebas


### 1. package.json

Configura los scripts y dependencias del proyecto:

- **Scripts**:
    - `test`: Ejecuta pruebas de Cucumber
    - `test:unit`: Ejecuta pruebas unitarias con Jest
    - `test:watch`: Modo observación de pruebas

### 2. src/calculadora.js

Implementación de la calculadora con operaciones básicas:

javascript

export default class Calculadora {  
    sumar(a, b) { return a + b; }  
    restar(a, b) { return a - b; }  
    multiplicar(a, b) { return a * b; }  
    dividir(a, b) {  
        if (b === 0) throw new Error('No se puede dividir por cero');  
        return a / b;  
    }  
}

### 3. Pruebas de Aceptación (Cucumber)

#### src/**tests**/features/calculadora.feature

gherkin

Feature: Calculator  
  As a user  
  I want to perform basic math operations  
  So that I can do simple calculations  
  
  Scenario: Add two numbers  
    Given I have the numbers 5 and 7  
    When I add them  
    Then the result should be 12  
  
  Scenario: Subtract two numbers  
    Given I have the numbers 10 and 4  
    When I subtract them  
    Then the result should be 6

#### src/**tests**/features/step_definitions/calculadora.steps.js

Implementación de los pasos de las pruebas:

javascript

import { Given, When, Then } from '@cucumber/cucumber';  
import { expect } from '@jest/globals';  
import Calculadora from '../../../calculadora.js';  
  
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
    expect(resultado).toBe(expected);  
});

### 4. Pruebas Unitarias (Jest)

#### src/**tests**/unit/calculadora.test.js

javascript

import Calculadora from '../../calculadora.js';  
  
describe('Calculadora', () => {  
    let calculadora;  
  
    beforeEach(() => {  
        calculadora = new Calculadora();  
    });  
  
    describe('sumar', () => {  
        it('debe sumar dos números correctamente', () => {  
            expect(calculadora.sumar(2, 3)).toBe(5);  
            expect(calculadora.sumar(-1, 1)).toBe(0);  
        });  
    });  
  
    // Más pruebas para restar, multiplicar y dividir...  
});

## Cómo Ejecutar las Pruebas

1. **Pruebas de Aceptación (Cucumber)**:
    
    bash
    
    npm test
    
2. **Pruebas Unitarias (Jest)**:
    
    bash
    
    npm run test:unit