import path from 'path';
import webpack from 'webpack';
import { LoaderConfOptions, WebpackConfiguration } from 'kkt';
import lessModules from '@kkt/less-modules';
import rawModules from '@kkt/raw-modules';
import scopePluginOptions from '@kkt/scope-plugin-options';
import pkg from './package.json';
import { mdCodeModulesLoader } from "markdown-react-code-preview-loader";

export default (conf: WebpackConfiguration, env: 'production' | 'development', options: LoaderConfOptions) => {
  conf = lessModules(conf, env, options);
  if (options.bundle) {
    conf.output!.library = '@uiw/react-split';
    conf.externals = {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    };
  } else {
    conf = rawModules(conf, env, { ...options });
    conf = scopePluginOptions(conf, env, {
      ...options,
      allowedFiles: [
        path.resolve(process.cwd(), 'README.md')
      ]
    });
    // Get the project version.
    conf.plugins!.push(new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    }));
    conf = mdCodeModulesLoader(conf);
	
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
  }

  return conf;
}
