import { ArrayAssert } from './asserts/array.assert';
import { BooleanAssert } from './asserts/boolean.assert';
import { NotNullOrUndefinedAssert } from './asserts/not-null-or-undefined.assert';
import { NumberAssert } from './asserts/number.assert';
import { ObjectAssert } from './asserts/object.assert';
import { StringAssert } from './asserts/string.assert';
import { SymbolAssert } from './asserts/symbol.assert';
import { BigIntAssert } from './asserts/bigint.assert';
export declare const Asserts: {
    Array: typeof ArrayAssert;
    BigInt: typeof BigIntAssert;
    Boolean: typeof BooleanAssert;
    NotNullOrUndefined: typeof NotNullOrUndefinedAssert;
    Number: typeof NumberAssert;
    Object: typeof ObjectAssert;
    String: typeof StringAssert;
    Symbol: typeof SymbolAssert;
};
