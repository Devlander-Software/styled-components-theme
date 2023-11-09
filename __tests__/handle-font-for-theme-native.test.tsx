

import { createThemeForNative } from '../src/bundle/native/setup/create-theme/create-theme.native';
import { handleFontFromThemeForNative } from '../src/bundle/native/utils/theme-functions/handle-font-for-theme.native';
import { defaultFonts } from '../src/bundle/shared/defaults/fonts.defaults';
import { Platform } from 'react-native';
// ... other imports
jest.mock('react-native', () => {
  return {
    Platform: {
      OS: 'ios', // or 'android', 'web', etc., as needed for your tests
      select: jest.fn((spec) => (spec.ios ? spec.ios : spec.android)),
    },
    // Mock other react-native exports as needed
  };
});

describe('handleFontFromThemeForNative', () => {
  const mockTheme = createThemeForNative({});

  beforeAll(() => {
    // You can set any initial configuration that applies to all tests here
  });

  afterEach(() => {
    // Clear all mocks after each test
    jest.clearAllMocks();
  });

  beforeEach(() => {
    const ReactNative = require('react-native');
    ReactNative.Platform.OS = 'ios'; // or 'android', 'web', etc.
  });


  it('should return expect Font2 bolded if nothing is defined', () => {
    const font = handleFontFromThemeForNative(undefined as any, 'bold', mockTheme);
    expect(font).toBe(defaultFonts.Font2.bold);
  });

  it('should return the font name for Font2 when platform is not web', () => {
    Platform.OS = 'ios'; // Set the platform to iOS for this test
    const font = handleFontFromThemeForNative("Font2", 'bold', mockTheme);
    expect(font).toBe(defaultFonts.Font2.bold);
  });

  it('should return the web font name when platform is web', () => {
    Platform.OS = 'web';
    const font = handleFontFromThemeForNative("Font1", 'bold', mockTheme);
    expect(font).toBe(defaultFonts.Font1.name);
  });

  // Add more tests for other conditions and font weights
  it('should handle non-web platforms with specific font weight', () => {
    Platform.OS = 'android'; // Example for Android platform
    const font = handleFontFromThemeForNative("Font1", 'light', mockTheme);
    expect(font).toBe(defaultFonts.Font1.light);
  });


  // Add more test cases for edge cases and error handling if there are any
});
