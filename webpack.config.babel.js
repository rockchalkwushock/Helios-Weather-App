import path from 'path';
import webpack from 'webpack'; // eslint-disable-line
import packageData from './package.json';

let filename = [packageData.name, packageData.version, 'js']; // eslint-disable-line

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
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
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
