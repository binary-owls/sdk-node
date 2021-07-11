"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const REGEX_UNSAFE_CHARACTERS = /[^a-z0-9]+/gi;
exports.dehumanize = (str, delimiter = '-') => str.replace(REGEX_UNSAFE_CHARACTERS, delimiter).toLowerCase();
