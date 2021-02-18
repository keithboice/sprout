import css from "rollup-plugin-css-only";
import vue from "rollup-plugin-vue";
import pkg from "./package.json";


export default {
  input:    "src/index.js",
  output:   [
    {
      file:      pkg.main,
      format:    "cjs",
      sourcemap: true
    }, {
      file:      pkg.unpkg,
      format:    "umd",
      name:      "Sprout",
      sourcemap: true,
      globals:   {
        vue: "Vue"
      }
    }
  ],
  plugins:  [ css( undefined ), vue() ],
  external: [ "vue" ]
};
