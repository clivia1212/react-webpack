学习 jspang.com react全家桶教程

webpack 3.x 教程

2019/02/26
webpack 4.x

遇到问题：
1. One CLI for webpack must be installed
npm install webpack-cli -D
2. configuration.module has an unknown property 'loaders'
模块写法更新
loaders ==> rules 详见webpack.config.js 或官方文档
3. babel-loader@8 requires Babel 7.x
npm install babel-loader@7

-------------------------------------------------------------------------

Router中的属性和路由模式
basename属性：增加一级导航目录
<Router basename="demo">
以前导航目录 http://localhost:3333/c  ==> http://localhost:3333/demo/c

forceRefresh属性
开启或关闭React Router； 关闭的话就是真实去服务器请求信息
应用场景：大型项目，在服务器跳转和ReactRotuer切换时使用
比如做一个APP活动页面 ，第一次请求去服务器端请求整个页面，然后请求后，整个页面在本地缓存，生成React Router本地单页应用

五种路由方式：
BrowserRouter: 浏览器的路由方式
HashRouter： 在路径前加入#成为一个哈希值，Hash模式好处在于，再也不会因为我们刷新而找不到对应的路径
MemeryRouter： 不存储history，所有路由过程保存在内存中，不能进行前进后退，因为地址栏没有发生任何变化
NativeRouter：经常配合ReactNative使用，多用于移动端
StaticRouter： 设置静态路由，需要和后台服务器配合设置，比如设置服务端渲染时使用

-------------------------------------------------------------------------

Prompt
  MemeryRouter下无效
message：文本提示
when：控制Prompt是否生效

-------------------------------------------------------------------------

总结：
react webpack react-router 简单配置以及使用