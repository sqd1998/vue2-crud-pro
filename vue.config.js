const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: './', //配置本地引用目录文件,如不配置，默认为`/`

})