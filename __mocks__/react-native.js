// __mocks__/react-native.js
const Platform = {
  OS: 'ios', // You can change this value in your tests
  select: (obj) => (Platform.OS === 'ios' ? obj.ios : obj.android),
};

module.exports = {
  Platform,
};