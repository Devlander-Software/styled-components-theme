import { createThemeForNative } from '../src/bundle/native/setup/create-theme/create-theme.native';
import { getStyleForTextPropsForNative } from '../src/bundle/native/utils/theme-functions/get-style-for-text-props.native';
import { NativeTheme } from '../src/bundle/shared/types/base-theme-types';
import { ResolvedThemedTextStylingProps } from '../src/bundle/shared/types/text-style.types';

jest.mock('react-native', () => {
    return {
      Platform: {
        OS: 'ios', // or 'android', 'web', etc., as needed for your tests
        select: jest.fn((spec) => (spec.ios ? spec.ios : spec.android)),
      },
      // Mock other react-native exports as needed
    };
  });
describe('getStyleForTextPropsForNative', () => {
    const mockTheme = createThemeForNative({});
    const normalizeCss = (str: string) => str.replace(/\s/g, '');

  it('generates correct CSS for valid input', () => {

    const props: ResolvedThemedTextStylingProps<NativeTheme, number> = {
      theme: mockTheme,
      fontSize: 24,
      textColorFromTheme: 'blackAlpha100',
      fontType: 'Font1',
      fontTypeWeight: 'bold'

      // Add other necessary props here
    };

    const expectedCSS = `
      font-family:  Montserrat-Bold;
      color: rgba(0, 0, 0, 1);
      line-height: 30px;
      font-size: 24px;
    `.trim();

    const generatedCSS = getStyleForTextPropsForNative(props as any)

    expect(normalizeCss(generatedCSS)).toEqual(normalizeCss(expectedCSS));

    expect(generatedCSS).toMatchSnapshot();

  });


  describe('getStyleForTextPropsForNative with maxFontSize', () => {
    const mockTheme = createThemeForNative({});

  it('generates correct CSS for valid input', () => {

    const props: ResolvedThemedTextStylingProps<NativeTheme, number> = {
      theme: mockTheme,
      fontSize: 16,
      textColorFromTheme: 'blackAlpha100',
      fontType: 'Font1',
      fontTypeWeight: 'bold',
      maxFontSize: 20

      // Add other necessary props here
    };



    const generatedCSS = getStyleForTextPropsForNative(props as any)
  
    const expectedCSS = `
      font-family: Montserrat-Bold;
      color: rgba(0, 0, 0, 1);
      line-height: 22px;
      font-size: 16px;

    `;
  
  
    expect(normalizeCss(generatedCSS)).toEqual(normalizeCss(expectedCSS));
    expect(generatedCSS).toMatchSnapshot();

  });

  })
  // Add more test cases to cover different scenarios and edge cases
});
