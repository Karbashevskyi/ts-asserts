import { Is } from 'ts-checkers';

/**
 *
 * @param input type is any
 */
export function ObjectAssert(input: any): asserts input is object {
  if (Is.Not.Object(input)) {
    throw new TypeError('Input must be an Object!');
  }
}
