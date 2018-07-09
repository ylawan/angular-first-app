const path = require('path');

module.exports = function(options){
    var webConfig = {
        //context: path.resolve(__dirname, 'app'),
        entry: './src/main.ts',
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
                {
                    test: /\.tsx?$/,
                    loaders: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: { configFileName: 'tsconfig.json' }
                    }
                    ]
                }
            ]
        }
    };

    webConfig.devtool= 'source-map';

    if(options){
        if(options.app_environment === 'local'){
            webConfig.mode = 'development';        
        } else if(options.app_environment === 'development'){
                webConfig.mode = 'development';        
        }else if(options.app_environment === 'production'){
            webConfig.mode = 'production';
            webConfig.plugins = [
                new UglifyJsPlugin({
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
              ]
        }else{

        }
    }

    return webConfig;
}