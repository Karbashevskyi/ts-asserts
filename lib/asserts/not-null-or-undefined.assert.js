"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notNullOrUndefined = void 0;
const ts_checkers_1 = require("ts-checkers");
/**
 *
 * @param input type is any
 */
function notNullOrUndefined(input) {
    if (ts_checkers_1.Is.NullOrUndefined(input)) {
        throw new TypeError('Input must be not null or undefined!');
    }
}
exports.notNullOrUndefined = notNullOrUndefined;
