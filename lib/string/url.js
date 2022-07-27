"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUnsafeUrl = exports.formatUrlQuery = exports.parseUrlQuery = void 0;
const url_1 = __importDefault(require("url"));
const querystring_1 = __importDefault(require("querystring"));
exports.parseUrlQuery = (str) => {
    try {
        const { query } = url_1.default.parse(str);
        return querystring_1.default.parse(query || '');
    }
    catch (_a) {
        return {};
    }
};
exports.formatUrlQuery = (params) => querystring_1.default.stringify(params);
exports.isUnsafeUrl = (str) => {
    const isValidUrlString = /^([!#$&-;=?-\[\]_a-z~]|%[0-9a-fA-F]{2})+$/.test(str);
    return !isValidUrlString;
};
