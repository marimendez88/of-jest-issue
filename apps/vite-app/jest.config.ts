module.exports = {
  displayName: 'vite-app',
  preset: '../../jest.preset.ts',
  transform: {
    '^.+.vue$': 'vue3-jest',
    '.+.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
  coverageDirectory: '../../coverage/apps/vite-app',
  snapshotSerializers: ['jest-serializer-vue'],
  globals: {
    'ts-jest': {
      tsconfig: 'apps/vite-app/tsconfig.spec.json',
    },
    'vue-jest': {
      tsConfig: 'apps/vite-app/tsconfig.spec.json',
    },
  },
};
