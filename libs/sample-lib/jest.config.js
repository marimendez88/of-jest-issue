module.exports = {
  displayName: 'sample-lib',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+.vue$': '@vue/vue3-jest',
    '.+.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!@ionic)'],
  moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
  coverageDirectory: '../../coverage/libs/sample-lib',
  snapshotSerializers: ['jest-serializer-vue'],
  globals: {
    'ts-jest': {
      tsconfig: 'libs/sample-lib/tsconfig.spec.json',
      babelConfig: 'libs/sample-lib/babel.config.js',
    },
    'vue-jest': {
      tsConfig: 'libs/sample-lib/tsconfig.spec.json',
      babelConfig: 'libs/sample-lib/babel.config.js',
    },
  },
};
