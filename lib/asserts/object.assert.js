"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectAssert = void 0;
const ts_checkers_1 = require("ts-checkers");
/**
 *
 * @param input type is any
 */
function ObjectAssert(input) {
    if (ts_checkers_1.Is.Not.Object(input)) {
        throw new TypeError('Input must be an Object!');
    }
}
exports.ObjectAssert = ObjectAssert;
