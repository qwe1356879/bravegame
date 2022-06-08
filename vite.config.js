import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
   publicPath:"./", // 可以设置成相对路径，这样所有的资源都会被链接为相对路径，打出来的包可以被部署在任意路径
    outputDir:"dist", //打包时生成的生产环境构建文件的目录
    assetsDir: 'static', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    runtimeCompiler: true,
  // server: {
  //   post:"0.0.0.0",
  //   port: '3000',//端口号
  //   // https: "true",
  //   cros:true,
  //   proxy: { // 本地开发环境通过代理实现跨域
  //     // 正则表达式写法
     
  //     '': {
  //       target: '', // 后端服务实际地址
  //       changeOrigin: true, //开启代理
  //       secure: false,  
  //       rewrite: path => path.replace(/^\/api/, '')
  //     }
  //   }
  // },

})
