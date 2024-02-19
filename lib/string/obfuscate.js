"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obfuscate = void 0;
const MINIMUM_HIDDEN = 3;
const obfuscate = (str) => {
    const length = Math.min(str.length, Math.max(Math.floor(str.length / 2), MINIMUM_HIDDEN));
    return str.replace(new RegExp(`.{${length}}$`), '*****');
};
exports.obfuscate = obfuscate;
