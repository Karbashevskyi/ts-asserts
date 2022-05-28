import { Is } from 'ts-checkers';

export class Asserts {
  /**
   *
   * @param input type is any
   */
  public static assertArray(input: any): asserts input is [] {
    if (Is.Not.Collection(input)) {
      throw new Error('Input must be a array!');
    }
  }

  /**
   *
   * @param input type is any
   */
  public static assertObject(input: any): asserts input is object {
    if (Is.Not.Structure(input)) {
      throw new Error('Input must be a object!');
    }
  }

  /**
   *
   * @param input type is any
   */
  public static assertString(input: any): asserts input is string {
    if (Is.Not.String(input)) {
      throw new Error('Input must be a string!');
    }
  }

  /**
   *
   * @param input type is any
   */
  public static assertNumber(input: any): asserts input is number {
    if (Is.Not.Number(input)) {
      throw new Error('Input must be a number!');
    }
  }

  /**
   *
   * @param input type is any
   */
  public static assertBoolean(input: any): asserts input is boolean {
    if (Is.Not.Boolean(input)) {
      throw new Error('Input must be a boolean!');
    }
  }

  /**
   *
   * @param input type is any
   */
  public static assertNotNullOrUndefined(input: any) {
    if (Is.NullOrUndefined(input)) {
      throw new Error('Input must be not null or undefined!');
    }
  }
}
