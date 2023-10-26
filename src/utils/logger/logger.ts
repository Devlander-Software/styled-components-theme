/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-undef */
import { Platform } from "react-native";

import {
  InitializationError,
  LogError,
  MessageError,
} from "../../types/error.types";

type SentryConfig = {
  SENTRY_DSN: string;
  SENTRY_ENVIRONMENT?: string;
  SENTRY_RELEASE?: string;
};

type SentryType = {
  init: (config: {
    dsn: string;
    environment?: string;
    release?: string;
  }) => void;
  captureException: (error: any) => void;
  captureMessage: (message: string) => void;
};

let Sentry: SentryType;
let isSentryInitialized = false;

if (Platform.OS === "web") {
  Sentry = require("@sentry/browser") as SentryType;
} else {
  Sentry = require("@sentry/react-native") as SentryType;
}

export function initializeSentry(config: SentryConfig): void {
  try {
    Sentry.init({
      dsn: config.SENTRY_DSN,
      environment: config.SENTRY_ENVIRONMENT,
      release: config.SENTRY_RELEASE,
    });
    isSentryInitialized = true;
  } catch (error) {
    const initError = new InitializationError(
      `Failed to initialize Sentry: ${
        error instanceof Error ? error.message : "An unexpected error occurred."
      }`,
    );
    console.warn(initError.message);
  }
}

export function logError(error: unknown): void {
  if (isSentryInitialized) {
    Sentry.captureException(error);
  } else {
    const errorMessage = `Sentry not initialized. Original error: ${
      typeof error === "string" ? error : "An unknown error occurred"
    }`;
    const logErr = new LogError(errorMessage);
    console.warn(logErr.message);
  }
}

export function logMessage(message: string): void {
  if (isSentryInitialized) {
    Sentry.captureMessage(message);
  } else {
    const msgError = new MessageError(
      `Sentry not initialized. Original message: ${message}`,
    );
    console.warn(msgError.message);
  }
}

// ... any other helper functions you want
