"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSnakeCase = exports.isDigit = exports.isUpperCaseLetter = exports.isLowerCaseLetter = void 0;
function isLowerCaseLetter(str) {
    if (typeof str !== 'string') {
        return false;
    }
    if (!str.length) {
        return false;
    }
    if (str.length !== 1) {
        throw Error(`string length too long: "${str}"`);
    }
    const charCode = str.charCodeAt(0);
    return 97 <= charCode && charCode <= 122;
}
exports.isLowerCaseLetter = isLowerCaseLetter;
function isUpperCaseLetter(str) {
    if (typeof str !== 'string') {
        return false;
    }
    if (!str.length) {
        return false;
    }
    if (str.length !== 1) {
        throw Error(`string length too long: "${str}"`);
    }
    const charCode = str.charCodeAt(0);
    return 65 <= charCode && charCode <= 90;
}
exports.isUpperCaseLetter = isUpperCaseLetter;
function isDigit(str) {
    if (typeof str !== 'string') {
        return false;
    }
    if (!str.length) {
        return false;
    }
    if (str.length !== 1) {
        throw Error(`string length too long: "${str}"`);
    }
    const charCode = str.charCodeAt(0);
    return 48 <= charCode && charCode <= 57;
}
exports.isDigit = isDigit;
function toSnakeCase(inputString) {
    const str = inputString.replace(/[\W_]+/g, '_');
    let output = str.charAt(0);
    for (let i = 1; i < str.length; i++) {
        const char = str.charAt(i);
        if (isUpperCaseLetter(char)) {
            for (let j = i - 1; j >= 0; j--) {
                const prevChar = str.charAt(j);
                if (isLowerCaseLetter(prevChar)) {
                    output += '_';
                    break;
                }
                else if (isUpperCaseLetter(prevChar)) {
                    for (let k = i + 1; k < str.length; k++) {
                        const followingChar = str.charAt(k);
                        if (isUpperCaseLetter(followingChar)) {
                            break;
                        }
                        else if (isLowerCaseLetter(followingChar)) {
                            output += '_';
                            break;
                        }
                        else if (isDigit(followingChar)) {
                        }
                        else {
                            break;
                        }
                    }
                    break;
                }
                else if (isDigit(prevChar)) {
                }
                else {
                    break;
                }
            }
        }
        output += char;
    }
    return output.toLowerCase();
}
exports.toSnakeCase = toSnakeCase;
