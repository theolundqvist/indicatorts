import { Action } from '../action';
import { Asset } from '../asset';
/**
 * Volume weighted average price strategy uses the values that are generated
 * by the Volume Weighted Average Price (VWAP) indicator function to provide
 * a BUY action when the closing is below the VWAP, and a SELL action when
 * the closing is below the VWAP, a HOLD action otherwise.
 *
 * @param asset asset object.
 * @returns strategy actions.
 */
export declare function volumeWeightedAveragePriceStrategy(asset: Asset): Action[];
