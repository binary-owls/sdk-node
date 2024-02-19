"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomizeAlphanumericString = void 0;
function randomizeAlphanumericString(length) {
    if (length < 1) {
        throw new Error('Length must be at least 1');
    }
    if (length >= 32) {
        throw new Error('Length must be less than 32, otherwise just use an UUID');
    }
    const alphaLength = Math.ceil(Math.random() * length);
    let part1 = '';
    for (let i = 0; i < alphaLength; i++) {
        const randomChar = String.fromCharCode(97 + Math.floor(Math.random() * 26));
        part1 += randomChar;
    }
    let part2;
    const numericLength = length - alphaLength;
    if (numericLength < 1) {
        part2 = '';
    }
    else {
        const offset = Math.pow(10, numericLength - 1);
        const randomNum = Math.floor(Math.random() * offset * 9) + offset;
        part2 = Math.floor(randomNum).toString();
    }
    return part1 + part2;
}
exports.randomizeAlphanumericString = randomizeAlphanumericString;
