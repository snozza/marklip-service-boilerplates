module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
      '^.+\\.ts?$': 'ts-jest'
  },
  moduleNameMapper: {
    '@(config)': '<rootDir>/config.ts',
    '@(functions/.*)': '<rootDir>/src/$1',
    '@(libs/.*)': '<rootDir>/src/$1',
  },
  moduleDirectories: ['node_modules', 'src']
}
