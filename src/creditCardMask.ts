export {maskify}

/**
 * Transforma los caracteres de un string en '#' a excepción de los 4 últimos dígitos;
 * @param   {string} cc 
 * @returns {string} letterOut
 */
function maskify (cc: string): string {
    let letterOut: string = "";
    for (let i: number = 0; i < cc.length; i++) {
        if (cc.length - i > 4) {
            letterOut += "#";
        } else {
            letterOut += cc[i];
        }
    }
    return letterOut;
}