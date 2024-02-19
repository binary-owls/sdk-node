"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dehumanize = void 0;
const REGEX_UNSAFE_CHARACTERS = /[^a-z0-9]+/gi;
const dehumanize = (str, delimiter = '-') => str.replace(REGEX_UNSAFE_CHARACTERS, delimiter).toLowerCase();
exports.dehumanize = dehumanize;
