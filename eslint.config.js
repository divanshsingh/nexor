import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  {
    root: true,
    files: ['**/*.js', '**/*.jsx'],
    ignores: ['dist', '.eslintrc.cjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        browser: true,
        es2020: true,
      },
    },
    plugins: {
      react,
      reactHooks,
      reactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/prop-types': 'off',
    },
    settings: {
      react: {
        version: '18.2',
      },
    },
  },
];
