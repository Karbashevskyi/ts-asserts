import { Is } from 'ts-checkers';

export class Asserts {
  /**
   *
   * @param input type is any
   */
  public static assertString(input: any): asserts input is string {
    if (typeof input !== 'string') {
      throw new Error('Input must be a string!');
    }
  }

  /**
   *
   * @param input type is any
   */
  public static assertNumber(input: any): asserts input is number {
    if (typeof input !== 'number') {
      throw new Error('Input must be a number!');
    }
  }

  /**
   *
   * @param input type is any
   */
  public static assertBoolean(input: any): asserts input is boolean {
    if (typeof input !== 'boolean') {
      throw new Error('Input must be a boolean!');
    }
  }

  /**
   *
   * @param input type is any
   */
  public static assertNotNullOrUndefined(input: any) {
    if (Is.nullOrUndefined(input)) {
      throw new Error('Input must be not null or undefined!');
    }
  }
}
