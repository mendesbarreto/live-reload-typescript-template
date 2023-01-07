/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
    env: {
        node: true,
    },
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'import'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'plugin:import/warnings',
        'plugin:import/errors',
        'airbnb-base',
        'prettier',
        'plugin:prettier/recommended',
    ],
    settings: {
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                project: './tsconfig.json',
            },
            node: {
                paths: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'node_modules'),
                ],
            },
        },
    },
    rules: {
        indent: 'off',
        'import/prefer-default-export': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
    },
};
