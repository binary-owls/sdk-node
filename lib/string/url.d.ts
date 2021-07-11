/// <reference types="node" />
import querystring from 'querystring';
export declare const parseUrlQuery: (str: string) => querystring.ParsedUrlQuery;
export declare const formatUrlQuery: (params: querystring.ParsedUrlQueryInput) => string;
