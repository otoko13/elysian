const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ConcatPlugin = require('webpack-concat-plugin');

const PATHS = {
    INDEX_HTML: path.resolve('src', 'public', 'index.html'),
    APP: path.resolve('src', 'app'),
    DIST: path.resolve('dist'),
    NODE_MODULES: path.resolve('node_modules'),
};

module.exports = {
    entry: {
        app: [
            path.resolve(PATHS.APP, 'app.js'),
        ],
    },

    output: {
        path: PATHS.DIST,
        filename: '[name].js',
        pathinfo: true,
    },

    resolve: {
        modules: [
            path.resolve(__dirname, '../src'),
            path.resolve(__dirname, '../node_modules'),
        ],
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['babel-preset-env'],
                    plugins: ['syntax-dynamic-import', 'angularjs-annotate'],
                },
            },
            {
                test: /\.html$/,
                exclude: PATHS.INDEX_HTML,
                use: [
                    {
                        loader: 'ngtemplate-loader',
                    },
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                            conservativeCollapse: false,
                        },
                    },
                ],
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'file-loader?name=img/[name].[hash].[ext]',
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                // exclude: /node_modules/,
                loader: 'file-loader?limit=1024&name=fonts/[name].[hash].[ext]',
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                // exclude: /node_modules/,
                loader: 'file-loader?limit=1024&name=fonts/[name].[hash].[ext]',
            },
        ],
    },

    plugins: [
        new ConcatPlugin({
            uglify: false,
            name: 'unitegallery-concat',
            outputPath: '',
            injectType: 'prepend',
            fileName: 'unitegallery-concat.js',
            filesToConcat: [
                `${path.join(PATHS.NODE_MODULES, 'unitegallery')}/dist/js/unitegallery.js`,
                `${path.join(PATHS.NODE_MODULES, 'unitegallery')}/dist/themes/default/ug-theme-default.js`,
                `${path.join(PATHS.NODE_MODULES, 'unitegallery')}/dist/themes/tilesgrid/ug-theme-tilesgrid.js`,
            ],
            // filesToConcat: ['jquery', './src/lib/**', './dep/dep.js', ['./some/**', '!./some/excludes/**']],
            attributes: {
                async: false,
            },
        }),
      /**
       * Load the public index.html
       */
        new HtmlWebpackPlugin({
            template: PATHS.INDEX_HTML,
            favicon: 'src/public/favicon.png',
            inject: true,
        }),

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        }),
    ],

};
