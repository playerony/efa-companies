module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json',
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
    '@ui/(.*)': '<rootDir>/src/ui/$1',
    '@ui': '<rootDir>/src/ui',
    '@application/(.*)': '<rootDir>/src/application/$1',
    '@application': '<rootDir>/src/application',
    '@infrastructure/(.*)': '<rootDir>/src/infrastructure/$1',
    '@infrastructure': '<rootDir>/src/infrastructure',
  },
  modulePathIgnorePatterns: ['node_modules'],
};
