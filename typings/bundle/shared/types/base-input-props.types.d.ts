export interface BaseTextInputProps {
    renderBottom?: () => JSX.Element | null;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
    disabled?: boolean;
    errorText?: string | null | boolean | undefined;
    error?: boolean;
    label?: string;
    defaultValue?: string;
    value?: string;
    placeholder?: string;
    underlineColor?: string;
    onSubmitEditing: (e: any) => void;
    editable?: boolean;
    backgroundColor?: string;
    submitting?: boolean;
}
