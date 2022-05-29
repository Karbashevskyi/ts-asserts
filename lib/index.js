"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asserts = void 0;
const array_assert_1 = require("./asserts/array.assert");
const boolean_assert_1 = require("./asserts/boolean.assert");
const not_null_or_undefined_assert_1 = require("./asserts/not-null-or-undefined.assert");
const number_assert_1 = require("./asserts/number.assert");
const object_assert_1 = require("./asserts/object.assert");
const string_assert_1 = require("./asserts/string.assert");
const symbol_assert_1 = require("./asserts/symbol.assert");
const bigint_assert_1 = require("./asserts/bigint.assert");
exports.Asserts = {
    Array: array_assert_1.ArrayAssert,
    BigInt: bigint_assert_1.BigIntAssert,
    Boolean: boolean_assert_1.BooleanAssert,
    NotNullOrUndefined: not_null_or_undefined_assert_1.NotNullOrUndefinedAssert,
    Number: number_assert_1.NumberAssert,
    Object: object_assert_1.ObjectAssert,
    String: string_assert_1.StringAssert,
    Symbol: symbol_assert_1.SymbolAssert,
};
