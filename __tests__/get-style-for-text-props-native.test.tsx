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

describe('getStyleForTextPropsForNative Function', () => {
    const mockTheme = createThemeForNative({});
    const normalizeCss = (str: string) => str.replace(/\s/g, '');

    it('should generate correct CSS for valid input with theme colors', () => {

        const props: ResolvedThemedTextStylingProps<NativeTheme, number> = {
            theme: mockTheme,
            fontSize: 24,
            textColorFromTheme: 'blackAlpha100',
            fontType: 'Font1',
            fontTypeWeight: 'bold',
            // Add other necessary props here
        };

        const expectedCSS = `
          font-family: Montserrat-Bold;
          color: rgba(0, 0, 0, 1);
          line-height: 30px;
          font-size: 24px;
        `.trim();

        const generatedCSS = getStyleForTextPropsForNative(props as any);

        expect(normalizeCss(generatedCSS)).toEqual(normalizeCss(expectedCSS));
        expect(generatedCSS).toMatchSnapshot();

    });

    it('should prefer the color prop over the textColorFromTheme prop to allow a user to override the color', () => {

        const props: ResolvedThemedTextStylingProps<NativeTheme, number> = {
            theme: mockTheme,
            fontSize: 24,
            textColorFromTheme: 'blackAlpha100',
            fontType: 'Font1',
            color: 'red',
            fontTypeWeight: 'bold',
            // Add other necessary props here
        };

        const expectedCSS = `
            font-family: Montserrat-Bold;
            color: red;
            line-height: 30px;
            font-size: 24px;
        `.trim();

        const generatedCSS = getStyleForTextPropsForNative(props as any);


        expect(normalizeCss(generatedCSS)).toEqual(normalizeCss(expectedCSS));
        expect(generatedCSS).toMatchSnapshot();

    });

    describe('when maxFontSize is specified', () => {

        it('should generate correct CSS with adjusted line-height', () => {

            const props: ResolvedThemedTextStylingProps<NativeTheme, number> = {
                theme: mockTheme,
                fontSize: 16,
                textColorFromTheme: 'blackAlpha100',
                fontType: 'Font1',
                fontTypeWeight: 'bold',
                maxFontSize: 20,
                // Add other necessary props here
            };

            const expectedCSS = `
              font-family: Montserrat-Bold;
              color: rgba(0, 0, 0, 1);
              line-height: 22px;
              font-size: 16px;
            `;

            const generatedCSS = getStyleForTextPropsForNative(props as any);

            expect(normalizeCss(generatedCSS)).toEqual(normalizeCss(expectedCSS));
            expect(generatedCSS).toMatchSnapshot();

        });
    });

});
