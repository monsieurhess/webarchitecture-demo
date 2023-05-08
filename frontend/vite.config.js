import { defineConfig, splitVendorChunkPlugin } from "vite";
import vue from "@vitejs/plugin-vue";

import fs from "fs";

const path = require("path");

export default defineConfig({
  // https://vitejs.dev/config/
  plugins: [
    splitVendorChunkPlugin(),
    //createSvgPlugin(),
    vue({
      template: {
        compilerOptions: {
          compatConfig: {
             MODE: 2,
            // Breaking: No longer removes attribute if the value is boolean false. Instead, it's set as attr="false". To remove the attribute, use null or undefined.
            // If the usage is intended, you can disable the compat behavior and suppress this warning with: configureCompat({ ATTR_FALSE_VALUE: false })
            ATTR_FALSE_VALUE: false,
            COMPILER_V_BIND_OBJECT_ORDER: false,
          },

          // console warning will be remove when issue is solved: https://github.com/vuejs/core/issues/7789
          whitespace: 'preserve',
        }
      }
    })
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      vue: '@vue/compat/dist/vue.esm-bundler.js',
      // vue: 'npm:@vue/compat',
    },
  },

  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/'
  //   : '/cae-core-webapp/',

  server: {

    // make the server listen on all interfaces to it is accessible from inside a local VM
    host: '0.0.0.0',

    port: 8081,

    strictPort: true,

    // https: process.env.NODE_ENV === 'development'
    //   ? {
    //     key: fs.readFileSync('/etc/apache2/server.key'),
    //     cert: fs.readFileSync('/etc/apache2/server.crt'),
    //   }
    //   : true,
    // make the server accept requests for the preview-gkp.local host (cf. the URI of the script resources configured in the CMS)
    public: 'localhost:8081',
    origin: 'http://localhost:8081'
  },

  build: {
    // generate manifest.json in outDir
    manifest: false,
    rollupOptions: {
      // overwrite default .html entry
      input: 'src/main.js',

      output: {
        // prevent filename hashing
        entryFileNames: `resources/js/[name].js`,
        chunkFileNames: `resources/chunks/[name].js`,
        assetFileNames: `resources/[ext]/[name].[ext]`
      },

    },
  },
})
