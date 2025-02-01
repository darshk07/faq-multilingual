import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ["**/*.{js,mjs,cjs,ts}"] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            indent: ["error", 4], // 4-space indentation like PEP8
            "max-len": ["error", { code: 100 }], // Enforce 100-char line length
            "no-console": "warn", // Warn against console logs
            "@typescript-eslint/explicit-function-return-type": "error", // Require return types
            "no-unused-vars": ["error", { argsIgnorePattern: "^_" }], // Ignore unused args with `_`
            "@typescript-eslint/no-explicit-any": "warn", // Discourage `any` type
            "arrow-body-style": ["error", "as-needed"], // Enforce concise arrow functions
            "prefer-const": "error", // Prefer `const` where possible
        },
    },
];
