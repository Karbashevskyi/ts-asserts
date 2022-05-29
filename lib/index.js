"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asserts = void 0;
const array_assert_1 = require("./asserts/array.assert");
const boolean_assert_1 = require("./asserts/boolean.assert");
const not_null_or_undefined_assert_1 = require("./asserts/not-null-or-undefined.assert");
const number_assert_1 = require("./asserts/number.assert");
const object_assert_1 = require("./asserts/object.assert");
const string_assert_1 = require("./asserts/string.assert");
exports.Asserts = {
    array: array_assert_1.array,
    boolean: boolean_assert_1.boolean,
    notNullOrUndefined: not_null_or_undefined_assert_1.notNullOrUndefined,
    number: number_assert_1.number,
    object: object_assert_1.object,
    string: string_assert_1.string
};
