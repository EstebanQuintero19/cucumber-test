module.exports = {
  default: {
    format: ['@cucumber/pretty-formatter'],
    requireModule: ['@babel/register'],
    require: ['src/__tests__/features/step_definitions/**/*.js'],
    paths: ['src/__tests__/features/**/*.feature']
  }
};
