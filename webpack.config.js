let path=require('path');
let HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    entry:'./src/main.js',
    output:{
        path:path.resolve('dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {test:/\.js$/,loader:'babel-loader',exclude:/node_modules/},
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.styl$/,use:['style-loader','css-loader','stylus-loader']},
            {test:/\.(jpe?g|png|gif)$/,use:'url-loader?limit=8192'}

        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'index.html'
        })
    ]

}