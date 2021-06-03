const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin')
const webpack =require('webpack')
const NODE_ENV = process.env.NODE_ENV === 'development' ? 'development' :process.env.VUE_APP_ENV_CONFIG

module.exports = {

    outputDir: "dist", // where to put static assets (js/css/img/font/...) // 是否在保存时使用‘eslint-loader’进行检查 // 有效值: true | false | 'error' // 当设置为‘error’时，检查出的错误会触发编译失败
  lintOnSave: true, // 使用带有浏览器内编译器的完整构建版本 // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  runtimeCompiler: false, // babel-loader默认会跳过`node_modules`依赖. // 通过这个选项可以显示转译一个依赖
  transpileDependencies: [
    /* string or regex */
  ], // 是否为生产环境构建生成sourceMap?

  productionSourceMap: false, // 调整内部的webpack配置. // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: (config)=>{
    /* 添加分析工具*/
    if (process.env.NODE_ENV === 'production') {
        if (process.env.npm_config_report) {
            config
                .plugin('webpack-bundle-analyzer')
                .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
                .end()
            config.plugins.delete('prefetch')
        }
    }
},
  configureWebpack:  (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new UglifyJsWebpackPlugin({
          uglifyOptions: {
              compress: {
                  drop_debugger: true,
                  drop_console: true,  //生产环境自动删除console
              },
              warnings: false,
          },
          sourceMap: false,
          parallel: true,//使用多进程并行运行来提高构建速度。默认并发运行数：os.cpus().length - 1。
      }),

      new CompressionPlugin({
        test: /\.js$|\.html$|\.css$|\.jpg$|\.jpeg$|\.png/, // 需要压缩的文件类型
        threshold: 10240, // 归档需要进行压缩的文件大小最小值，这里是10K以上的进行压缩
        deleteOriginalAssets: false // 是否删除原文件
      })
    
      )   
      
    }
}, // CSS 相关选项
//   css: {
//     // 将组件内部的css提取到一个单独的css文件（只用在生产环境）
//     // 也可以是传递给 extract-text-webpack-plugin 的选项对象
//     extract: true, // 允许生成 CSS source maps?
//     sourceMap: false, // pass custom options to pre-processor loaders. e.g. to pass options to // sass-loader, use { sass: { ... } }
//     loaderOptions: {}, // Enable CSS modules for all css / pre-processor files. // This option does not affect *.vue files.
//     modules: false
//   }, // use thread-loader for babel & TS in production build // enabled by default if the machine has more than 1 cores

  parallel: require("os").cpus().length > 1, // PWA 插件相关配置 // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa

  pwa: {}, // configure webpack-dev-server behavior
  devServer: {
    open: process.platform === "darwin",
    disableHostCheck: false,
    host: "0.0.0.0",
    port: 8080,
    https: false,
    hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    proxy: null // string | Object
    // before: app => {}
  }, // 第三方插件配置

  pluginOptions: {
   
  }
//   context: path.resolve(__dirname, '../'),
//   entry: {
//     app: ['babel-polyfill', 'lib-flexible', './src/main.js']
//   },
//   externals: { // <-添加
//     vue: 'Vue',
//     vuex: 'Vuex',
//     'vue-router': 'VueRouter'
//   }

   

    // configureWebpack: {
    //     　externals: {
    //     　　　　'echarts': 'echarts' // 配置使用CDN
    //     　}
    // }
   
        
}