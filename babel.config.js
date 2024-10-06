module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        allowUndefined: true,
      },
    ],
    [
      'module-resolver',
      {
        alias: {
          '@api': './src/api',
          '@localization': './src/localization',
          '@constants': './src/constants',
          '@components': './src/components',
          '@helpers': './src/helpers',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          types: './src/@types',
          '@store': './src/store',
          '@hooks': './src/hooks',
          '@theme': './src/theme',
          '@assets': './src/assets',
          src: './src',
        },
      },
    ],
  ],
};
