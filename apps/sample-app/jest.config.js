module.exports = {
  displayName: 'sample-app',
  preset: '../../jest.preset.js',
  transform: {
    '^.+.vue$': '@vue/vue3-jest',
    '.+.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
  coverageDirectory: '../../coverage/apps/sample-app',
  snapshotSerializers: ['jest-serializer-vue'],
  globals: {
    'ts-jest': {
      tsconfig: 'apps/sample-app/tsconfig.spec.json',
      babelConfig: 'apps/sample-app/babel.config.js',
    },
    'vue-jest': {
      tsConfig: 'apps/sample-app/tsconfig.spec.json',
      babelConfig: 'apps/sample-app/babel.config.js',
    },
  },
};
