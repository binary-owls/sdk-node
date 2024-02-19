/// <reference types="node" />
import { ParsedUrlQuery, ParsedUrlQueryInput } from 'querystring';
export declare const parseUrlQuery: (str: string) => ParsedUrlQuery;
export declare const formatUrlQuery: (params: ParsedUrlQueryInput) => string;
export declare const isUnsafeUrl: (str: string) => boolean;
export declare const urlify: (name: string) => string;
