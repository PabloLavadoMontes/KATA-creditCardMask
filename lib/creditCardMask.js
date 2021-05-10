"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maskify = void 0;
/**
 * Transforma los caracteres de un string en '#' a excepción de los 4 últimos dígitos;
 * @param   {string} cc
 * @returns {string} letterOut
 */
function maskify(cc) {
    let letterOut = "";
    for (let i = 0; i < cc.length; i++) {
        if (cc.length - i > 4) {
            letterOut += "#";
        }
        else {
            letterOut += cc[i];
        }
    }
    return letterOut;
}
exports.maskify = maskify;
//# sourceMappingURL=creditCardMask.js.map