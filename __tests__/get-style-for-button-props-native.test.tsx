import { createThemeForNative } from "../src/bundle/native/setup/create-theme/create-theme.native";
import { getStyleFromButtonPropsForNative } from "../src/bundle/native/utils/theme-functions/get-style-from-button-props.native";
import { NativeTheme } from "../src/bundle/shared/types/base-theme-types";
import { ButtonStyleFromProps } from "../src/bundle/shared/types/button-style-props.types";

describe('getStyleFromButtonPropsForNative', () => {
  // Mock theme object with necessary handlers
  const mockTheme = createThemeForNative({});
    const normalizeCss = (str: string) => str.replace(/\s/g, '');


  it('generates correct CSS from props', () => {
    const props: ButtonStyleFromProps<NativeTheme,number> = {
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
      `background-color: rgba(255,213,79,1);`,
      `flex: 1;`,
      `padding-left: 10px;`,
      `width: 50px;`,
      `padding-bottom: 10px;`,
      `padding-top: 10px;`,
      `padding-right: 10px;`,
      `max-width: 100px;`,
      `margin-top: 15px;`,
      `margin-bottom: 10px;`,
      `margin-left: 5px;`,
      `margin-right: 5px;`,
      `padding: 20px;`,
      `align-items: center;`,
      `border-radius: 5;`,
      `border-bottom-width: 2px;`,
    ].join(' ');


    const generatedCss = getStyleFromButtonPropsForNative(props as any)
    expect(normalizeCss(generatedCss)).toEqual(normalizeCss(expectedCss));

    expect(generatedCss).toMatchSnapshot();


  });

  it('it should prefer backgroundColor over backgroundColorFromTheme prop', () => {
    const props: ButtonStyleFromProps<NativeTheme,number> = {
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
      `background-color: red;`,
      `flex: 1;`,
      `padding-left: 10px;`,
      `width: 50px;`,
      `padding-bottom: 10px;`,
      `padding-top: 10px;`,
      `padding-right: 10px;`,
      `max-width: 100px;`,
      `margin-top: 15px;`,
      `margin-bottom: 10px;`,
      `margin-left: 5px;`,
      `margin-right: 5px;`,
      `padding: 20px;`,
      `align-items: center;`,
      `border-radius: 5;`,
      `border-bottom-width: 2px;`,
    ].join(' ');


    const generatedCss = getStyleFromButtonPropsForNative(props as any)
    expect(normalizeCss(generatedCss)).toEqual(normalizeCss(expectedCss));

    expect(generatedCss).toMatchSnapshot();


  });
});
