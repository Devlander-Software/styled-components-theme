import { createThemeForNative } from "../src/bundle/native/setup/create-theme/create-theme.native";
import { getStyleFromButtonPropsForNative } from "../src/bundle/native/utils/theme-functions/get-style-from-button-props.native";
import { NativeTheme } from "../src/bundle/shared/types/base-theme-types";
import { ButtonStyleFromProps } from "../src/bundle/shared/types/button-style-props.types";

describe('getStyleFromButtonPropsForNative', () => {
  // Mock theme object with necessary handlers
  const mockTheme = createThemeForNative({});

  it('generates correct CSS from props', () => {
    const props: ButtonStyleFromProps<NativeTheme, number> = {
      theme: mockTheme,
      borderBottomWidth: 2,
      maxWidth: 100,
      borderRadius: 5,
      paddingBottom: 10,
      alignItems: 'center',
      padding: 20,
      marginTop: 15,
      width: 50,
      backgroundColorFromTheme: 'colorFour',
      marginBottom: 10,
      marginLeft: 5,
      marginRight: 5,
      paddingLeft: 10,
      paddingRight: 10,
      flex: 1,
      paddingTop: 10,
    };

    const expectedCss = [
      `align-items: center;`,
      `background-color: rgba(255, 213, 79, 1);`,
      `border-bottom-width: 2px;`,
      `border-radius: 5px;`,
      `flex: 1;`,
      `margin-bottom: 10px;`,
      `margin-left: 5px;`,
      `margin-right: 5px;`,
      `margin-top: 15px;`,
      `max-width: 100px;`,
      `padding: 20px;`,
      `padding-bottom: 10px;`,
      `padding-left: 10px;`,
      `padding-right: 10px;`,
      `padding-top: 10px;`,
      `width: 50px;`,
    ];

    const generatedCss = getStyleFromButtonPropsForNative(props as any);

    // Check if each line from expectedCss is contained in generatedCss
    expectedCss.forEach(line => {
      expect(generatedCss).toContain(line);
    });
  });

  it('should prefer backgroundColor over backgroundColorFromTheme prop', () => {
    const props: ButtonStyleFromProps<NativeTheme, number> = {
      theme: mockTheme,
      borderBottomWidth: 2,
      maxWidth: 100,
      borderRadius: 5,
      paddingBottom: 10,
      alignItems: 'center',
      padding: 20,
      marginTop: 15,
      width: 50,
      backgroundColor: 'red',
      backgroundColorFromTheme: 'colorFour',
      marginBottom: 10,
      marginLeft: 5,
      marginRight: 5,
      paddingLeft: 10,
      paddingRight: 10,
      flex: 1,
      paddingTop: 10,
    };

    const expectedCss = [
      `align-items: center;`,
      `background-color: red;`,
      `border-bottom-width: 2px;`,
      `border-radius: 5px;`,
      `flex: 1;`,
      `margin-bottom: 10px;`,
      `margin-left: 5px;`,
      `margin-right: 5px;`,
      `margin-top: 15px;`,
      `max-width: 100px;`,
      `padding: 20px;`,
      `padding-bottom: 10px;`,
      `padding-left: 10px;`,
      `padding-right: 10px;`,
      `padding-top: 10px;`,
      `width: 50px;`,
    ];

    const generatedCss = getStyleFromButtonPropsForNative(props as any);

    // Check if each line from expectedCss is contained in generatedCss
    expectedCss.forEach(line => {
      expect(generatedCss).toContain(line);
    });
  });
});
