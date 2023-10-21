/**
 * Accumulation/Distribution Indicator (A/D). Cumulative indicator
 * that uses volume and price to assess whether a stock is
 * being accumulated or distributed.
 *
 * MFM = ((Closing - Low) - (High - Closing)) / (High - Low)
 * MFV = MFM * Period Volume
 * AD = Previous AD + CMFV
 *
 * @param highs high values.
 * @param lows low values.
 * @param closings closing values.
 * @param volume volume values.
 * @return ad values.
 */
export declare function accumulationDistribution(highs: number[], lows: number[], closings: number[], volume: number[]): number[];
