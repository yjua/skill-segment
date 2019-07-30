
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { uglify } from "rollup-plugin-uglify";


export default {
  input: './src/app.js',
  output: {
    file: './dist/index.js',
    format: 'iife'
  },
  plugins:[
    // 如果依赖的是 node_modules 里面的库文件，则进行引入
    resolve(),
    // 把commonjs的写法 require 转换为 import 写法
    commonjs(),
    // babel进行转义
    babel({
        exclude: 'node_modules/**' // 只编译我们的源代码
      }),
      uglify()
  ]
};