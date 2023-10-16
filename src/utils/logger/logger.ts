/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-undef */
import { SENTRY_DSN, SENTRY_ENVIRONMENT, SENTRY_RELEASE } from "@env";
import { Platform } from "react-native";

import {
    InitializationError,
    LogError,
    MessageError,
} from "../../types/error.types";

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

export function initializeSentry(): void {
  try {
    Sentry.init({
      dsn: SENTRY_DSN,
      environment: SENTRY_ENVIRONMENT,
      release: SENTRY_RELEASE,
    });
    isSentryInitialized = true;
  } catch (error) {
    if (error instanceof Error) {
      throw new InitializationError(
        `Failed to initialize Sentry: ${error.message}`,
      );
    } else {
      throw new InitializationError(
        `Failed to initialize Sentry: An unexpected error occurred.`,
      );
    }
  }
}

export function logError(error: unknown): void {
  if (isSentryInitialized) {
    Sentry.captureException(error);
  } else {
    const errorMessage =
      typeof error === "string" ? error : "An unknown error occurred";
    throw new LogError(
      `Sentry not initialized. Original error: ${errorMessage}`,
    );
  }
}

export function logMessage(message: string): void {
  if (isSentryInitialized) {
    Sentry.captureMessage(message);
  } else {
    throw new MessageError(
      `Sentry not initialized. Original message: ${message}`,
    );
  }
}

// ... any other helper functions you want
