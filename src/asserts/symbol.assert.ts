import { Is } from 'ts-checkers';

/**
 *
 * @param input type is any
 */
export function SymbolAssert(input: any): asserts input is [] {
  if (Is.Not.Symbol(input)) {
    throw new TypeError('Input must be a Symbol!');
  }
}
