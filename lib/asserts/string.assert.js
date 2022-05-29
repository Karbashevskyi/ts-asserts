"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.string = void 0;
const ts_checkers_1 = require("ts-checkers");
/**
 *
 * @param input type is any
 */
function string(input) {
    if (ts_checkers_1.Is.Not.String(input)) {
        throw new TypeError('Input must be a String!');
    }
}
exports.string = string;
