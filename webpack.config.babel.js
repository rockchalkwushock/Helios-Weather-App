import path from 'path';
import webpack from 'webpack';
import packageData from './package.json';

let minify = process.argv.indexOf('--minify') != -1;
let filename = [packageData.name, packageData.version, 'js'];
let plugins = [];

if (minify) {
    filename.splice(filename.length - 1, 0, 'min');
    plugins.push(new webpack.optimize.UglifyJsPlugin());
}

export default {
    entry: path.resolve(__dirname, packageData.main),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: filename.join('.'),
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            }
        ]
    },
    plugins: plugins,
    resolve: {
    extensions: ['', '.js', '.jsx']
    },
};
