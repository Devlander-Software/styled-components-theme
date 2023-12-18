import { createThemeForNative } from "../src/bundle/native/setup/create-theme/create-theme.native";
import { getStyleFromPropsNative } from "../src/bundle/native/utils/theme-functions/get-style-from-props.native";
import { NativeTheme } from "../src/bundle/shared/types/base-theme-types";
import { ComprehensiveStyleProps } from "../src/bundle/shared/types/style-attributes.interfaces";

describe('getStyleFromPropsNative', () => {
  // Mock theme with handlers
  const mockTheme = createThemeForNative({});
  const normalizeCss = (str: string) => str.replace(/\s/g, '');


  it('returns correct CSS string with provided style properties', () => {
    const styleProps: ComprehensiveStyleProps<NativeTheme, number> = {
      maxWidth: 100,
      maxHeight: 200,
      height: 150,
      theme: mockTheme,
      marginTop: 10,
      width: 300,
      backgroundColorFromTheme: 'primary',
      marginBottom: 5,
      minHeight: 50,
      opacity: 0.8,
      marginLeft: 15,
      marginRight: 20,
      paddingLeft: 25,
      borderColorFromTheme: 'whiteAlpha20',
      paddingRight: 30,
      margin: 40,
      borderWidth: 1,
      flex: 1,
      paddingTop: 35
    };

    const expectedCss = `
      background: rgba(0,123,255,1);
      flex: 1;
      padding-left: 25px;
      padding-top: 35px;
      padding-right: 30px;
      width: 300px;
      margin-top: 10px;
      margin-bottom: 5px;
      opacity: 0.8;
      margin-left: 15px;
      margin-right: 20px;
      height: 150px;
      max-width: 100px;
      max-height: 200px;
      min-height: 50px;
      border-color: rgba(255, 255, 255, 0.2);
      border-width: 1px;
      margin: 40px;
    `;

    const css = getStyleFromPropsNative(styleProps);

   
    expect(css).toMatchSnapshot();

    // Check if css string matches expected output (normalize whitespace and line breaks)
    expect(normalizeCss(css)).toBe(normalizeCss(expectedCss));
  });

  it('returns prefers backgroundColor prop over backgroundColorFromTheme prop', () => {
    const styleProps: ComprehensiveStyleProps<NativeTheme, number> = {
      maxWidth: 100,
      maxHeight: 200,
      height: 150,
      theme: mockTheme,
      marginTop: 10,
      width: 300,
      backgroundColorFromTheme: 'primary',
      backgroundColor: 'red',
      marginBottom: 5,
      minHeight: 50,
      opacity: 0.8,
      marginLeft: 15,
      marginRight: 20,
      paddingLeft: 25,
      borderColorFromTheme: 'whiteAlpha20',
      paddingRight: 30,
      margin: 40,
      borderWidth: 1,
      flex: 1,
      paddingTop: 35
    };

    const expectedCss = `
      background: red;
      flex: 1;
      padding-left: 25px;
      padding-top: 35px;
      padding-right: 30px;
      width: 300px;
      margin-top: 10px;
      margin-bottom: 5px;
      opacity: 0.8;
      margin-left: 15px;
      margin-right: 20px;
      height: 150px;
      max-width: 100px;
      max-height: 200px;
      min-height: 50px;
      border-color: rgba(255, 255, 255, 0.2);
      border-width: 1px;
      margin: 40px;
    `;


    const css = getStyleFromPropsNative(styleProps);


   
    expect(css).toMatchSnapshot();

    // Check if css string matches expected output (normalize whitespace and line breaks)
    expect(normalizeCss(css)).toBe(normalizeCss(expectedCss));
  });

  // More tests could be added to cover different scenarios, such as when properties are not provided
});
