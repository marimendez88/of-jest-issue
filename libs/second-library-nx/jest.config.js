module.exports = {
  displayName: 'second-library-nx',
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
  coverageDirectory: '../../coverage/libs/second-library-nx',
};
