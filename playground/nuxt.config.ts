import module from '..'
export default defineNuxtConfig({
  modules: [module],
  compatibilityDate: '2025-10-21',
  lodash: {
    prefix: '_',
    prefixSkip: ['string'],
    upperAfterPrefix: true,
    exclude: ['map'],
    alias: [
      ['camelCase', 'stringToCamelCase'], // => stringToCamelCase
      ['kebabCase', 'stringToKebab'], // => stringToKebab
      ['isDate', 'isLodashDate'] // => _isLodashDate
    ]
  }
})
