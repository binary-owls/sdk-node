"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidDate = void 0;
exports.isValidDate = (date) => {
    return !!date && Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date);
};
