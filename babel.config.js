module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module:react-native-dotenv'],
    'react-native-reanimated/plugin', // Ensure this is at the END
  ],
};
