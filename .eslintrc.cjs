module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 12,
        project: "./tsconfig.json"
    },
    plugins: ["@typescript-eslint", "simple-import-sort"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "airbnb-base",
        "airbnb-typescript/base",
        "prettier",
    ],
    rules: {
        "@typescript-eslint/no-unused-vars": "error",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        'indent': ['error', 4],
    },
    env: {
        browser: true,
        node: true,
        es2021: true
    }
}
