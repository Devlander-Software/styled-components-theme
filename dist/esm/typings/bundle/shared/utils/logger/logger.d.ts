import type { TColorValue } from '../../types/log-color.types';
export declare const logColoredMessage: (message: string, color: TColorValue) => void;
export declare const logError: (message: string) => void;
export declare const logMessageBasedOnCondition: (message: string, condition: boolean) => void;
