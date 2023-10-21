import { Trend } from '../trend';
/**
 * Parabolic SAR result object.
 */
export interface ParabolicSar {
    trends: Trend[];
    psar: number[];
}
/**
 * Parabolic SAR. It is a popular technical indicator for identifying the trend
 * and as a trailing stop.
 *
 * PSAR = PSAR[i - 1] - ((PSAR[i - 1] - EP) * AF)
 *
 * If the trend is Falling:
 *  - PSAR is the maximum of PSAR or the previous two high values.
 *  - If the current high is greather than or equals to PSAR, use EP.
 *
 * If the trend is Rising:
 *  - PSAR is the minimum of PSAR or the previous two low values.
 *  - If the current low is less than or equals to PSAR, use EP.
 *
 * If PSAR is greater than the closing, trend is falling, and the EP
 * is set to the minimum of EP or the low.
 *
 * If PSAR is lower than or equals to the closing, trend is rising, and the EP
 * is set to the maximum of EP or the high.
 *
 * If the trend is the same, and AF is less than 0.20, increment it by 0.02.
 * If the trend is not the same, set AF to 0.02.
 *
 * Based on video https://www.youtube.com/watch?v=MuEpGBAH7pw&t=0s.
 *
 * @param highs high values.
 * @param lows low values.
 * @param closings closing values.
 * @return psar result.
 */
export declare function parabolicSar(highs: number[], lows: number[], closings: number[]): ParabolicSar;
