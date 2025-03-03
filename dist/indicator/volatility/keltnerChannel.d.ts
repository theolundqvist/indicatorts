/**
 * Default period for KC.
 */
export declare const KC_PERIOD = 20;
/**
 * Keltner channel result object.
 */
export interface KeltnerChannelResult {
    middleLine: number[];
    upperBand: number[];
    lowerBand: number[];
}
/**
 * The Keltner Channel (KC) provides volatility-based bands that are placed
 * on either side of an asset's price and can aid in determining the
 * direction of a trend.
 *
 * Middle Line = EMA(period, closings)
 * Upper Band = EMA(period, closings) + 2 * ATR(period, highs, lows, closings)
 * Lower Band = EMA(period, closings) - 2 * ATR(period, highs, lows, closings)
 *
 * @param period window period.
 * @param highs high values.
 * @param lows low values.
 * @param closings closing values.
 * @returns kc result.
 */
export declare function keltnerChannel(period: number, highs: number[], lows: number[], closings: number[]): KeltnerChannelResult;
/**
 * The default keltner channel with the default period of 20.
 *
 * @param highs high values.
 * @param lows low values.
 * @param closings closing values.
 * @returns kc result.
 */
export declare function defaultKeltnerChannel(highs: number[], lows: number[], closings: number[]): KeltnerChannelResult;
