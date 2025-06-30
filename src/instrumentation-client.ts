import * as Sentry from "@sentry/nextjs";

Sentry.init({});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;