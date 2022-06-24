import {
  nodeResolve
} from "@rollup/plugin-node-resolve";

import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import {
  babel
} from "@rollup/plugin-babel";
import {
  terser
} from "rollup-plugin-terser";
import filesize from "rollup-plugin-filesize";
import {
  visualizer
} from "rollup-plugin-visualizer";
import typescript from 'rollup-plugin-typescript2'


const plugins = [
  nodeResolve({
    jsnext: true,
    modulesOnly: true,
  }),
  commonjs({
    include: "node_modules/**",
  }),
  babel({
    babelHelpers: "runtime",
    babelrc: false,
    presets: [
      ["@babel/preset-env", {
        modules: false,
        loose: true
      }],
    ],
    plugins: [
      "@babel/plugin-transform-runtime",
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-private-property-in-object",
      "@babel/plugin-proposal-private-methods",
    ].filter(Boolean),
  }),

];

const devPlugins = plugins.concat([
  replace({
    "process.env.NODE_ENV": JSON.stringify("development"),
    preventAssignment: true,
  }),
]);

const prodPlugins = plugins.concat([
  replace({
    "process.env.NODE_ENV": JSON.stringify("production"),
    preventAssignment: true,
  }),
  terser(),
  filesize(),
  visualizer(),
  typescript({
    // rollupCommonJSResolveHack: false,
    outDir: './types',
    clean: true,
  })
]);

const base = {
  input: "package/index.ts",
};

const output = {
  exports: "named",
};

const makeOutput = (config) => Object.assign({}, output, config);

const withBase = (config) => Object.assign({}, base, config);

export default [{
    output: [{
      name: "WaterMark",
      file: "dist/watermark.js",
      format: "umd",
    }].map(makeOutput),
    plugins: prodPlugins,
  },
  // {
  //   output: [{
  //       name: "WaterMark",
  //       file: "dist/watermark.js",
  //       format: "umd",
  //     },
  //     {
  //       file: "dist/watermark.es.js",
  //       format: "es",
  //     },
  //     {
  //       file: "dist/watermark.cjs.js",
  //       format: "cjs",
  //     },
  //   ].map(makeOutput),
  //   plugins: devPlugins,
  // },
].map(withBase);