module.exports = {
  root: true,
  extends: ['@react-native-community'],
  "rules": {
    "prettier/prettier": "off"
  },
  globals: {
    fetch: true,
    it: true,
    expect: true,
    describe: true,
    __DEV__: true,
    beforeEach: true,
    device: true,
    by: true,
    element: true,
    jest: true,
    jasmine: true,
    beforeAll: true,
    afterAll: true
  }
};
