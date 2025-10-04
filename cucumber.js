module.exports = {
  default: {
    format: ['@cucumber/pretty-formatter'],
    require: ['src/__tests__/features/step_definitions/*.js'],
    paths: ['src/__tests__/features/*.feature']
  }
}
