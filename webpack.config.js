const path = require("path");

module.exports = {
    entry: "./src/App.js",
    output: {
        path: path.join(__dirname, 'src/contentbuilder'),
        filename: 'index.html'
    },
    module:{
        rules:[{
            loader: 'babel-loader',
            test: '/\.(js|jsx|html)$/',
            exclude: /node_modules/
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
}
