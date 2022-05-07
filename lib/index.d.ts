export declare class Asserts {
    /**
     *
     * @param input
     */
    static assertString(input: any): asserts input is string;
    /**
     *
     * @param input
     */
    static assertNumber(input: any): asserts input is number;
    /**
     *
     * @param input
     */
    static assertBoolean(input: any): asserts input is boolean;
    /**
     *
     * @param input
     */
    static assertNotNullOrUndefined(input: any): void;
}
