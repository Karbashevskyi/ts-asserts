import { Is } from 'ts-checkers';

/**
 *
 * @param input type is any
 */
export function BooleanAssert(input: any): asserts input is boolean {
  if (Is.Not.Boolean(input)) {
    throw new TypeError('Input must be a Boolean!');
  }
}
