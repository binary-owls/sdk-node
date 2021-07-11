"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MINIMUM_HIDDEN = 3;
exports.obfuscate = (str) => {
    const length = Math.min(str.length, Math.max(Math.floor(str.length / 2), MINIMUM_HIDDEN));
    return str.replace(new RegExp(`.{${length}}$`), '*****');
};
