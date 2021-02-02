const path = require('path');

module.exports = ({ mode }) => {
    return {
        entry: { index: './lib/root.js' },
        devtool: 'inline-source-map',
        output: {
            path: path.resolve('..', 'dist/'),
            filename: 'bundle.js',
        },
        resolve: { extensions: ['.js', '.json'] }
    };
};
