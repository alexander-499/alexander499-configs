# @alexander499/configs

This package contains multiple configs I use for most projects. Currently, it only includes an opinionated ESLint configuration though.

## ESLint Config

Its exact config rules can be seen in the source code. It is specifically built for Vue with TypeScript but can be used for other purposes.

Import the config in `eslint.config.ts`:

```ts
import eslintConfig from "@alexander499/configs";
```

Now you can choose between exporting the config directly:

```ts
export default eslintConfig;
```
Or extending the config with custom properties:

```ts
export default [
  ...eslintConfig
  // Custom properties
];
```