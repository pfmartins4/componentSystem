const { defaults } = require("jest-config");

module.exports = {
  bail: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, "js", "jsx"],
  roots: ["src"],
  testMatch: ["<rootDir>/src/**/__tests__/?(*.)test.{js,jsx}"],
  moduleNameMapper: {
    "^asstets/(.*)$": ["<rootDir>/src/asstets/$1"],
    "^components/(.*)$": ["<rootDir>/src/components/$1"],
    "^helpers/(.*)$": ["<rootDir>/src/helpers/$1"],
    "^styles/(.*)$": ["<rootDir>/src/styles/$1"],
  },
  verbose: true,
};
