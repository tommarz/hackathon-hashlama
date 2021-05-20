module.exports = {
    devServer: {
        watchOptions: {
            poll: true
        },
        proxy: {
            '^/api': {
                target: 'http://localhost:5000',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: { '^/api': '/' },
            },
        },
    }
}
