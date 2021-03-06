const path = require("path");

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: [
    "../components/atoms/**/*.stories.mdx",
    "../components/atoms/**/*.stories.@(js|jsx|ts|tsx)",
    // "../src/components/**/*.stories.mdx",
    // "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
    // "../src/layouts/**/*.stories.mdx",
    // "../src/layouts/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-controls",
  ],
  typescript: {
    reactDocgen: false,
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          // "@emotion/core": toPath("node_modules/@emotion/react"),
          // "emotion-theming": toPath("node_modules/@emotion/react"),
        },
      },
    };
  },
};
