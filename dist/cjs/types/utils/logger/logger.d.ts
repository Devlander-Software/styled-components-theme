type SentryConfig = {
    SENTRY_DSN: string;
    SENTRY_ENVIRONMENT?: string;
    SENTRY_RELEASE?: string;
};
export declare function initializeSentry(config: SentryConfig): void;
export declare function logError(error: unknown): void;
export declare function logMessage(message: string): void;
export {};
