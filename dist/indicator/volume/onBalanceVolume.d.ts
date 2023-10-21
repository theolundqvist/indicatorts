/**
 * On-Balance Volume (OBV). It is a technical trading momentum indicator that
 * uses volume flow to predict changes in stock price.
 *
 *                   volume, if Closing > Closing-Prev
 * OBV = OBV-Prev +       0, if Closing = Closing-Prev
 *                  -volume, if Closing < Closing-Prev
 *
 * @param closings closing values.
 * @param volumes volume values.
 * @return obv values.
 */
export declare function onBalanceVolume(closings: number[], volumes: number[]): number[];
