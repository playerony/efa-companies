module.exports = {
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.json",
      diagnostics: true,
    },
  },
  roots: ["<rootDir>/src"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {},
  modulePathIgnorePatterns: ["node_modules"],
};
