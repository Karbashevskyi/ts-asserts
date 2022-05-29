import { Is } from 'ts-checkers';

/**
 *
 * @param input type is any
 */
export function StringAssert(input: any): asserts input is string {
  if (Is.Not.String(input)) {
    throw new TypeError('Input must be a String!');
  }
}
