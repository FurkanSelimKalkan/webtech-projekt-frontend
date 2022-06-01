"use strict";
exports.__esModule = true;
var url_1 = require("url");
var vite_1 = require("vite");
var plugin_vue_1 = require("@vitejs/plugin-vue");
var plugin_vue_jsx_1 = require("@vitejs/plugin-vue-jsx");
// https://vitejs.dev/config/
exports["default"] = vite_1.defineConfig({
    plugins: [plugin_vue_1["default"](), plugin_vue_jsx_1["default"]()],
    resolve: {
        alias: {
            '@': url_1.fileURLToPath(new url_1.URL('./src', import.meta.url))
        }
    }
});
