// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    ignores: ["**/*.config.js", "**/*.config.ts"]
  },
  {
    files: ["**/*.ts"],
    rules: {
        "semi":"error",
        "@typescript-eslint/no-unused-vars":"warn"
    },
    
  }
);