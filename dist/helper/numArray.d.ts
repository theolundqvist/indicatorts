/**
 * Checkes the values lenghts.
 * @param values values list.
 */
export declare function checkSameLength(...values: number[][]): void;
/**
 * Absolute values of the given values.
 * @param values values array.
 * @return absolute values.
 */
export declare function abs(values: number[]): number[];
/**
 * Adds values2 to values1.
 * @param values1 values one.
 * @param values2 values two.
 * @return result array.
 */
export declare function add(values1: number[], values2: number[]): number[];
/**
 * Adds n to values.
 * @param n add value.
 * @param values values array.
 * @return result array.
 */
export declare function addBy(n: number, values: number[]): number[];
/**
 * Divides values1 by values2.
 * @param values1 values one.
 * @param values2 values two.
 * @return result array.
 */
export declare function divide(values1: number[], values2: number[]): number[];
/**
 * Divides values by n.
 * @param n divide value.
 * @param values values array.
 * @return result array.
 */
export declare function divideBy(n: number, values: number[]): number[];
/**
 * Multiply values1 by values2.
 * @param values1 values one.
 * @param values2 values two.
 * @return result array.
 */
export declare function multiply(values1: number[], values2: number[]): number[];
/**
 * Multiply values by n.
 * @param n multiply value.
 * @param values values array.
 * @return result array.
 */
export declare function multiplyBy(n: number, values: number[]): number[];
/**
 * Subtracts values2 from values1.
 * @param values1 values one.
 * @param values2 values two.
 * @return result array.
 */
export declare function subtract(values1: number[], values2: number[]): number[];
/**
 * Subtractes n from values.
 * @param n subtract value.
 * @param values values array.
 * @return result array.
 */
export declare function subtractBy(n: number, values: number[]): number[];
/**
 * Shift values right by given amount and fill with value.
 * @param n shift amount.
 * @param fill fill value.
 * @param values values array.
 * @returns shifted and filled values.
 */
export declare function shiftRightAndFillBy(n: number, fill: number, values: number[]): number[];
/**
 * Shifts values right by given amount.
 * @param n shift amount.
 * @param values values array.
 * @return shifted values.
 */
export declare function shiftRightBy(n: number, values: number[]): number[];
/**
 * Change between the current value and the value n before.
 * @param n shift amount.
 * @param values values array.
 * @returns changes array.
 */
export declare function changes(n: number, values: number[]): number[];
/**
 * Extracts the sign of the values. Returns 1 for the
 * positive and zero, and -1 for the negative.
 * @param values values array.
 * @return sign values.
 */
export declare function extractSigns(values: number[]): number[];
/**
 * Transpose of given values.
 * @param values values arrays.
 * @return transposed values.
 */
export declare function transpose(...values: number[][]): number[][];
/**
 * Max value of rows.
 * @param values values arrays.
 * @return max rows.
 */
export declare function max(...values: number[][]): number[];
/**
 * Rounds the value to given number of digits.
 * @param digits digits number.
 * @param value numeric value.
 * @return rounded value.
 */
export declare function roundDigits(digits: number, value: number): number;
/**
 * Rounds the values to given number of digits.
 * @param digits digits number.
 * @param values values array.
 * @return rounded values.
 */
export declare function roundDigitsAll(digits: number, values: number[]): number[];
/**
 * Generates numbers.
 *
 * @param begin begin number.
 * @param end end number.
 * @param step step number.
 * @return generated numbers.
 */
export declare function generateNumbers(begin: number, end: number, step: number): number[];
/**
 * Power of the given bases to the exponent.
 *
 * @param bases base values.
 * @param exponent exponent value.
 * @return power values.
 */
export declare function pow(bases: number[], exponent: number): number[];
/**
 * Square roots of values.
 * @param values value array.
 * @return square roots.
 */
export declare function sqrt(values: number[]): number[];
