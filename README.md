# Voces de Sierra Morena

Sitio web del proyecto familiar **Voces de Sierra Morena**, creado con [Astro](https://astro.build) y [UnoCSS](https://unocss.dev). El objetivo del sitio es documentar y compartir la memoria oral de nuestros tíos y tías a través de entrevistas y relatos.

---

## 🚀 Tecnologías
- [Astro](https://astro.build): framework de sitios estáticos
- [UnoCSS](https://unocss.dev): utilidades atómicas de CSS
- Markdown (`src/content/blog`) para las entradas del blog
- Despliegue en **GitHub Pages**

---

## 📂 Estructura del proyecto
```
└─ src/
   ├─ components/     # Componentes de UI (Nav, etc.)
   ├─ layouts/        # Layouts base
   ├─ pages/          # Páginas (Home, Sobre, Blog)
   ├─ styles/         # Estilos globales y tema
   └─ content/
      └─ blog/        # Entradas en Markdown
```

---

## 🔧 Desarrollo local
1. Clonar el repo y entrar en la carpeta:
   ```bash
   git clone https://github.com/usuario/vocessm.git
   cd vocessm
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

Abrir en [http://localhost:4321](http://localhost:4321)

---

## 📦 Build
Generar el sitio estático:
```bash
npm run build
```
Los archivos finales se generan en `dist/`.

---

## 🌐 Deploy
Este sitio está configurado para desplegarse en **GitHub Pages** mediante GitHub Actions:
- El archivo de workflow se encuentra en `.github/workflows/deploy.yml`.
- Se despliega automáticamente al hacer *push* en la rama `main`.
- En caso de usar **Project Pages**, se debe configurar `base` en `astro.config.mjs` con el nombre del repositorio.

URL de producción: `https://usuario.github.io/vocessm`

---

## ✨ Funcionalidades
- **Home**: introducción al proyecto.
- **Sobre el proyecto**: objetivos, motivación y fases.
- **Blog**: bitácora de actas, avances y guías.
- Diseño inspirado en el logo del proyecto, con paleta cálida y tipografía sencilla.

---

## 📜 Licencia
Proyecto con fines familiares y culturales. Código abierto bajo licencia MIT.
