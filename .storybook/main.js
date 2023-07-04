/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const path = require('path');

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.fallback = {
      "stream": false
    };
    config.resolve.alias = {
      ...config.resolve.alias,
      'connect-core': path.resolve(__dirname, "../src/components/core"),
      'connect-images': path.resolve(__dirname, "../src/assets/images"),
      // 'connect-components':  paths.appSrc+ '/components',
      // 'connect-core': 'connect-components/core',
      // 'connect-services':  paths.appSrc + '/services/',
      // 'connect-chat': 'connect-components/Chat',
      // 'connect-constants':  paths.appSrc +'/constants/global',
      // 'connect-hooks':  paths.appSrc +'/hooks',
      'connect-theme': path.resolve(__dirname, "../src/theme"),
      // 'connect-app-context':  paths.appSrc +'/context',
      // react: path.resolve('./node_modules/react')
    };

    return config;
  }
};

export default config;
