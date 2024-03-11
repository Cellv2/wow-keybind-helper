/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    transformIgnorePatterns: [".+\\.scss$"],
    moduleNameMapper: {
        "\\.scss$": "identity-obj-proxy",
        "@src/(.*)": "<rootDir>/src/$1"
    },
    transform: {
        "^.+\\.svg$": "jest-transformer-svg"
    }
};
