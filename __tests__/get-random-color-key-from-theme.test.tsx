import { lightColors } from '../src/bundle/shared/defaults/light-colors.defaults';
import { getRandomColorKey } from '../src/bundle/shared/utils/get-random-color-key';

describe('getRandomColorKey', () => {
  it('should return a random color key', () => {
    const randomColorKey = getRandomColorKey();
    expect(randomColorKey).toBeDefined();

    const includedInColorKeys = Object.keys(lightColors).includes(randomColorKey);
    expect(includedInColorKeys).toBe(true);
  });
});
