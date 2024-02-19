"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifyPlacing = exports.isNumeric = void 0;
const isNumeric = (input) => {
    if (typeof input == 'number')
        return true;
    if (typeof input != 'string')
        return false;
    return !isNaN(input) &&
        !isNaN(parseFloat(input));
};
exports.isNumeric = isNumeric;
function stringifyPlacing(n) {
    if (typeof n !== 'number') {
        return n;
    }
    n = (n | 0);
    let suffix;
    if (11 <= n && n <= 13) {
        suffix = 'th';
    }
    else {
        const lastDigit = n % 10;
        switch (lastDigit) {
            case 1:
                suffix = 'st';
                break;
            case 2:
                suffix = 'nd';
                break;
            case 3:
                suffix = 'rd';
                break;
            default:
                suffix = 'th';
                break;
        }
    }
    return n + suffix;
}
exports.stringifyPlacing = stringifyPlacing;
