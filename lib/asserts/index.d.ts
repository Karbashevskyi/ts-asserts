import { ArrayAssert } from './array.assert';
import { BooleanAssert } from './boolean.assert';
import { NullOrUndefinedAssert } from './null-or-undefined.assert';
import { NumberAssert } from './number.assert';
import { ObjectAssert } from './object.assert';
import { StringAssert } from './string.assert';
import { SymbolAssert } from './symbol.assert';
import { BigIntAssert } from './bigint.assert';
import { UndefinedAssert } from './undefined.assert';
import { NullAssert } from './null.assert';
export interface AssertsInterface {
    Array: typeof ArrayAssert;
    BigInt: typeof BigIntAssert;
    Boolean: typeof BooleanAssert;
    NullOrUndefined: typeof NullOrUndefinedAssert;
    Null: typeof NullAssert;
    Number: typeof NumberAssert;
    Object: typeof ObjectAssert;
    String: typeof StringAssert;
    Symbol: typeof SymbolAssert;
    Undefined: typeof UndefinedAssert;
}
export declare const AllAssertions: AssertsInterface;
