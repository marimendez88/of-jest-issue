/* eslint-disable */
export default {
  displayName: 'third-library-nx',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
    '^.+.vue$': 'vue3-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/third-library-nx',
  transformIgnorePatterns: ['/node_modules/(?!@ionic/core|@stencil/core|ionicons)'],
};
