module.exports = {
  displayName: 'sample-app',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
    '^.+.vue$': 'vue3-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!@ionic/core|@stencil/core|ionicons)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/sample-app'
};
