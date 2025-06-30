## https://github.com/opennextjs/opennextjs-cloudflare/issues/756

# Setup

1) `npm install`

# Reproduction

1) `npm run preview`
2) The error will appear in the terminal:

```
[wrangler:info] Ready on http://localhost:8787
⎔ Starting local server...
[mf:info] ✨ Parsed 1 valid header rule.
✘ [ERROR] Failed to prepare server TypeError: Cannot read properties of undefined (reading 'require')

      at new Hook
  (/projects/opennextjs-sentry-nextjs/.wrangler/tmp/dev-jmaG8O/worker.js:172949:105)
```