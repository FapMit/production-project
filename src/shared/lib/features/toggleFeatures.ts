import { FeatureFlags } from "@/shared/types/featureFlags";
import { getFeatureFlag } from "./setGetFeatures";

interface ToggleFeatureOptions<T> {
  name: keyof FeatureFlags;
  on: () => T;
  off: () => T;
}

export function toggleFeatures<T>(options: ToggleFeatureOptions<T>): T {
  const { name, on, off } = options;

  if (getFeatureFlag(name)) {
    return on();
  } return off();
}
