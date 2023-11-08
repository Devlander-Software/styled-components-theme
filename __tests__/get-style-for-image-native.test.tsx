import { createThemeForNative } from '../src/bundle/native/setup/create-theme/create-theme.native';
import { getStyleForImgPropsForNative } from '../src/bundle/native/utils/theme-functions/get-style-for-img-props.native';
import { NativeTheme } from '../src/bundle/shared/types/base-theme-types';
import { ImageStyleWithThemeGeneric } from '../src/bundle/shared/types/img-style-props';

describe('getStyleForImgPropsForNative', () => {
  // Mock theme with handlers
  const mockTheme = createThemeForNative({});
  const normalizeCss = (str: string) => str.replace(/\s/g, '');


  it('returns correct CSS string with provided style properties', () => {
    const imageStyleProps: ImageStyleWithThemeGeneric<NativeTheme,number> = {
      backgroundColorFromTheme: 'blackAlpha50',
      maxWidth: 100,
      borderBottomRightRadius: 10,
      borderColorFromTheme: 'whiteAlpha50',
      borderTopRightRadius: 5,
      maxHeight: 200,
      height: 150,
      theme: mockTheme,
      width: 300,
      borderRadius: 15,
      borderWidth: 2,
      borderBottomLeftRadius: 0,
      borderTopLeftRadius: 0,
    };

    const css = getStyleForImgPropsForNative(imageStyleProps as any);
    const expectedCss = `
        background-color: rgba(0, 0, 0, 0.5);
        border-color: rgba(255, 255, 255, 0.5);
        border-width: 2px;
        width: 300px;
        height: 150px;
        width: 300px;
        max-width: 100px;
        max-height: 200px;
        border-radius: 0px 5px 10px 0px;
    `;

    // Verify if theme handlers were called correctly

    // ...and so on for other properties

    // Verify if css string matches expected output (ignoring whitespace and line breaks)
    expect(normalizeCss(css)).toEqual(normalizeCss(expectedCss));
    expect(css).toMatchSnapshot();

  });

  // Additional tests can be written for other scenarios such as missing properties or different theme handlers' behavior
});
