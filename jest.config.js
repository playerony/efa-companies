module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.base.json',
      diagnostics: true,
    },
  },
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '@ui': '<rootDir>/src/ui',
    '@ui/(.*)': '<rootDir>/src/ui/$1',
    '@utils': '<rootDir>/src/utils',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@domain': '<rootDir>/src/domain',
    '@domain/(.*)': '<rootDir>/src/domain/$1',
    '@application': '<rootDir>/src/application',
    '@application/(.*)': '<rootDir>/src/application/$1',
    '@infrastructure': '<rootDir>/src/infrastructure',
    '@infrastructure/(.*)': '<rootDir>/src/infrastructure/$1',
  },
  modulePathIgnorePatterns: ['node_modules'],
};
