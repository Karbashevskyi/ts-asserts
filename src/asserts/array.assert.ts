import { Is } from 'ts-checkers';

/**
 *
 * @param input type is any
 */
export function array(input: any): asserts input is [] {
  if (Is.Not.Array(input)) {
    throw new TypeError('Input must be an Array!');
  }
}
