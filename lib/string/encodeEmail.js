"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeEmail = (email, key) => {
    if (typeof key !== 'number') {
        throw new Error('key is required');
    }
    let encodedString = key.toString(16);
    for (let n = 0; n < email.length; n++) {
        const charCode = email.charCodeAt(n);
        const encoded = charCode ^ key;
        encodedString += encoded.toString(16);
    }
    return encodedString;
};
