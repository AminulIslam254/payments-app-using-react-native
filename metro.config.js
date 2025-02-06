const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);

const config = {
  // Your custom Metro configuration options can go here
};

// Merge the default config with custom config and wrap it with reanimated configuration
const mergedConfig = mergeConfig(defaultConfig, config);
module.exports = wrapWithReanimatedMetroConfig(mergedConfig);
