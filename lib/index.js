"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asserts = void 0;
const ts_checkers_1 = require("ts-checkers");
class Asserts {
    /**
     *
     * @param input type is any
     */
    static assertObject(input) {
        if (ts_checkers_1.Is.Not.Structure(input)) {
            throw new Error('Input must be a object!');
        }
    }
    /**
     *
     * @param input type is any
     */
    static assertString(input) {
        if (typeof input !== 'string') {
            throw new Error('Input must be a string!');
        }
    }
    /**
     *
     * @param input type is any
     */
    static assertNumber(input) {
        if (ts_checkers_1.Is.Not.Number(input)) {
            throw new Error('Input must be a number!');
        }
    }
    /**
     *
     * @param input type is any
     */
    static assertBoolean(input) {
        if (typeof input !== 'boolean') {
            throw new Error('Input must be a boolean!');
        }
    }
    /**
     *
     * @param input type is any
     */
    static assertNotNullOrUndefined(input) {
        if (ts_checkers_1.Is.NullOrUndefined(input)) {
            throw new Error('Input must be not null or undefined!');
        }
    }
}
exports.Asserts = Asserts;
