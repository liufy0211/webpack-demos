/*
    webpack.config.js 是 webpack 默认的打包配置文件
    规则：将打包的配置选项放到一个对象中并直接导出
    注意：这里是 Node.js 代码，webpack 不打包配置文件
*/ 

const path = require('path')
module.exports = {
  entry: './src/index.js',  // 默认就是 src/index.js，也可以配置别的
  output: {
    path: path.join(__dirname, './dist'),  // 打包的结果存储目录，必须是一个绝对路径，没有会自动创建
    filename: 'bundle.js'  // 打包的结果文件名，默认就叫 main.js
  },
  /*
    mode 打包模式
    production 生产模式打包，压缩、混淆代码等优化
    development 开发模式打包，没有压缩等优化
    如果没有配置该选项，默认使用production 模式
    推荐开发的时候使用 development ，构建质量不好，构建速度快
    如果要发布上线使用 production ，后见质量好，但是打包速度慢
  */   
  mode: 'production', // production、development
  mode: 'development', // production、development
  /**
   * 对各种资源模块的打包配置 .js、.css、.less、.scss、.vue。。。。
   */
  module: {
    /**
     * 模块的打包规则
     */
    rules: [
      { // 当 test 匹配到以 .css 结尾的文件资源的时候，use 使用 style-loader、css-loader 加载器进行解析处理
        test: /\.css$/,
        use: [
          'style-loader', // 2. 使用 style-loader 生成 style 节点插入页面的 head 中
          'css-loader' // 1. 先使用 css-loader 将 css 转为 JavaScript 模块
        ]
      }
    ]
  }
}
// 以上配置完 npx webpack --config webpack.config.js