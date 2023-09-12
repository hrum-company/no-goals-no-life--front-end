module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    "prettier",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', '.prettierrc.cjs', '.tsconfig.json', 'vite.config.json'],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react-refresh',
    'react',
    'import',
    'prettier'
  ],
  rules: {
    'react-refresh/only-export-components': [
      1,
      { allowConstantExport: true },
    ],
    
    'prettier/prettier': ["error", { usePrettierrc: true }],

    'no-restricted-imports': [
      2,
      {
        patterns: [
          "app/*/**",
          "pages/*/**",
          "widgets/*/**",
          "features/*/**",
          "entities/*/**",
          "shared/*/*/**",

          "../**/app",
          "../**/pages",
          "../**/widgets",
          "../**/features",
          "../**/entities",
          "../**/shared",
        ]
      }
    ],
    'import/no-restricted-paths': [
      2,
      {
        'zones': [
          // pages
          {
            'target': 'pages',
            'from': 'app',
          },

          // widgets
          {
            'target': 'widgets',
            'from': 'app',
          },
          {
            'target': 'widgets',
            'from': 'pages',
          },

          // features
          {
            'target': 'features',
            'from': 'app',
          },
          {
            'target': 'features',
            'from': 'pages',
          },
          {
            'target': 'features',
            'from': 'widgets',
          },

          // entities
          {
            'target': 'entities',
            'from': 'app',
          },
          {
            'target': 'entities',
            'from': 'pages',
          },
          {
            'target': 'entities',
            'from': 'widgets',
          },
          {
            'target': 'entities',
            'from': 'features',
          },

          // shared
          {
            'target': 'shared',
            'from': 'app',
          },
          {
            'target': 'shared',
            'from': 'pages',
          },
          {
            'target': 'shared',
            'from': 'widgets',
          },
          {
            'target': 'shared',
            'from': 'features',
          },
          {
            'target': 'shared',
            'from': 'entities',
          },
        ]
      }
    ],
    
    'import/prefer-default-export': [0],
    'import/no-unresolved': [0],
    'import/named': [0],

    'react/jsx-uses-react': [0],
    'react/react-in-jsx-scope': [0],
    'react/require-default-props': [0],

    '@typescript-eslint/no-unused-vars': [1],
    '@typescript-eslint/ban-types': [2],
    '@typescript-eslint/no-explicit-any': [2],

    'jsx-a11y/no-static-element-interactions': [0],
    'jsx-a11y/click-events-have-key-events': [0],
    'jsx-a11y/no-noninteractive-element-interactions': [0],

    'no-console': [1],
    'no-param-reassign': [2, { props: false }],
    'no-unused-vars': [0],
    "@typescript-eslint/no-unused-vars": [1],

    'end-of-line': [0],
    'linebreak-style': [0],
  },
}