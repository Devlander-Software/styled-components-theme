import { FontTypeEnum } from "../../../../../../../herb-design-system-react-native/packages/shared/types/font-type.enum"
import { TextStylePropsWithTheme } from "../../../../../../../herb-design-system-react-native/packages/shared/types/text-style.props"

export const getStyleForTextProps = (props: TextStylePropsWithTheme): string => {
	const { theme, fontSize, textColorFromTheme, fontType, fontTypeWeight, fontWeight, ...restProps } = props

	const handleUnitProps = theme?.handleUnitProps ?? null
	const handleColorFromTheme = theme?.handleColorFromTheme ?? null
	const handleFontSizeProps = theme?.handleFontSizeProps ?? null
	const handleFontFromTheme = theme?.handleFontFromTheme ?? null

	const getColor = () => {
		if (restProps.onDark) {
			return theme.colors.whiteAlpha100
		}
		if (restProps.highlight) {
			return theme.colors.accent
		}
		if (textColorFromTheme && theme.colors[textColorFromTheme]) {
			return theme.colors[textColorFromTheme]
		}
		if (restProps.destructive) {
			return theme.colors.errorColor
		}
		return theme.colors.blackAlpha100
	}

	const cssProperties = [
		fontType && fontTypeWeight && handleFontFromTheme ? `font-family: ${handleFontFromTheme(fontType, fontTypeWeight, theme)};` : `font-family: ${handleFontFromTheme(FontTypeEnum.Font1, "bold", theme)};`,
		restProps.textDecorationLine && restProps.textDecorationLine !== "none" ? `text-decoration-line: ${restProps.textDecorationLine};` : null,
		fontSize && handleFontSizeProps ? `font-size: ${handleFontSizeProps(fontSize)};` : null,
		textColorFromTheme && handleColorFromTheme ? `color: ${handleColorFromTheme(textColorFromTheme, 1, theme)};` : `color: ${getColor()};`,
		restProps.flex ? `flex: ${restProps.flex};` : null,
		fontWeight ? `font-weight: ${fontWeight};` : null,
		restProps.paddingLeft ? `padding-left: ${handleUnitProps(restProps.paddingLeft)};` : null,
		restProps.paddingTop ? `padding-top: ${handleUnitProps(restProps.paddingTop)};` : null,
		restProps.fontStyle ? `font-style: ${restProps.fontStyle};` : null,
		restProps.paddingRight ? `padding-right: ${handleUnitProps(restProps.paddingRight)};` : null,
		restProps.lineHeight ? `line-height: ${handleUnitProps(restProps.lineHeight)};` : fontSize ? `line-height: ${handleUnitProps(fontSize + 6)};` : null,
		restProps.width ? `width: ${handleUnitProps(restProps.width)};` : null,
		restProps.textAlign ? `text-align: ${restProps.textAlign};` : null,
		restProps.marginTop ? `margin-top: ${handleUnitProps(restProps.marginTop)};` : null,
		restProps.marginBottom ? `margin-bottom: ${handleUnitProps(restProps.marginBottom)};` : null,
		restProps.opacity ? `opacity: ${restProps.opacity};` : null,
		restProps.marginLeft ? `margin-left: ${handleUnitProps(restProps.marginLeft)};` : null,
		restProps.marginRight ? `margin-right: ${handleUnitProps(restProps.marginRight)};` : null,
		restProps.shadowOpacity ? `text-shadow-opacity: ${restProps.shadowOpacity};` : null,
		restProps.shadowColor ? `text-shadow-color: ${restProps.shadowColor};` : null,
		(restProps.shadowOffsetX || restProps.shadowOffsetY) ? `text-shadow-offset: ${handleUnitProps(restProps.shadowOffsetX || 0)} ${handleUnitProps(restProps.shadowOffsetY || 0)};` : null,
		restProps.shadowRadius ? `text-shadow-radius: ${handleUnitProps(restProps.shadowRadius)};` : null,
		restProps.textTransform ? `text-transform: ${restProps.textTransform};` : null,
	]

	const css = cssProperties.filter(Boolean).join("\n")
	console.log("css", css)


	return css
}
