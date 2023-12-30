import { createThemeForNative } from "../src/bundle/native/setup/create-theme/create-theme.native";
import { getStyleFromPropsNative } from "../src/bundle/native/utils/theme-functions/get-style-from-props.native";
import { NativeTheme } from "../src/bundle/shared/types/base-theme-types";
import { ComprehensiveStyleProps } from "../src/bundle/shared/types/style-attributes.interfaces";

describe('getStyleFromPropsNative', () => {
  // Mock theme with handlers
  const mockTheme = createThemeForNative({});

  it('returns correct CSS string with all properties provided', () => {
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
      style: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        zIndex: 5,
        overflow: 'hidden',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffsetX: 2,
        shadowOffsetY: 4,
        shadowOpacity: 0.5,
        shadowRadius: 5,
        transform: 'translateX(10px) rotate(45deg)',

      },
      
      opacity: 0.8,
      marginLeft: 15,
      flexDirection: 'row',
      marginRight: 20,
      backgroundColor: 'red',
      paddingLeft: 25,
      borderColorFromTheme: 'whiteAlpha20',
      paddingRight: 30,
      margin: 40,
      borderWidth: 1,
      flex: 1,
      paddingTop: 35,
      borderRadius: 10,
    
      elevation: 8,
    };

    const expectedCss: string[] = [
      'align-items: center;',
      'background: red;',
      'border-color: rgba(255, 255, 255, 0.2);',
      'border-width: 1px;',
      'border-radius: 10px;',
 
      'elevation: 8;',
      'flex: 1;',
      'flex-direction: row;',
      'height: 150px;',
      'justify-content: flex-start;',
      'margin-left: 15px;',
      'margin-right: 20px;',
      'margin-top: 10px;',
      'margin-bottom: 5px;',
      'max-height: 200px;',
      'max-width: 100px;',
      'min-height: 50px;',
      'opacity: 0.8;',
      'overflow: hidden;',
      'padding-left: 25px;',
      'padding-top: 35px;',
      'padding-right: 30px;',
      'width: 300px;',
      'shadow-color: rgba(0, 0, 0, 0.2);',
      'shadow-offset-x: 2px;',
      'shadow-offset-y: 4px;',
      'shadow-opacity: 0.5;',
      'shadow-radius: 5px;',
      'transform: translateX(10px) rotate(45deg);',
      'z-index: 5;',
    ];

    const css = getStyleFromPropsNative(styleProps);

    expect(css).toMatchSnapshot();

    // Check if css string contains each line from expectedCss
    expectedCss.forEach(line => {
      expect(css).toContain(line);
    });
  });

  // More test cases for different combinations of properties

  it('handles properties with undefined values', () => {
    const styleProps = {
      // All properties are undefined
      theme: mockTheme,
    };

    const expectedCss: string[] = [];

    const css = getStyleFromPropsNative(styleProps);

    expect(css).toMatchSnapshot();

    // Check if css string contains each line from expectedCss
    expectedCss.forEach(line => {
      expect(css).toContain(line);
    });
  });

  it('prefers backgroundColor prop over backgroundColorFromTheme prop with other properties set', () => {
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
      style: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        overflow: 'hidden',
        zIndex: 5,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffsetX: 2,
        shadowOffsetY: 4,
        shadowOpacity: 0.5,
        shadowRadius: 5,
        transform: 'translateX(10px) rotate(45deg)',

      },
      opacity: 0.8,
      marginLeft: 15,
      flexDirection: 'row',
      marginRight: 20,
      paddingLeft: 25,
      borderColorFromTheme: 'whiteAlpha20',
      paddingRight: 30,
      margin: 40,
      borderWidth: 1,
      flex: 1,
      paddingTop: 35,
      borderRadius: 10,
    
      elevation: 8,
    };

    const expectedCss: string[] = [
      'background: red;',
      'border-radius: 10px;',

      'flex: 1;',
      'flex-direction: row;',
      'justify-content: flex-start;',
      'align-items: center;',
      'opacity: 0.8;',
      'margin-left: 15px;',
      'margin-right: 20px;',
      'padding-left: 25px;',
      'padding-top: 35px;',
      'padding-right: 30px;',
      'width: 300px;',
      'margin-top: 10px;',
      'margin-bottom: 5px;',
      'margin-left: 15px;',
      'margin-right: 20px;',
      'height: 150px;',
      'max-width: 100px;',
      'max-height: 200px;',
      'min-height: 50px;',
      'border-color: rgba(255, 255, 255, 0.2);',
      'border-width: 1px;',
    ];

    const css = getStyleFromPropsNative(styleProps);

    expect(css).toMatchSnapshot();

    // Check if css string contains each line from expectedCss
    expectedCss.forEach(line => {
      expect(css).toContain(line);
    });
  });
});
