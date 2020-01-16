module.exports = {
    devServer:{
        host:'0.0.0.0',
        proxy:{
            '/api':{
                ws:false,
                target:'https://douban-api.uieee.com/v2',
                changeOrigin: true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}