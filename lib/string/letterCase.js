"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.snakeToCamel = exports.camelToSnake = exports.isUpperCaseLetter = exports.isLowerCaseLetter = void 0;
function isLowerCaseLetter(str) {
    if (typeof str !== 'string') {
        return false;
    }
    if (str.length !== 1) {
        throw Error(`input should be length of 1: "${str}"`);
    }
    const charCode = str.charCodeAt(0);
    return 97 <= charCode && charCode <= 122;
}
exports.isLowerCaseLetter = isLowerCaseLetter;
function isUpperCaseLetter(str) {
    if (typeof str !== 'string') {
        return false;
    }
    if (str.length !== 1) {
        throw Error(`input should be length of 1: "${str}"`);
    }
    const charCode = str.charCodeAt(0);
    return 65 <= charCode && charCode <= 90;
}
exports.isUpperCaseLetter = isUpperCaseLetter;
function camelToSnake(str) {
    let output = str.charAt(0);
    for (let i = 1; i < str.length; i++) {
        const char = str.charAt(i);
        if (isUpperCaseLetter(char)) {
            const previousChar = str.charAt(i - 1);
            if (isUpperCaseLetter(previousChar)) {
                const nextChar = str.charAt(i + 1);
                if (isLowerCaseLetter(nextChar)) {
                    output += '_';
                }
            }
            else {
                output += '_';
            }
        }
        output += char;
    }
    return output.toLowerCase();
}
exports.camelToSnake = camelToSnake;
function snakeToCamel(str) {
    const tokens = str
        .split('_')
        .map((token, i) => {
        if (i === 0) {
            return token.toLowerCase();
        }
        if (token.length) {
            const firstChar = token[0].toUpperCase();
            const restOfToken = token.slice(1).toLowerCase();
            return `${firstChar}${restOfToken}`;
        }
        return token;
    });
    return tokens.join('');
}
exports.snakeToCamel = snakeToCamel;
