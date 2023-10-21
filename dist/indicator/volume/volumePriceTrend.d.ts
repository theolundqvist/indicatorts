/**
 * The Volume Price Trend (VPT) provides a correlation between the volume and
 * the price.
 *
 * VPT = Previous VPT + (Volume * (Current Closing - Previous Closing) / Previous Closing)
 *
 * @param closings closing values.
 * @param volumes volume values.
 * @returns volume price trend values.
 */
export declare function volumePriceTrend(closings: number[], volumes: number[]): number[];
