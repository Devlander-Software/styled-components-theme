module.exports = {
  projects: [
    {
      displayName: 'node',
      testMatch: [
        '<rootDir>/__tests__/**/*.test.ts',
        '<rootDir>/__tests__/**/*.test.tsx',
      ],
      transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
      },
      moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    }
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native-responsive-fontsize)/)',
    'node_modules/(?!(react-native-iphone-x-helper)/)', // Add the missing closing parenthesis here
  ],
  globals: {
    'ts-jest': {
      tsconfig: './jest.tsconfig.json',
      allowESM: true
    }
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  verbose: true
};
