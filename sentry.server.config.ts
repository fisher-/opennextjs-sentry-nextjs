import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://e23dd06d7bff44f18d86f33878e67891@o19635.ingest.sentry.io/6173453",
  sendDefaultPii: true,
  _experiments: { enableLogs: true },
  tracesSampleRate: 1.0,
  environment: 'worker',
  normalizeDepth: 5,
});