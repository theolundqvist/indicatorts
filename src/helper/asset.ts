import { Asset } from "../strategy/asset";
import { mean } from "./numArray";

export function assetMean(asset: Asset): number[] {
  return mean(asset.highs, asset.lows);
}
