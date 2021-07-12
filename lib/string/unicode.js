"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.containsUnicode = exports.isDoubleByte = void 0;
function isDoubleByte(str) {
    for (let i = 0, n = str.length; i < n; i++) {
        if (str.charCodeAt(i) > 255) {
            return true;
        }
    }
    return false;
}
exports.isDoubleByte = isDoubleByte;
exports.containsUnicode = isDoubleByte;
