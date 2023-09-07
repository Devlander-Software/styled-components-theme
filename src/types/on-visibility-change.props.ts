export interface OnVisibilityChangeProps {
    onVisibilityChange: (visible: boolean) => void;
    parentVisible?: boolean;
    children?: React.ReactNode;
    loading?: boolean;
    isVisible: boolean;
    setIsVisible: (visible: boolean) => void;
    error?: boolean;
    

}