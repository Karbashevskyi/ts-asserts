"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.number = void 0;
const ts_checkers_1 = require("ts-checkers");
/**
 *
 * @param input type is any
 */
function number(input) {
    if (ts_checkers_1.Is.Not.Number(input)) {
        throw new TypeError('Input must be a Number!');
    }
}
exports.number = number;
