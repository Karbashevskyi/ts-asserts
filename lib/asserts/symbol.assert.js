"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SymbolAssert = void 0;
const ts_checkers_1 = require("ts-checkers");
/**
 *
 * @param input type is any
 */
function SymbolAssert(input) {
    if (ts_checkers_1.Is.Not.Symbol(input)) {
        throw new TypeError('Input must be a Symbol!');
    }
}
exports.SymbolAssert = SymbolAssert;
