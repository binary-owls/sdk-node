"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultsFavoringLast = void 0;
function qualifyExisting(value) {
    switch (typeof value) {
        case 'boolean':
            return true;
        case 'string':
            return value !== '';
        case 'object':
            if (value === null) {
                return false;
            }
            if (Array.isArray(value)) {
                return !!value.length;
            }
            return !!Object.keys(value).length;
        default:
            return value !== undefined && value !== null;
    }
}
exports.defaultsFavoringLast = (objects, qualifyValue = qualifyExisting) => {
    const items = objects.filter(x => typeof x === 'object' && x !== null);
    const entries = [].concat(...items.map(Object.entries));
    return entries.reduce((previous, [key, value]) => {
        if (qualifyValue(value)) {
            previous[key] = value;
        }
        else if (!qualifyValue(previous[key])) {
            previous[key] = value;
        }
        return previous;
    }, {});
};
