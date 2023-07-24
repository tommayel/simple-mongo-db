module.exports = {
  setupFiles: ["dotenv/config"],
  verbose: true,
  testEnvironment: "node",
  testEnvironmentOptions: {
    url: "http://localhost/",
  },
  setupFilesAfterEnv: ["<rootDir>/testconfig.js"],
  restoreMocks: true,
  testPathIgnorePatterns: ["dist/"],
};
