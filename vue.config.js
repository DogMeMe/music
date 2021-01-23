const merge = require('webpack-merge')
const tsImportPlugin = require('ts-import-plugin')
const path = require('path')

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    indexPath: 'index.html',
    devServer: {
        proxy: 'http://192.168.2.194:3000'
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '@api': path.resolve(__dirname, 'src/api/')
            }
        }
    },
    chainWebpack: config => {
        config.module
            .rule('ts')
            .use('ts-loader')
            .tap(options => {
                options = merge(options, {
                    transpileOnly: true,
                    getCustomTransformers: () => (
                        {
                            before: [
                                tsImportPlugin({
                                    libraryName: 'vant',
                                    libraryDirectory: 'es',
                                    style: name => {
                                        console.log(name)
                                        return `${name}/style/less`
                                    }
                                })
                            ]
                        }
                    ),
                    compilerOptions: {
                        module: 'es2015'
                    }
                })
                return options
            })
    }
}