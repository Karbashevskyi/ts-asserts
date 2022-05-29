"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.array = void 0;
const ts_checkers_1 = require("ts-checkers");
/**
 *
 * @param input type is any
 */
function array(input) {
    if (ts_checkers_1.Is.Not.Array(input)) {
        throw new TypeError('Input must be an Array!');
    }
}
exports.array = array;