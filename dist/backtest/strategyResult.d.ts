import { Action } from '../strategy/action';
import { StrategyInfo } from './strategyInfo';
/**
 * Strategy result.
 */
export interface StrategyResult {
    info: StrategyInfo;
    gain: number;
    gains: number[];
    lastAction: Action;
}
