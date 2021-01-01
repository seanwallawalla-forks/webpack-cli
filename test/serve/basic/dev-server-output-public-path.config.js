const WebpackCLITestPlugin = require('../../utils/webpack-cli-test-plugin');

module.exports = {
    mode: 'development',
    devtool: false,
    output: {
        publicPath: '/my-public-path/',
    },
    devServer: {
        publicPath: '/dev-server-my-public-path/',
    },
    plugins: [new WebpackCLITestPlugin(['mode', 'output'], false, 'hooks.compilation.taps')],
};
