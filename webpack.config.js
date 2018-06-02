const path = require('path');

// entry point of app / app.js in src
// where to output?

console.log(path.join(__dirname, 'public'));

//** Config info for webpack:
module.exports = {
    entry: `./src/app.js`,
    mode: "development",
    output: {
        path: path.join(__dirname, `public`),
        filename: `bundle.js`
    },
    //loader
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, `public`),
        historyApiFallback: true
    }
};
