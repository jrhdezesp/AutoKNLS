import { defineConfig } from 'vite';
import path, { resolve } from 'node:path';
import * as glob from 'glob';
import handlebars from 'vite-plugin-handlebars';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import HtmlCssPurgePlugin from 'vite-plugin-purgecss';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const base = process.env.DEPLOY_BASE_URL || '/AutoKNLS/';

function obtenerEntradas() {
    return Object.fromEntries(
        glob.sync(
            './**/*.html',
            {
                ignore: [
                    './dist/**',
                    './node_modules/**'
                ]
            }
        ).map((file) => {
            return [
                file.slice(0, file.lastIndexOf('.')),
                resolve(__dirname, file)
            ]
        })
    );
}

export default defineConfig({
    appType: 'mpa',
    base,
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'src/hbs/partials'),
            context: {
                title: 'AutoKNLS',
                currYear: new Date().getFullYear(),
                footerbottom: 'AutoKNLS. Todos los derechos reservados.'
            }
        }),
        HtmlCssPurgePlugin(),
        ViteMinifyPlugin()
    ],
    build: {
        minify: 'terser',
        rollupOptions: {
            input: obtenerEntradas(),
            output: {
                manualChunks: undefined
            }
        }
    },
    css: {
        preprocessorOptions: {
            less: {
                additionalData: `@import "${resolve(__dirname, 'less/variables.less')}";`
            }
        }
    }
});