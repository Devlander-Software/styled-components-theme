import { lightColors } from '../src/bundle/shared/defaults/light-colors.defaults';
import { getRandomColorValue } from '../src/bundle/shared/utils/get-random-value-value';

describe('getRandomColorValue', () => {
  it('should return a valid color value from lightColors', () => {
    const randomColorValue = getRandomColorValue();
    expect(randomColorValue).toBeDefined();
    expect(Object.values(lightColors)).toContain(randomColorValue);
  });



});
