import { Is } from 'ts-checkers';

/**
 *
 * @param input type is any
 */
export function BigIntAssert(input: any): asserts input is [] {
  if (Is.Not.BigInt(input)) {
    throw new TypeError('Input must be a BigInt!');
  }
}
