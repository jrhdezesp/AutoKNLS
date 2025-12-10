# AutoKNLS

## Logo
![AutoKNLS Logo](./src/img/logo.png)

## Descripción

AutoKNLS es una plataforma web moderna diseñada para brindar información integral sobre servicios, productos y noticias relacionados con la industria automotriz. El sitio proporciona una experiencia de usuario fluida y responsive, con acceso a información sobre accesorios, repuestos, aplicaciones, promociones y más.

## Tecnologías Utilizadas

- **[Vite](https://vitejs.dev/)** - Herramienta de construcción rápida y moderna para aplicaciones web
- **[LESS](http://lesscss.org/)** - Preprocesador CSS para estilos más mantenibles y organizados
- **[Handlebars (HBS)](https://handlebarsjs.com/)** - Motor de plantillas con soporte para partials reutilizables
- **Node.js** - Entorno de ejecución JavaScript
- **Git & GitHub Pages** - Control de versiones y despliegue

## Documentos de Página

1. **index.html** - Página de inicio
2. **aplicacion.html** - Información sobre aplicaciones
3. **accesorios.html** - Catálogo de accesorios
4. **repuestos.html** - Catálogo de repuestos
5. **promociones.html** - Ofertas y promociones vigentes
6. **noticias.html** - Últimas noticias del sector
7. **blog.html** - Artículos y contenido educativo
8. **ubicaciones.html** - Sucursales y puntos de servicio
9. **historia.html** - Historia y trayectoria de la empresa
10. **nosotros.html** - Información sobre la empresa
11. **compromiso.html** - Valores y compromisos corporativos
12. **faq.html** - Preguntas frecuentes

## Integrantes del Proyecto

| Nombre | Número de Cuenta | Usuario de GitHub |
|--------|------------------|-------------------|
| Issac Daniel Martinez Sánchez | 1503200600354 | [IssacMartinezz](https://github.com/IssacMartinezz) |
| Abiel Isaí Ordóñez | 0801200300492 | [abiel8](https://github.com/abiel8) |
| Alexa Mishelle Canales | 0703200303320 | [alexaknlss](https://github.com/alexaknlss) |
| Jose Ramón Hernández Espinal | 0801200306613 | [jose.rhdez](https://github.com/jose.rhdez) |
| Carlos Gustavo Luna Acosta | 0301200402911 | [CGLuna45](https://github.com/CGLuna45) |

## Instalación y Configuración

### Requisitos Previos
- Node.js (v14 o superior)
- npm o yarn

### Pasos para Instalar

```bash
# Clonar el repositorio
git clone https://github.com/jrhdezesp/AutoKNLS.git

# Navegar al directorio del proyecto
cd AutoKNLS

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo con Vite
- `npm run build` - Compila el proyecto para producción
- `npm run preview` - Vista previa del build de producción

## Estructura del Proyecto

```
AutoKNLS/
├── src/
│   ├── hbs/partials/        # Componentes reutilizables (header, footer, etc.)
│   ├── scripts/              # Funcionalidades JavaScript (carruseles, validaciones)
│   ├── img/                  # Imágenes y recursos
│   ├── data/                 # Datos globales (contexto, configuración)
│   ├── main.js               # Punto de entrada principal
│   └── style.css             # Estilos compilados
├── less/
│   ├── variables.less        # Variables de diseño (colores, breakpoints)
│   ├── base.less             # Estilos base
│   ├── components.less       # Componentes reutilizables
│   ├── style.less            # Hoja maestra
│   └── sections/             # Estilos específicos por página
├── public/                   # Archivos estáticos
├── vite.config.js            # Configuración de Vite
├── package.json              # Dependencias y scripts
└── [páginas HTML]            # Archivos de página (index, about, etc.)
```

## Despliegue

El proyecto se despliega automáticamente en **GitHub Pages** en cada cambio a la rama `master`:

- **URL de producción:** https://jrhdezesp.github.io/AutoKNLS/

## Contacto

Para más información o consultas sobre el proyecto, contactar a través de GitHub.

---

**Última actualización:** Diciembre 2025
