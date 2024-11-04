// import pkg from './package.json'
import vuePlugin from "rollup-plugin-vue";
import clear from 'rollup-plugin-clear'
// import scss from 'rollup-plugin-scss'
// import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from '@rollup/plugin-json'
// import replace from '@rollup/plugin-replace'
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import css from "rollup-plugin-css-only";
import nodePolyfills from 'rollup-plugin-polyfill-node';
import ts from '@rollup/plugin-typescript'

export default [{
  input: "./packages/components/index.js",
  external: ["vue"],
  output: [
    {
      dir: "./packages/components/dist",
      format: "cjs",
      entryFileNames: "[name].cjs.js",
      sourcemap: false, // 是否输出sourcemap
    },
    {
      dir: "./packages/components/dist",
      format: "esm",
      entryFileNames: "[name].esm.js",
      sourcemap: false, // 是否输出sourcemap
    },
    {
      dir: "./packages/components/dist",
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
    ts({ module: "ESNext" }),
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
    nodePolyfills(),
  ],
}, {
  input: "./packages/components/hooks.js",
  output: [
    {
      dir: "./packages/components/dist",
      format: "cjs",
      entryFileNames: "[name].cjs.js",
      sourcemap: false, // 是否输出sourcemap
    },
    {
      dir: "./packages/components/dist",
      format: "esm",
      entryFileNames: "[name].js",
      sourcemap: false, // 是否输出sourcemap
    },
    {
      dir: "./packages/components/dist",
      format: "umd",
      entryFileNames: "[name].umd.js",
      name: "ASFOR_utils", // umd模块名称，相当于一个命名空间，会自动挂载到window下面
      sourcemap: false,
      plugins: [terser()],
    },
  ],
  plugins: [
    clear({
      targets: ["./packages/components/dist"],
    }),
    ts({ module: "ESNext" }),
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
    nodePolyfills(),
  ],
}];
