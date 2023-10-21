/**
 * The Balance of Power (BOP) function calculates the strength of buying and
 * selling pressure. Positive value indicates an upward trend, and negative
 * value indicates a downward trend. Zero indicates a balance between
 * the two.
 *
 * BOP = (Closing - Opening) / (High - Low)
 *
 * @param openings opening values.
 * @param highs high values.
 * @param lows low values.
 * @param closings closing values.
 * @return balance of power values.
 */
export declare function balanceOfPower(openings: number[], highs: number[], lows: number[], closings: number[]): number[];
