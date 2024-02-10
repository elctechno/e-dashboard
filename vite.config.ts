import { resolve } from "path"
import typescript2 from 'rollup-plugin-typescript2';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy'
import sassDts from 'vite-plugin-sass-dts'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/_variables.scss";`
      }
    }
  },
  plugins: [
    vue(),
    cssInjectedByJsPlugin(),
    dts({
      insertTypesEntry: true,
    }),
    sassDts(),
    cssInjectedByJsPlugin(),
    viteStaticCopy({
      targets: [
        { src: "src/assets/scss.main.scss", dest: "dist/assets" },
        { src: "src/assets/scss", dest: "dist/assets" },
      ],
    }),
    typescript2({
      check: false,
      include: ["src/library/**/*.vue"],
      tsconfigOverride: {
        compilerOptions: {
          outDir: "dist",
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
      },
      exclude: ["vite.config.ts"],
    })
  ],
   build: {
    cssCodeSplit: true,
    lib: {
      entry: "src/library/index.ts",
      name: "e-dashboard",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `e-dashboard.${format}.js`,
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/library/main.ts'),
      },
      external: ["vue"],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "main.css") return "e-dashboard.min.css";
          return assetInfo.name;
        },
        exports: "named",
        globals: {
          vue: "Vue",
        },
      },
    },
  },
   resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, './src')
      }
    ]
  },
})
