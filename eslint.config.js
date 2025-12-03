import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default tseslint.config(
    {
        ignores: ["dist", "build", "node_modules"],
    },
    {
        files: ["**/*.{ts,tsx,js,jsx}"],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: "./tsconfig.json",
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
                ...globals.es2021,
            },
        },
        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
        },
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommendedTypeChecked,
        ],
        rules: {
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",

            "react-refresh/only-export-components": [
                "warn",
                {allowConstantExport: true},
            ],
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_",
                },
            ],
            "@typescript-eslint/consistent-type-imports": [
                "warn",
                {
                    prefer: "type-imports",
                    disallowTypeAnnotations: false,
                },
            ],
            "@typescript-eslint/no-misused-promises": [
                "error",
                {
                    checksVoidReturn: {
                        attributes: false,
                        properties: true,
                    },
                },
            ],
            "@typescript-eslint/require-await": "error",
            "@typescript-eslint/no-floating-promises": "error",
            "@typescript-eslint/explicit-function-return-type": [
                "warn",
                {
                    allowExpressions: true,
                    allowTypedFunctionExpressions: true,
                },
            ],
            "@typescript-eslint/no-explicit-any": [
                "warn",
                {
                    ignoreRestArgs: true,
                },
            ],
            "@typescript-eslint/no-non-null-assertion": "warn",
            "@typescript-eslint/no-unnecessary-type-assertion": "warn",

            "no-console": ["warn", {allow: ["warn", "error"]}],
            "no-debugger": "error",
            "eqeqeq": ["error", "always", {null: "ignore"}],
            "curly": ["error", "all"],
            "default-case-last": "error",
            "no-duplicate-imports": "error",
            "no-shadow": "off",
            "@typescript-eslint/no-shadow": ["error"],
        },
    },
    {
        files: ["**/*.{js,jsx}"],
        languageOptions: {
            parser: undefined,
            ecmaVersion: "latest",
            sourceType: "module",
            ecmaFeatures: {jsx: true},
            globals: {
                ...globals.browser,
                ...globals.es2021,
            },
        },
        extends: [js.configs.recommended],
    },
    {
        files: ["**/*.{cjs,mjs}", "eslint.config.{js,cjs,mjs}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.node,
                ...globals.es2021,
            },
        },
    }
);
