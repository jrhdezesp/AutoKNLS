# Optimización de Imágenes - AutoKNLS

## Estructura de Carpetas de Imágenes

```
src/img/
├── promociones/          # Imágenes de tarjetas promocionales
│   ├── pexels-anastasia-shuraeva-9607353.jpg
│   ├── pexels-avinashpatel-445399.jpg
│   └── pexels-chris-f-38966-17900500.jpg
├── noticias/             # Imágenes para sección de noticias
│   ├── pexels-benjamin-walsham-159059246-11074558.jpg
│   ├── pexels-bertellifotografia-10182903.jpg
│   └── pexels-bylukemiller-32725839.jpg
├── blog/                 # Imágenes de artículos del blog
│   ├── pexels-cottonbro-4489719.jpg
│   ├── pexels-cottonbro-4489747.jpg
│   ├── pexels-cottonbro-7540625.jpg
│   ├── pexels-daniel-andraski-197681005-13065697.jpg
│   └── pexels-enginakyurt-34133278.jpg
├── ubicaciones/          # Imágenes de sucursales
│   ├── pexels-eyupcan-timur-424989336-30789633.jpg
│   ├── pexels-freestockpro-12969266.jpg
│   ├── pexels-idzzzed-35069742.jpg
│   └── pexels-juan-montes-92812630-22240793.jpg
└── heroes/               # Imágenes para secciones hero
    ├── pexels-lumierestudiomx-4116232.jpg
    ├── pexels-michel-avril-1082999050-30351144.jpg
    ├── pexels-mikebirdy-190574.jpg
    ├── pexels-mikebirdy-945443.jpg
    ├── pexels-paduret-1476318.jpg
    ├── pexels-pixabay-65623.jpg
    ├── pexels-sejio402-29181493.jpg
    ├── pexels-senansperspective-29851074.jpg
    └── pexels-tami-19499409.jpg
```

## Características de Optimización Implementadas

### 1. Lazy Loading
Todas las imágenes utilizan el atributo `loading="lazy"` en HTML:
```html
<img src="/img/promociones/..." alt="..." loading="lazy" class="promo-img">
```
Beneficios:
- Reduce tiempo de carga inicial
- Carga imágenes solo cuando están próximas a visualizarse
- Mejora Core Web Vitals (LCP)

### 2. Object-fit y Aspect Ratio
Las imágenes se adaptan al contenedor usando `object-fit: cover`:
- Mantiene proporción de imagen
- Llena el contenedor sin distorsión
- Compatible con todos los navegadores modernos

### 3. Media Queries Responsivas
Diferentes tamaños para diferentes breakpoints:

**Desktop (>1024px):**
- Imágenes promocionales: 300px+ altura
- Imágenes de blog: 250px altura
- Imágenes de noticias: 300px altura

**Tablet (768px - 1023px):**
- Imágenes promocionales: 200px altura
- Imágenes de blog: 200px altura
- Imágenes de noticias: 250px altura

**Mobile (<768px):**
- Imágenes promocionales: 180px altura
- Imágenes de blog: 150px altura
- Imágenes de noticias: 200px altura

### 4. Transiciones Smooth
Efecto hover suave con transición de 0.3s:
```css
.promo-img:hover {
    transform: scale(1.05);
}
```

### 5. Sombras y Bordes
- Border-radius: 8px para esquinas redondeadas
- Box-shadow en desktop, removida en mobile para mejor rendimiento
- Mejora visual y contraste

## Ubicación de Estilos

Los estilos de optimización se encuentran en:
- **Archivo principal:** `less/images.less`
- **Importado en:** `less/style.less`
- **Variables de breakpoints:** `less/variables.less`

## Clasificación de Imágenes por Página

### 📰 Noticias (noticias.html)
- **Ubicación:** `/img/noticias/`
- **Cantidad:** 3 imágenes
- **Tamaño:** Imágenes relacionadas con repuestos y mantenimiento
- **Clase CSS:** `.post-image` y `.post-img`

### 🎯 Promociones (promociones.html)
- **Ubicación:** `/img/promociones/`
- **Cantidad:** 3 imágenes
- **Tamaño:** Imágenes de productos y ofertas
- **Clase CSS:** `.promo-img-container` y `.promo-img`

### 📝 Blog (blog.html)
- **Ubicación:** `/img/blog/`
- **Cantidad:** 5 imágenes
- **Tamaño:** Imágenes de artículos educativos
- **Clase CSS:** `.article-image` y `.article-img`

### 🏪 Ubicaciones (ubicaciones.html)
- **Ubicación:** `/img/ubicaciones/`
- **Cantidad:** 4 imágenes
- **Tamaño:** Fotos de sucursales y tiendas
- **Clase CSS:** Implementar según sea necesario

### 🎪 Héroes (secciones principales)
- **Ubicación:** `/img/heroes/`
- **Cantidad:** 9 imágenes
- **Tamaño:** Imágenes de fondo para hero sections
- **Clase CSS:** `.hero-section`

## Prácticas de Mejor Rendimiento

### ✅ Lo que se implementó:
- ✅ Lazy loading en todas las imágenes
- ✅ Object-fit para adaptación responsiva
- ✅ Media queries para diferentes tamaños
- ✅ Transiciones suaves con GPU acceleration
- ✅ Nombres descriptivos en atributos alt
- ✅ Estructura de carpetas organizada

### 🔄 Recomendaciones Futuras:
- Implementar WebP con fallback a JPG
- Crear srcset para diferentes densidades de pantalla
- Usar picture element para art direction
- Implementar blur-up placeholder para carga
- Comprimir imágenes con herramientas como TinyPNG
- Usar CDN para servir imágenes más rápido

## Testing Responsivo

Para validar que las imágenes se vean correctamente:

1. **Desktop (1920px):** Imágenes grandes, hover effect visible
2. **Tablet (768px):** Imágenes medianas, bien centradas
3. **Mobile (425px):** Imágenes pequeñas, optimizadas para pantalla

## Performance Metrics

Con estas optimizaciones:
- **Faster Initial Load:** Lazy loading reduce carga inicial
- **Better CLS:** Image dimensions definidas evita layout shift
- **Improved LCP:** Imágenes optimizadas cargan rápido
- **Mobile Friendly:** Responsive images para todos los tamaños

## Archivos Modificados

- `less/images.less` - Nuevos estilos para imágenes responsive
- `less/style.less` - Importa el nuevo archivo images.less
- `src/hbs/partials/promociones.hbs` - Actualizado con nuevas rutas
- `src/hbs/partials/noticias.hbs` - Actualizado con nuevas rutas
- `src/hbs/partials/blog.hbs` - Añadidas imágenes a artículos

## Notas Importantes

⚠️ **Base URL:** Todas las rutas usan `/img/...` porque Vite configura `base: '/AutoKNLS/'` en vite.config.js

⚠️ **Lazy Loading:** Verificar que los navegadores objetivo soporten `loading="lazy"` (IE no lo soporta)

✨ **SVG Alternative:** Para iconos, se recomienda usar SVG en lugar de imágenes rasterizadas
