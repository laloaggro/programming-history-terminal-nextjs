# Terminal de Historia de la Programación - Next.js

Este es un proyecto de reestructuración del sitio "Terminal de Historia de la Programación" utilizando Next.js, un framework de React que ofrece renderizado del lado del servidor, generación de sitios estáticos y muchas otras características avanzadas.

## Características del proyecto

- Basado en Next.js (React Framework)
- Compatible con GitHub Pages
- Estructura modular con componentes React
- Modo oscuro/claro
- Catálogo de ideas de proyectos en barra lateral
- Terminal interactiva con comandos
- Efecto de fondo Matrix
- Diseño responsivo

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

## Comandos disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run export` - Exporta la aplicación como sitio estático
- `npm run deploy` - Construye y exporta la aplicación (combinación de build y export)

## Personalización

Puedes personalizar el contenido modificando los archivos en la carpeta `data/`:

- `facts.json` - Hechos históricos de programación
- `catalog.json` - Catálogo de ideas de proyectos

## Licencia

MIT