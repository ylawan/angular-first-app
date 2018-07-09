
module.exports = require("./web-config/web.local.config");



// const path = require('path');

// module.exports = {
//   entry: './src/main.ts',
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   },
//   resolve: {
//     extensions: ['.ts', '.js', '.json']
//   },
//   module :{
//     rules: [
//         {
//           test: /\.scss$/,
//           exclude: /node_modules/,
//           use: [
//             // 'to-string-loader', //using raw loader is same as using this 
//             // 'css-loader',  // and this combined
//             'raw-loader',
//             'sass-loader'
//           ]
//         },
//         {
//             test: /\.tsx?$/,
//             loaders: [
//               {
//                 loader: 'awesome-typescript-loader',
//                 options: { configFileName: 'tsconfig.json' }
//               }
//             ]
//         }
//     ]
//   }
// };