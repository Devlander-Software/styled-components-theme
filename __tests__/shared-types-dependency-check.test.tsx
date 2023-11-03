
const sharedTypesForNative = require('../src/index.native');
const sharedTypesForWeb = require('../src/index.web');
describe('Shared Types Deep Consistency Check', () => {
    it('should have the same keys with the same types for native and web shared types', () => {
      const nativeKeys = Object.keys(sharedTypesForNative);
      const webKeys = Object.keys(sharedTypesForWeb);

      const areValidKeys = nativeKeys.every(key => {
        console.log(key, typeof sharedTypesForNative[key], typeof sharedTypesForWeb[key]);
      });

      console.log(areValidKeys);
  
      expect(nativeKeys).toEqual(webKeys);
  
      nativeKeys.forEach(key => {
        const nativeType = typeof sharedTypesForNative[key];
        const webType = typeof sharedTypesForWeb[key];
        expect(nativeType).toEqual(webType);
      });
    });
  });