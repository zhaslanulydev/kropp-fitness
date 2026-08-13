/** @type {import("stylelint").Config} */
export default {
  extends: ['stylelint-config-standard'],
  rules: {
    'custom-property-pattern': null,
    'selector-not-notation': null,
    'comment-empty-line-before': null,
    'value-keyword-case': null,
    'font-family-name-quotes': null,
    'custom-property-empty-line-before': null,
    'at-rule-empty-line-before': null,
    'media-feature-range-notation': null,
    'no-descending-specificity': null,
    'property-no-vendor-prefix': null,
    'selector-attribute-quotes': null,
    'import-notation': 'string',
  },
}
