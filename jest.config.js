module.exports = {
  preset: "ts-jest",
  bail: true,
  testEnvironment: "node",
  testMatch: ["<rootDir>/src/**/*.spec.ts"],
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.ts", "!<rootDir>/src/index.ts"],
};
