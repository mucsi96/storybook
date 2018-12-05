module.exports = {
  presets: [
    ['@babel/preset-env', { shippedProposals: true }],
    '@babel/preset-flow',
    '@babel/preset-react',
  ],
  plugins: [
    ['@babel/plugin-proposal-object-rest-spread', { loose: true, useBuiltIns: true }],
    '@babel/plugin-proposal-export-default-from',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-syntax-dynamic-import',
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
      },
    ],
    ['emotion', { sourceMap: true, autoLabel: true }],
    'babel-plugin-add-react-displayname',
    'babel-plugin-macros',
  ],
  env: {
    test: {
      plugins: ['babel-plugin-require-context-hook', 'babel-plugin-dynamic-import-node'],
    },
  },
  overrides: [
    {
      test: './examples/vue-kitchen-sink',
      presets: [['@babel/preset-env', { shippedProposals: true }], 'babel-preset-vue'],
    },
    {
      test: [
        './addons/storyshots',
        './addons/storysource/src/loader',
        './app/**/src/server/**',
        './lib/codemod',
        './lib/core/src/server',
        './lib/node-logger',
      ],
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: '8.11',
            },
          },
        ],
      ],
    },
  ],
};
