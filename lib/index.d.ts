export declare class Asserts {
    /**
     *
     * @param input type is any
     */
    static assertObject(input: any): asserts input is object;
    /**
     *
     * @param input type is any
     */
    static assertString(input: any): asserts input is string;
    /**
     *
     * @param input type is any
     */
    static assertNumber(input: any): asserts input is number;
    /**
     *
     * @param input type is any
     */
    static assertBoolean(input: any): asserts input is boolean;
    /**
     *
     * @param input type is any
     */
    static assertNotNullOrUndefined(input: any): void;
}
