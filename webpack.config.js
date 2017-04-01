const LIB_DIR =  `${__dirname}/src`;
const PLAYGROUND_DIR =  `${__dirname}/playground`;
const DIST_DIR = `${__dirname}/dist`;
module.exports = {
    entry: {
        'json-inspector': `${LIB_DIR}/JsonInspector.js`,
        'playground': `${PLAYGROUND_DIR}/App.js`
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    output: {
        filename: '[name].js',
        path: DIST_DIR
    }
};
