import { Is } from 'ts-checkers';

/**
 *
 * @param input type is any
 */
export function notNullOrUndefined(input: any) {
  if (Is.NullOrUndefined(input)) {
    throw new TypeError('Input must be not null or undefined!');
  }
}
