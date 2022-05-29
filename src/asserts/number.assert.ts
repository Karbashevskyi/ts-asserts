import { Is } from 'ts-checkers';

/**
 *
 * @param input type is any
 */
export function NumberAssert(input: any): asserts input is number {
  if (Is.Not.Number(input)) {
    throw new TypeError('Input must be a Number!');
  }
}
