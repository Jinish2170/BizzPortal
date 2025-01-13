module.exports = {
    presets: [
      '@babel/preset-env',
      ['@babel/preset-react', { runtime: 'automatic' }]
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-syntax-dynamic-import',
      'babel-plugin-transform-import-css'
    ],
    env: {
      production: {
        only: ['src'],
        plugins: [
          ['transform-react-remove-prop-types', { removeImport: true }],
          '@babel/plugin-transform-react-inline-elements',
          '@babel/plugin-transform-react-constant-elements'
        ]
      },
      test: {
        plugins: ['@babel/plugin-transform-modules-commonjs']
      }
    }
  };