import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/hbs/partials'),
      context: {
        title: 'AutoKNLS',
        year: new Date().getFullYear()
      }
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ubicaciones: resolve(__dirname, 'ubicaciones.html'),
        promociones: resolve(__dirname, 'promociones.html'),
        historia: resolve(__dirname, 'historia.html'),
        compromiso: resolve(__dirname, 'compromiso.html'),
        aplicacion: resolve(__dirname, 'aplicacion.html'),
        noticias: resolve(__dirname, 'noticias.html'),
        blog: resolve(__dirname, 'blog.html'),
        nosotros: resolve(__dirname, 'nosotros.html'),
        faq: resolve(__dirname, 'faq.html'),
        repuestos: resolve(__dirname, 'repuestos.html'),
        accesorios: resolve(__dirname, 'accesorios.html')
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
