module.exports = {
  clearMocks: true,
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: ['**/test/**/*.test.(ts|js)'],
  moduleFileExtensions: ['ts', 'js'],
  testEnvironment: 'node',
};
