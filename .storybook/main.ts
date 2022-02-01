import { StorybookConfig } from '@storybook/core-common';

const config: StorybookConfig = {
  framework: '@storybook/react',
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  core: {
    builder: 'storybook-builder-vite',
  },
  addons: ['@storybook/addon-essentials', '@storybook/addon-links'],
  features: {
    storyStoreV7: true,
  },
};

export default config;
