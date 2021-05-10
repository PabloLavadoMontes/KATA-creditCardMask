/* Su tarea es escribir una función maskify, que cambie los caracteres en # 
¡Menos los últimos cuatro!

Examples:
maskify("4556364607935616") => "############5616"
maskify(     "64607935616") =>      "#######5616" 
for (let i = 0; i < numero.length; i++) {
    if (numero.length - [i] < 5) {
        console.log(numero[i]);
    }   
}
Tareas:
Comprobar que el string.length > 4; else return string;
Recorrer todos los elementos del string menos los últimos 4 
Mientras se recorren todos los elementos del string menos los últimos 4, sustituir todos los elementos por "*"
Devolver ese string
Convertir ese string en un array de strings
While array.length - 4 Mandar a un array "arrayOfLast4" los 4 últimos dígitos y a otro array "arrayOfPads" el resto de dígitos;
Sustituir todos los caracteres de "arrayOfPads" por "#" 
Unir ambos arrays con el método "arrayOut" = "arrayOfPads.concat(arrayOfLast4)" 
Convertir ese array en un string con arrayOut.join("").toString();
*/

import {maskify} from "../creditCardMask";

// maskify
test("Transforma los caracteres de un string en '#' a excepción de los 4 últimos dígitos", () => {
    expect(maskify("4556364607935616")).toBe("############5616");
});
test("Transforma los caracteres de un string en '#' a excepción de los 4 últimos dígitos", () => {
    expect(maskify("64607935616")).toBe("#######5616" );
});
test("Transforma los caracteres de un string en '#' a excepción de los 4 últimos dígitos", () => {
    expect(maskify("megustacantar")).toBe("#########ntar");
});
test("Transforma los caracteres de un string en '#' a excepción de los 4 últimos dígitos", () => {
    expect(maskify("pepe")).toBe("pepe");
});
test("Transforma los caracteres de un string en '#' a excepción de los 4 últimos dígitos", () => {
    expect(maskify("")).toBe("");
});


