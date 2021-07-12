"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinPaths = void 0;
exports.joinPaths = (...args) => {
    return args.map((part, i) => {
        if (i === 0) {
            return part.trim().replace(/[\/]*$/g, '');
        }
        else {
            return part.trim().replace(/(^[\/]*|[\/]*$)/g, '');
        }
    }).filter(part => part.length).join('/');
};
