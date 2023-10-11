module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@dtos': './src/dtos',
            '@hooks': './src/hooks',
            '@context': './src/context',
            '@routes': './src/routes',
            '@requests': './src/requests',
            '@screens': './src/screens',
            '@services': './src/services',
            '@utils': './src/utils',
          }
        },
      ],
    ],
  };
};