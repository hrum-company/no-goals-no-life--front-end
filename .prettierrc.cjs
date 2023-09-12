module.exports = {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  'trailingComma': 'es5',
  'tabWidth': 2,
  'endOfLine': 'auto',
  'semi': false,
  'singleQuote': true,
  'printWidth': 100,
  'proseWrap': 'always',
  
  'importOrder': [
    '^app$',
    '^app/(.*)$',
    '^pages$',
    '^pages/(.*)$',
    '^widgets/(.*)$',
    '^features/(.*)$',
    '^entities/(.*)$',
    '^shared/(.*)$',
    '^[./]',
  ],
  "importOrderSeparation": true,
  "importOrderSortSpecifiers": true
}