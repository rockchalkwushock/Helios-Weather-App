import path from 'path';
import webpack from 'webpack';
import packageData from './package.json';

let filename = [packageData.name, packageData.version, 'js'];

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
    resolve: {
    extensions: ['', '.js', '.jsx']
    },
};
