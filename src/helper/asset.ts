import { Asset } from "../strategy/asset";
import { mean } from "./numArray";

export function assetMean(asset: Asset): number[] {
  return mean(asset.highs, asset.lows);
}



export function assetSparse(asset:Asset, num_values:number){
  return {
    dates: [...asset.dates],
    openings: [...asset.openings],
    closings: [...asset.closings],
    highs: [...asset.highs],
    lows: [...asset.lows],
    volumes: [...asset.volumes],
  };
}
