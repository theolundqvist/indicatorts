/**
 * Vortex result.
 */
export interface VortexResult {
    plusVi: number[];
    minusVi: number[];
}
/**
 * Vortex Indicator. It provides two oscillators that capture positive and
 * negative trend movement. A bullish signal triggers when the positive
 * trend indicator crosses above the negative trend indicator or a key
 * level. A bearish signal triggers when the negative trend indicator
 * crosses above the positive trend indicator or a key level.
 *
 * +VM = Abs(Current High - Prior Low)
 * -VM = Abs(Current Low - Prior High)
 *
 * +VM14 = 14-Period Sum of +VM
 * -VM14 = 14-Period Sum of -VM
 *
 * TR = Max((High[i]-Low[i]), Abs(High[i]-Closing[i-1]), Abs(Low[i]-Closing[i-1]))
 * TR14 = 14-Period Sum of TR
 *
 * +VI14 = +VM14 / TR14
 * -VI14 = -VM14 / TR14
 *
 * Based on https://school.stockcharts.com/doku.php?id=technical_indicators:vortex_indicator
 *
 * @param highs high values.
 * @param lows low values.
 * @param closings closing values.
 * @return vortex result.
 */
export declare function vortex(highs: number[], lows: number[], closings: number[]): VortexResult;
