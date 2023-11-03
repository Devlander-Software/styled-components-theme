module.exports = {
  projects: [
    {
        displayName: 'node',
        testMatch: ['<rootDir>/__tests__/**/*.test.ts', '<rootDir>/__tests__/**/*.test.tsx'],
        transform: {
            '^.+\\.(ts|tsx)$': 'ts-jest',
        },
        moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    },
    {
      displayName: 'react',
      testMatch: ['<rootDir>/src/**/*.test.web.tsx'],
      transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
      },
      moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    },
    {
      displayName: 'react-native',
      preset: "react-native",
      testMatch: ['<rootDir>/src/**/*.test.native.tsx'],
      transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
      },
      moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    }
  ],

};
