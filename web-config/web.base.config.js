const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsWebpackPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = function(options){
    var webConfig = {
        //context: path.resolve(__dirname, 'app'),
        entry: ['./src/main.ts', './src/scss/main.scss'],
        // entry: ['./src/main.ts'],
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, '../dist')
        },
        resolve: {
            extensions: ['.ts', '.js', '.json']
        },
        module :{
            rules: [
                {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    // 'to-string-loader', //using raw loader is same as using this 
                    // 'css-loader',  // and this combined
                    'raw-loader',
                    'sass-loader'
                ]
                },
                { // regular css files
                    test: /\.(sa|sc|c)ss$/,
                    include: [
                        path.resolve(__dirname, "../src/scss")
                    ],
                    use: [
                        {
                          loader: MiniCssExtractPlugin.loader,
                          options: {
                            publicPath: path.resolve(__dirname, "../src/scss")
                          }
                        },
                        'css-loader',
                        'sass-loader'
                      ]
                },
                {
                    test: /\.tsx?$/,
                    loaders: [
                        {
                            loader: 'awesome-typescript-loader',
                            options: { configFileName: 'tsconfig.json' }
                        }
                    ],
                    exclude: [
                        /\.(spec|e2e|e2e-helper)\.tsx?$/
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: "../dist/[name].css",
                // chunkFilename: "[id].css"
            })
        ],
        optimization: {
            minimizer: [
            //   new UglifyJsWebpackPlugin({
            //     cache: true,
            //     parallel: true,
            //     sourceMap: true // set to true if you want JS source maps
            //   }),
              new OptimizeCSSAssetsPlugin({})
            ]
          },
    };

    webConfig.devtool= 'source-map';

    if(options){
        if(options.app_environment === 'local'){
            webConfig.mode = 'development';        
        } else if(options.app_environment === 'development'){
                webConfig.mode = 'development';        
        }else if(options.app_environment === 'production'){
            webConfig.mode = 'production';
            webConfig.plugins.push([
                new UglifyJsWebpackPlugin({
                    uglyOptions: {
                        compress: true,
                        output: {
                            beautify: false
                        },
                        mangle:{
                            keep_fnames: true
                        }
                    },
                    cache: true,
                    parallel: true,
                    sourceMap: true // set to true if you want JS source maps
                  })
              ]);
        }else{

        }
    }

    return webConfig;
}