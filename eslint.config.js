import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react': eslintReact,
      'react-hooks': eslintReactHooks,
      'react-refresh': eslintReactRefresh,
      prettier: prettierPlugin,
    },
  },
  {
    ignores: ['dist', 'node_modules', 'coverage', 'eslint.config.js'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
      },
      parserOptions: {
        project: ['tsconfig.json', 'tsconfig.node.json','tsconfig.app.json'],
      }
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      'no-control-regex': 'off',
      'prefer-const': 'error',
      'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/function-component-definition': ['warn', { namedComponents: 'arrow-function' }],
      'react/self-closing-comp': ['error', { component: true, html: true }],
      'max-params': ['error', 3],
      'max-lines': ['warn', { max: 100 }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'no-debugger': 'warn',
      'arrow-body-style': ['error', 'as-needed'],
      '@typescript-eslint/naming-convention': [
          'error',
          {
              selector: 'class',
              format: ['PascalCase'],
          },
          {
              selector: 'typeAlias',
              format: ['PascalCase'],
          },
          {
              selector: 'interface',
              format: ['PascalCase'],
          },
          {
              selector: 'variable',
              "format": ["camelCase", "UPPER_CASE", "PascalCase"],
              leadingUnderscore: 'allow',
              trailingUnderscore: 'allow',
          },
          {
              selector: 'function',
              format: ['camelCase'],
          },
          { selector: 'enum', format: ['PascalCase'] },
          {
            "selector": "typeLike",
            "format": ["PascalCase"]  // Enforces PascalCase for types and components
          }
      ],
      '@typescript-eslint/no-unused-vars': [
          'error',
          {
              argsIgnorePattern: '^_',
          },
      ],
      'capitalized-comments': [
          'warn',
          'always',
          {
              ignoreConsecutiveComments: true,
          },
      ],
      'padding-line-between-statements': [
          'error',
          { blankLine: 'always', prev: '*', next: 'return' },
          { blankLine: 'always', prev: '*', next: 'block' },
          { blankLine: 'always', prev: 'for', next: '*' },
          { blankLine: 'always', prev: '*', next: 'for' },
          { blankLine: 'always', prev: 'if', next: '*' },
          { blankLine: 'always', prev: '*', next: 'if' },
          {
              blankLine: 'always',
              prev: ['const', 'let', 'var'],
              next: '*',
          },
          {
              blankLine: 'any',
              prev: ['const', 'let', 'var'],
              next: ['const', 'let', 'var'],
          },
          { blankLine: 'always', prev: 'import', next: '*' },
          { blankLine: 'never', prev: 'import', next: 'import' },
          { blankLine: 'always', prev: 'export', next: '*' },
          { blankLine: 'never', prev: 'export', next: 'export' },
          { blankLine: 'always', prev: 'function', next: '*' },
          { blankLine: 'always', prev: '*', next: 'function' },
          { blankLine: 'always', prev: '*', next: 'export' },
      ],
      'lines-between-class-members': ['error', 'always'],
      'lines-around-comment': [
          'error',
          {
              beforeBlockComment: true,
              beforeLineComment: true,
              allowBlockStart: true,
              allowBlockEnd: true,
              allowObjectStart: true,
              allowObjectEnd: true,
              allowArrayStart: true,
              allowArrayEnd: true,
          },
      ],
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/promise-function-async': 'error',
    },
  },
);
