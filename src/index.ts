import {ArrayAssert} from './asserts/array.assert';
import {BooleanAssert} from './asserts/boolean.assert';
import {NotNullOrUndefinedAssert} from './asserts/not-null-or-undefined.assert';
import {NumberAssert} from './asserts/number.assert';
import {ObjectAssert} from './asserts/object.assert';
import {StringAssert} from './asserts/string.assert';
import {SymbolAssert} from './asserts/symbol.assert';
import {BigIntAssert} from './asserts/bigint.assert';

export const Asserts = {
    Array: ArrayAssert,
    BigInt: BigIntAssert,
    Boolean: BooleanAssert,
    NotNullOrUndefined: NotNullOrUndefinedAssert,
    Number: NumberAssert,
    Object: ObjectAssert,
    String: StringAssert,
    Symbol: SymbolAssert,
};
