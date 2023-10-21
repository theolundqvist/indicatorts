import { Action } from '../action';
import { Asset } from '../asset';
/**
 * The negative volume index strategy uses the nvi values that are generated by
 * the Negative Volume Index (NVI) indicator function to provide a BUY action
 * when nvi is less than its 255-period EMA, and a SELL action when it is
 * greather than its 255-period EMA, otherwise a HOLD action.
 *
 * @param asset asset object.
 * @returns strategy actions.
 */
export declare function negativeVolumeIndexStrategy(asset: Asset): Action[];
