import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/Entregable-5-CSS/",    

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        quienes_somos: resolve(__dirname, 'quienes_somos.html'),
        cursos: resolve(__dirname, 'cursos.html'),
        blog: resolve(__dirname, 'blog.html'),
        registro: resolve(__dirname, 'registro.html'),
        login: resolve(__dirname, 'login.html'),
        contacto: resolve(__dirname, 'contacto.html'),
        aviso_legal: resolve(__dirname, 'aviso_legal.html'),
        curso_1: resolve(__dirname, 'curso_1.html'),
        curso_2: resolve(__dirname, 'curso_2.html'),
        iniciando: resolve(__dirname, 'iniciando.html'),
        noticia_1: resolve(__dirname, 'noticia_1.html'),
        noticia_2: resolve(__dirname, 'noticia_2.html'),
        confirmacion: resolve(__dirname, 'confirmacion.html'),
      },
    },
  },
});
