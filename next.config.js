/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Configuración para GitHub Pages
  basePath: '',
  assetPrefix: '',
  // Exportar como sitio estático
  output: 'export',
  // Opciones de exportación
  distDir: 'out',
  // Configuración de imágenes
  images: {
    unoptimized: true,
  },
  // Configuración de entorno
  env: {
    BASE_PATH: '',
  },
}

module.exports = nextConfig