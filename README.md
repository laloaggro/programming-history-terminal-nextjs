# Terminal de Historia de la Programación

Esta es una aplicación web interactiva que simula una terminal para explorar la historia de la programación. La aplicación está construida con Next.js y desplegada en GitHub Pages.

## Características

- Interfaz de terminal interactiva
- Comandos personalizados para explorar la historia de la programación
- Diseño responsive
- Totalmente funcional en navegadores modernos

## Tecnologías utilizadas

- Next.js 14
- React 18
- TypeScript
- CSS Modules (para estilos)

## Cómo ejecutar el proyecto

### Modo desarrollo

```bash
npm run dev
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000)

### Construir para producción

```bash
npm run build
```

### Exportar como sitio estático

```bash
npm run export
```

Esto generará una carpeta `out` con todos los archivos estáticos listos para ser desplegados en GitHub Pages.

## Estructura del proyecto

```
programming-history-terminal-nextjs/
├── components/          # Componentes React reutilizables
├── data/                # Datos estáticos (hechos de programación, catálogo)
├── pages/               # Páginas de la aplicación Next.js
├── public/              # Archivos estáticos
├── styles/              # Archivos de estilo globales
├── next.config.js       # Configuración de Next.js
├── package.json         # Dependencias y scripts
└── tsconfig.json        # Configuración de TypeScript
```

## Despliegue en GitHub Pages

1. Construir el proyecto:
   ```bash
   npm run export
   ```

2. El contenido de la carpeta `out` puede ser desplegado directamente en GitHub Pages.

3. Para configurar GitHub Pages, ve a la configuración de tu repositorio en GitHub, selecciona la rama `gh-pages` o la carpeta `out` como fuente para GitHub Pages.

4. Si estás utilizando un dominio personalizado (como `laloaggro.github.io`), asegúrate de agregar un archivo `CNAME` en la carpeta `public/` con tu dominio personalizado.

## Configuración específica para GitHub Pages

El archivo `next.config.js` está configurado para funcionar correctamente con GitHub Pages:

- `output: 'export'` habilita la exportación estática
- `images: { unoptimized: true }` desactiva la optimización de imágenes incompatible con GitHub Pages
- Configuración de `assetPrefix` y `basePath` para entornos de GitHub Actions

## Comandos disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run export` - Exporta la aplicación como sitio estático

## Comandos de la terminal

- `help` - Muestra la lista de comandos disponibles
- `about` - Muestra información sobre la aplicación
- `history` - Muestra la historia de la programación
- `cls` o `clear` - Limpia la pantalla de la terminal
- `echo` - Muestra el texto proporcionado
- `date` - Muestra la fecha y hora actual
- `exit` - Cierra la aplicación

## Personalización

Puedes personalizar el contenido modificando los archivos en la carpeta `data/`:

- `facts.json` - Hechos históricos de programación
- `catalog.json` - Catálogo de ideas de proyectos

## Licencia

MIT