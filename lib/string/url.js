"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlify = exports.isUnsafeUrl = exports.formatUrlQuery = exports.parseUrlQuery = void 0;
const url_1 = __importDefault(require("url"));
const querystring_1 = __importDefault(require("querystring"));
const parseUrlQuery = (str) => {
    try {
        const { query } = url_1.default.parse(str);
        return querystring_1.default.parse(query || '');
    }
    catch (_a) {
        return {};
    }
};
exports.parseUrlQuery = parseUrlQuery;
const formatUrlQuery = (params) => querystring_1.default.stringify(params);
exports.formatUrlQuery = formatUrlQuery;
const isUnsafeUrl = (str) => {
    const isValidUrlString = /^([!#$&-;=?-\[\]_a-z~]|%[0-9a-fA-F]{2})+$/.test(str);
    return !isValidUrlString;
};
exports.isUnsafeUrl = isUnsafeUrl;
const urlify = (name) => {
    if (typeof name !== 'string') {
        return name;
    }
    return name.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase();
};
exports.urlify = urlify;
