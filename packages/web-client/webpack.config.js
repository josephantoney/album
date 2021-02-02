const path = require('path');

module.exports = ({ mode }) => {
    // const pathToMainCss = require.resolve('./app/main.css');
    return {
        entry: { index: './lib/root.js' },
        devtool: 'inline-source-map',
        output: {
            path: path.resolve('..', 'dist/'),
            filename: 'bundle.js',
        },
        resolve: { extensions: ['.js', '.json'] },
        module: {
            rules: [
                // {
                //     test: /\.tsx?$/,
                //     exclude: /node_modules/,
                //     use: ['ts-loader'],
                // },
                {
                    test: /\.less$/,
                    use: [
                        // {
                        //     loader: 'style-loader',
                        // },
                        
                        {
                            loader: 'file-loader',
                            options: {
                                name: "album.css",
                            },
                        },
                        {
                            loader: 'extract-loader',
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    compileType: 'module',
                                    mode: 'local',
                                    auto: true,
                                    exportGlobals: true,
                                    localIdentName:
                                        '[path][name]__[local]--[hash:base64:5]',
                                    localIdentContext: path.resolve(
                                        __dirname,
                                        'lib'
                                    ),
                                    localIdentHashPrefix: 'album',
                                    namedExport: true,
                                    exportLocalsConvention: 'camelCase',
                                    exportOnlyLocals: false,
                                },
                            },
                        },
                        {
                            loader: 'less-loader',
                        },
                    ],
                },
            ],
        },
    };
};
