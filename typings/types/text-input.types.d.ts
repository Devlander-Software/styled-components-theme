/// <reference types="react" />
import { TextInputProps, ViewStyle } from 'react-native';
import { AutoCapitalizeEnum, DataDetectorEnum, KeyBoardTypeEnum, TextContentTypeEnum } from './text-field.types';
import { ContainerStyleProps } from './container-style.props.interface';
import { IoniconNames } from './icon-names.enum';
export interface FormInputGroupProps extends TextInputProps {
    opacity?: number;
    dense?: boolean;
    renderRight?: () => JSX.Element;
    containerStyleProps?: ViewStyle;
    containerStyleFromTheme?: ContainerStyleProps;
    renderBottom?: () => JSX.Element | null;
    dataDetectorTypes?: DataDetectorEnum;
    textContentType?: TextContentTypeEnum;
    keyboardType?: KeyBoardTypeEnum;
    secureTextEntry?: boolean;
    disabled?: boolean;
    errorText?: string | null | boolean | undefined;
    error?: boolean;
    label?: string;
    defaultValue?: string;
    value?: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    underlineColor?: string;
    editable?: boolean;
    autoCapitalize?: AutoCapitalizeEnum | undefined;
    backgroundColor?: string;
    submitting?: boolean;
    onSubmitEditing?: () => void;
}
export declare const FormInputGroupDefaultProps: FormInputGroupProps;
export interface SecureInputProps extends FormInputGroupProps {
    secureTextOnIcon?: IoniconNames | string;
    secureTextOffIcon?: IoniconNames | string;
    securePressOnChange: () => void;
}
export declare const SecureInputDefaultProps: {
    opacity?: number | undefined;
    dense?: boolean | undefined;
    renderRight?: (() => JSX.Element) | undefined;
    containerStyleProps?: ViewStyle | undefined;
    containerStyleFromTheme?: ContainerStyleProps | undefined;
    renderBottom?: (() => JSX.Element | null) | undefined;
    dataDetectorTypes?: DataDetectorEnum | undefined;
    textContentType?: TextContentTypeEnum | undefined;
    keyboardType?: KeyBoardTypeEnum | undefined;
    secureTextEntry?: boolean | undefined;
    disabled?: boolean | undefined;
    errorText?: string | null | boolean | undefined;
    error?: boolean | undefined;
    label?: string | undefined;
    defaultValue?: string | undefined;
    value?: string | undefined;
    onChangeText: (text: string) => void;
    placeholder?: string | undefined;
    underlineColor?: string | undefined;
    editable?: boolean | undefined;
    autoCapitalize?: AutoCapitalizeEnum | undefined;
    backgroundColor?: string | undefined;
    submitting?: boolean | undefined;
    onSubmitEditing?: (() => void) | undefined;
    allowFontScaling?: boolean | undefined;
    autoComplete?: "name" | "url" | "nickname" | "username" | "password" | "additional-name" | "address-line1" | "address-line2" | "birthdate-day" | "birthdate-full" | "birthdate-month" | "birthdate-year" | "cc-csc" | "cc-exp" | "cc-exp-day" | "cc-exp-month" | "cc-exp-year" | "cc-number" | "country" | "current-password" | "email" | "family-name" | "gender" | "given-name" | "honorific-prefix" | "honorific-suffix" | "name-family" | "name-given" | "name-middle" | "name-middle-initial" | "name-prefix" | "name-suffix" | "new-password" | "one-time-code" | "organization" | "organization-title" | "password-new" | "postal-address" | "postal-address-country" | "postal-address-extended" | "postal-address-extended-postal-code" | "postal-address-locality" | "postal-address-region" | "postal-code" | "street-address" | "sms-otp" | "tel" | "tel-country-code" | "tel-national" | "tel-device" | "username-new" | "off" | undefined;
    autoCorrect?: boolean | undefined;
    autoFocus?: boolean | undefined;
    blurOnSubmit?: boolean | undefined;
    caretHidden?: boolean | undefined;
    contextMenuHidden?: boolean | undefined;
    inputMode?: import("react-native").InputModeOptions | undefined;
    maxLength?: number | undefined;
    multiline?: boolean | undefined;
    onBlur?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").TextInputFocusEventData>) => void) | undefined;
    onChange?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").TextInputChangeEventData>) => void) | undefined;
    onContentSizeChange?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").TextInputContentSizeChangeEventData>) => void) | undefined;
    onEndEditing?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").TextInputEndEditingEventData>) => void) | undefined;
    onPressIn?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").NativeTouchEvent>) => void) | undefined;
    onPressOut?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").NativeTouchEvent>) => void) | undefined;
    onFocus?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").TextInputFocusEventData>) => void) | undefined;
    onSelectionChange?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").TextInputSelectionChangeEventData>) => void) | undefined;
    onTextInput?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").TextInputTextInputEventData>) => void) | undefined;
    onScroll?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").TextInputScrollEventData>) => void) | undefined;
    onKeyPress?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").TextInputKeyPressEventData>) => void) | undefined;
    placeholderTextColor?: import("react-native").ColorValue | undefined;
    returnKeyType?: import("react-native").ReturnKeyTypeOptions | undefined;
    enterKeyHint?: import("react-native").EnterKeyHintTypeOptions | undefined;
    selectTextOnFocus?: boolean | undefined;
    selection?: {
        start: number;
        end?: number | undefined;
    } | undefined;
    selectionColor?: import("react-native").ColorValue | undefined;
    style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    textAlign?: "left" | "right" | "center" | undefined;
    testID?: string | undefined;
    inputAccessoryViewID?: string | undefined;
    maxFontSizeMultiplier?: number | null | undefined;
    children?: import("react").ReactNode;
    hitSlop?: import("react-native").Insets | undefined;
    id?: string | undefined;
    onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
    pointerEvents?: "none" | "auto" | "box-none" | "box-only" | undefined;
    removeClippedSubviews?: boolean | undefined;
    nativeID?: string | undefined;
    collapsable?: boolean | undefined;
    needsOffscreenAlphaCompositing?: boolean | undefined;
    renderToHardwareTextureAndroid?: boolean | undefined;
    focusable?: boolean | undefined;
    shouldRasterizeIOS?: boolean | undefined;
    isTVSelectable?: boolean | undefined;
    hasTVPreferredFocus?: boolean | undefined;
    tvParallaxProperties?: import("react-native").TVParallaxProperties | undefined;
    tvParallaxShiftDistanceX?: number | undefined;
    tvParallaxShiftDistanceY?: number | undefined;
    tvParallaxTiltAngle?: number | undefined;
    tvParallaxMagnification?: number | undefined;
    onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onTouchStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onTouchMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onTouchEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onTouchCancel?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onTouchEndCapture?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onPointerEnter?: ((event: import("react-native").PointerEvent) => void) | undefined;
    onPointerEnterCapture?: ((event: import("react-native").PointerEvent) => void) | undefined;
    onPointerLeave?: ((event: import("react-native").PointerEvent) => void) | undefined;
    onPointerLeaveCapture?: ((event: import("react-native").PointerEvent) => void) | undefined;
    onPointerMove?: ((event: import("react-native").PointerEvent) => void) | undefined;
    onPointerMoveCapture?: ((event: import("react-native").PointerEvent) => void) | undefined;
    onPointerCancel?: ((event: import("react-native").PointerEvent) => void) | undefined;
    onPointerCancelCapture?: ((event: import("react-native").PointerEvent) => void) | undefined;
    onPointerDown?: ((event: import("react-native").PointerEvent) => void) | undefined;
    onPointerDownCapture?: ((event: import("react-native").PointerEvent) => void) | undefined;
    onPointerUp?: ((event: import("react-native").PointerEvent) => void) | undefined;
    onPointerUpCapture?: ((event: import("react-native").PointerEvent) => void) | undefined;
    accessible?: boolean | undefined;
    accessibilityActions?: readonly Readonly<{
        name: string;
        label?: string | undefined;
    }>[] | undefined;
    accessibilityLabel?: string | undefined;
    'aria-label'?: string | undefined;
    accessibilityRole?: import("react-native").AccessibilityRole | undefined;
    accessibilityState?: import("react-native").AccessibilityState | undefined;
    'aria-busy'?: boolean | undefined;
    'aria-checked'?: boolean | "mixed" | undefined;
    'aria-disabled'?: boolean | undefined;
    'aria-expanded'?: boolean | undefined;
    'aria-selected'?: boolean | undefined;
    'aria-labelledby'?: string | undefined;
    accessibilityHint?: string | undefined;
    accessibilityValue?: import("react-native").AccessibilityValue | undefined;
    'aria-valuemax'?: number | undefined;
    'aria-valuemin'?: number | undefined;
    'aria-valuenow'?: number | undefined;
    'aria-valuetext'?: string | undefined;
    onAccessibilityAction?: ((event: import("react-native").AccessibilityActionEvent) => void) | undefined;
    importantForAccessibility?: "auto" | "yes" | "no" | "no-hide-descendants" | undefined;
    'aria-hidden'?: boolean | undefined;
    'aria-live'?: "off" | "polite" | "assertive" | undefined;
    'aria-modal'?: boolean | undefined;
    role?: import("react-native").Role | undefined;
    accessibilityLiveRegion?: "none" | "polite" | "assertive" | undefined;
    accessibilityLabelledBy?: string | string[] | undefined;
    accessibilityElementsHidden?: boolean | undefined;
    accessibilityViewIsModal?: boolean | undefined;
    onAccessibilityEscape?: (() => void) | undefined;
    onAccessibilityTap?: (() => void) | undefined;
    onMagicTap?: (() => void) | undefined;
    accessibilityIgnoresInvertColors?: boolean | undefined;
    accessibilityLanguage?: string | undefined;
    clearButtonMode?: "never" | "while-editing" | "unless-editing" | "always" | undefined;
    clearTextOnFocus?: boolean | undefined;
    enablesReturnKeyAutomatically?: boolean | undefined;
    keyboardAppearance?: "light" | "default" | "dark" | undefined;
    passwordRules?: string | null | undefined;
    rejectResponderTermination?: boolean | null | undefined;
    selectionState?: import("react-native").DocumentSelectionState | undefined;
    spellCheck?: boolean | undefined;
    scrollEnabled?: boolean | undefined;
    lineBreakStrategyIOS?: "none" | "standard" | "hangul-word" | "push-out" | undefined;
    cursorColor?: import("react-native").ColorValue | null | undefined;
    importantForAutofill?: "auto" | "yes" | "no" | "noExcludeDescendants" | "yesExcludeDescendants" | undefined;
    disableFullscreenUI?: boolean | undefined;
    inlineImageLeft?: string | undefined;
    inlineImagePadding?: number | undefined;
    numberOfLines?: number | undefined;
    returnKeyLabel?: string | undefined;
    textBreakStrategy?: "simple" | "highQuality" | "balanced" | undefined;
    underlineColorAndroid?: import("react-native").ColorValue | undefined;
    textAlignVertical?: "auto" | "center" | "bottom" | "top" | undefined;
    showSoftInputOnFocus?: boolean | undefined;
    verticalAlign?: "auto" | "bottom" | "top" | "middle" | undefined;
    securePressOnChange: () => void;
    secureTextOffIcon: string;
    secureTextOnIcon: string;
};
//# sourceMappingURL=text-input.types.d.ts.map