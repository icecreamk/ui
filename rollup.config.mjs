// import pkg from './package.json'
import vuePlugin from "rollup-plugin-vue";
// import scss from 'rollup-plugin-scss'
// import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from '@rollup/plugin-json'
// import replace from '@rollup/plugin-replace'
import babel from "@rollup/plugin-babel";
// import ts from 'rollup-plugin-typescript2'
import { terser } from "rollup-plugin-terser";
import css from "rollup-plugin-css-only";

export default {
  input: "./packages/components/components.js",
  external: ["vue"],
  output: [
    {
      dir: "dist",
      format: "cjs",
      entryFileNames: "[name].cjs.js",
      sourcemap: false, // 是否输出sourcemap
    },
    {
      dir: "dist",
      format: "esm",
      entryFileNames: "[name].esm.js",
      sourcemap: false, // 是否输出sourcemap
    },
    {
      dir: "dist",
      format: "umd",
      entryFileNames: "[name].umd.js",
      name: "ASFOR_utils", // umd模块名称，相当于一个命名空间，会自动挂载到window下面
      sourcemap: false,
      plugins: [terser()],
    },
  ],
  plugins: [
    vuePlugin({
      css: true,
    }),
    css({ output: "style.css" }),
    babel({
      exclude: "node_modules/**",
      extensions: [".js", ".jsx", ".vue"],
      babelHelpers: "bundled",
    }),
    resolve({
      extensions: [".vue", ".jsx", ".js"],
    }),
    commonjs(),
    json(),
  ],
};
