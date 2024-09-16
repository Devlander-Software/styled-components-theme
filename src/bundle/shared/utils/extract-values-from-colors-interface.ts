import { extractKeysAndValues } from '@devlander/utils';
import { ColorsInterface } from '../types/color.types';

export function extractKeysAndValuesFromColorsInterface(
  colors: ColorsInterface
): [string[], string[]] {
  // Cast colors to unknown first, then to Record<string, unknown>
  const { keys, values } = extractKeysAndValues(colors as unknown as Record<string, unknown>);
  // Ensure that values are of type string[]
  return [keys as string[], values as string[]];
}
