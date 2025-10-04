export default {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.js'],
  transform: {},
  moduleNameMapper: {
    '^(\.{1,2}/.*)\.js$': '$1',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
