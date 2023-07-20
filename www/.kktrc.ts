import webpack from 'webpack';
import { WebpackConfiguration } from 'kkt';
import { mdCodeModulesLoader } from 'markdown-react-code-preview-loader';
import pkg from './package.json';

export default (conf: WebpackConfiguration, env: 'production' | 'development') => {
  conf = mdCodeModulesLoader(conf);
  // Get the project version.
  conf.plugins!.push(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    }),
  );
  conf.module!.exprContextCritical = false;
  if (env === 'production') {
    conf.module!.exprContextCritical = false;
    conf.output = { ...conf.output, publicPath: './' };
    conf.optimization = {
      ...conf.optimization,
      splitChunks: {
        cacheGroups: {
          reactvendor: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react-vendor',
            chunks: 'all',
          },
          babelstandalone: {
            test: /[\\/]node_modules[\\/](@babel[\\/]standalone)[\\/]/,
            name: 'babel-standalone-vendor',
            chunks: 'all',
          },
          prismjs: {
            test: /[\\/]node_modules[\\/](refractor)[\\/]/,
            name: 'refractor-vendor',
            chunks: 'all',
          },
          codemirror: {
            test: /[\\/]node_modules[\\/](@codemirror)[\\/]/,
            name: 'codemirror-vendor',
            chunks: 'all',
          },
          uiw: {
            test: /[\\/]node_modules[\\/](@uiw)[\\/]/,
            name: 'uiw-vendor',
            chunks: 'all',
          },
          parse5: {
            test: /[\\/]node_modules[\\/](parse5)[\\/]/,
            name: 'parse5-vendor',
            chunks: 'all',
          },
        },
      },
    };
  }

  return conf;
};
