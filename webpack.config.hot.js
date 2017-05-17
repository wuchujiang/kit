var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html
var pxtorem = require('postcss-pxtorem');

//定义地址
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src'); //__dirname 中的src目录，以此类推
var APP_FILE = path.resolve(APP_PATH, 'app'); //根目录文件app.jsx地址
var BUILD_PATH = path.resolve(ROOT_PATH, '/build'); //发布文件所存放的目录

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        app: ['webpack-hot-middleware/client', APP_FILE]
    },
    output: {
        publicPath: '/', //编译好的文件，在服务器的路径,这是静态资源引用路径
        path: BUILD_PATH, //发布文件地址
        filename: '[name].js', //编译后的文件名字
        chunkFilename: '[name].[chunkhash:5].min.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /^node_modules$/,
            loaders: [
                'react-hot', 'babel', 'eslint-loader'
            ],
            include: [APP_PATH]
        }, {
            test: /\.scss$/,
            exclude: /^node_modules$/,
            loader: ExtractTextPlugin.extract('style', ['css', 'postcss', 'sass']),
            include: [APP_PATH]

        }, {
            test: /\.css$/,
            exclude: /^node_modules$/,
            loader: ExtractTextPlugin.extract('style', ['css', 'postcss']),
            include: [APP_PATH]
        }, {
            test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
            exclude: /^node_modules$/,
            loader: 'file-loader?name=[name].[ext]',
        }, {
            test: /\.(png|jpg|gif)$/,
            exclude: /^node_modules$/,
            loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
            //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
        }, {
            test: /\.jsx$/,
            exclude: /^node_modules$/,
            loaders: [
                'react-hot', 'jsx', 'babel', 'eslint-loader'
            ],
            include: [APP_PATH]
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            //process.argv：当前进程的命令行参数数组。 process.env：指向当前shell的环境变量，比如process.env.HOME。
            'process.env': {
                NODE_ENV: JSON.stringify('development') //定义编译环境
            }
        }),
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            filename: 'index.html', //生成的html存放路径，相对于 path
            template: './src/template/index.html', //html模板路径
            hash: false,
            inject: 'body'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('[name].css')

    ],
    resolve: {
        modulesDirectories: [
            'node_modules', path.join(__dirname, '../node_modules')
        ],
        extensions: [
            '',
            '.js',
            '.jsx',
            '.css',
            '.scss',
            '.json'
        ], //后缀名自动补全
        root: [
            path.resolve('src'),
            __dirname
        ]

    },
    postcss: ()=> [require('autoprefixer')]
};