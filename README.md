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

La aplicación está configurada para desplegarse automáticamente en GitHub Pages usando GitHub Actions.

### Configuración del workflow

El workflow de despliegue se encuentra en `.github/workflows/deploy.yml`. Este workflow:

1. Se ejecuta en cada push a las ramas `main` o `master`
2. Construye la aplicación usando `npm run build`
3. Exporta la aplicación como sitio estático usando `npm run export`
4. Despliega los archivos generados en la carpeta `out` a GitHub Pages

### Configuración manual (opcional)

Si prefieres desplegar manualmente:

1. Construye la aplicación:
   ```bash
   npm run build
   ```

2. Exporta la aplicación como sitio estático:
   ```bash
   npm run export
   ```

3. El contenido de la carpeta `out` puede ser desplegado en cualquier servidor web estático, incluyendo GitHub Pages.

### Configuración del repositorio en GitHub

Para poder desplegar en GitHub Pages, necesitas:

1. Crear un nuevo repositorio en GitHub llamado `programming-history-terminal-nextjs`
2. Configurar el remoto del repositorio local:
   ```bash
   git remote add origin https://github.com/TU_USUARIO/programming-history-terminal-nextjs.git
   ```
3. Empujar las ramas al repositorio remoto:
   ```bash
   git push -u origin master
   git push -u origin gh-pages
   ```
4. En la configuración del repositorio en GitHub, selecciona la rama `gh-pages` como fuente para GitHub Pages

### Autenticación con GitHub

Para poder empujar los cambios al repositorio remoto, necesitarás autenticarte con GitHub. Puedes hacerlo de dos maneras:

1. Usar un token de acceso personal:
   ```bash
   git remote add origin https://<TU_TOKEN>@github.com/TU_USUARIO/programming-history-terminal-nextjs.git
   ```

2. Configurar SSH keys (método recomendado):
   - Sigue las instrucciones en [GitHub Docs - SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

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