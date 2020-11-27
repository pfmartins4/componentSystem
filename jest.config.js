const { defaults } = require("jest-config");

module.exports = {
  bail: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  roots: ["src"],
  testMatch: ["<rootDir>/src/**/?(*.)test.{ts,tsx}"],
  moduleNameMapper: {
    "^asstets/(.*)$": ["<rootDir>/src/asstets/$1"],
    "^components/(.*)$": ["<rootDir>/src/components/$1"],
    "^helpers/(.*)$": ["<rootDir>/src/helpers/$1"],
    "^styles/(.*)$": ["<rootDir>/src/styles/$1"],
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  verbose: true,
};
