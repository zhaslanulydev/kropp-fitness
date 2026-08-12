/** @type {import("stylelint").Config} */
export default {
  extends: ['stylelint-config-standard'],
  rules: {
    'custom-property-pattern': null,
    'selector-not-notation': null,
    'comment-empty-line-before': null,
    'value-keyword-case': null,
    'font-family-name-quotes': null,
    'import-notation': 'string',
  },
}
