import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "...",
  sendDefaultPii: true,
  _experiments: { enableLogs: true },
  tracesSampleRate: 1.0,
  environment: 'worker',
  normalizeDepth: 5,
});