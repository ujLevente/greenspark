module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
    },
    plugins: ['react', '@typescript-eslint', 'prettier', 'unused-imports'],
    rules: {
        '@typescript-eslint/no-use-before-define': 0,
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: false,
                optionalDependencies: false,
                peerDependencies: false,
            },
        ],
        'react/react-in-jsx-scope': 0,
        'import/prefer-default-export': 0,
        'no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
        'import/order': [
            'error',
            {
                groups: [
                    'builtin',
                    ['external', 'unknown', 'internal'],
                    'parent',
                    'sibling',
                    'index',
                ],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
    },
};
