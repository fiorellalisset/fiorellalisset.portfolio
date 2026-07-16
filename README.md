# Fiorella Lisset — Portfolio

Portafolio de una sola página con 3 secciones: **Home**, **Works** y **Contact**.
Hecho en HTML, CSS y JavaScript puro (sin frameworks), listo para desplegar en Vercel.

## Estructura

```
portfolio/
├── index.html      → contenido y estructura
├── style.css        → estilos y diseño
├── script.js        → menú móvil + galería de proyectos
└── README.md
```

## 1. Subir el proyecto a GitHub

1. Crea un repositorio nuevo en https://github.com/new (por ejemplo `fiorella-portfolio`), sin agregar README ni .gitignore.
2. En tu computadora, abre una terminal dentro de esta carpeta y ejecuta:

```bash
git init
git add .
git commit -m "Primer commit: portafolio"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/fiorella-portfolio.git
git push -u origin main
```

(Reemplaza `TU-USUARIO` y el nombre del repo por los tuyos)

## 2. Desplegar en Vercel

1. Entra a https://vercel.com e inicia sesión con tu cuenta de GitHub.
2. Click en **Add New → Project**.
3. Selecciona el repositorio que acabas de subir.
4. Framework: elige **Other** (o déjalo en automático, Vercel detecta HTML estático).
5. Click en **Deploy**.

En menos de un minuto tendrás una URL pública tipo `fiorella-portfolio.vercel.app`.

Cada vez que hagas `git push` a `main`, Vercel actualizará el sitio automáticamente.

## Recomendado: usar tus propias imágenes

Las imágenes de la sección **Works** actualmente apuntan a los servidores de Wix
(tomadas de tu sitio actual, fiorellaportfolio.wixsite.com/fldesign) para que el
portafolio se vea completo desde ya, con tus 22 proyectos.

Para mayor estabilidad (Wix podría bloquear el acceso en el futuro):

1. Descarga tus imágenes de proyectos.
2. Crea una carpeta `assets/works/` en este proyecto.
3. Guarda ahí tus imágenes (ej. `alicorp.jpg`, `pawit.jpg`, ...).
4. En `script.js`, reemplaza el valor `img` de cada proyecto en el arreglo `works`
   por la ruta local, por ejemplo: `img: "assets/works/alicorp.jpg"`.

Dos proyectos ("Ilustración editorial" y "El Jurídico a la Medida") no tenían
una imagen de portada accesible al momento de generar este sitio, así que se
muestran solo con su título sobre un fondo de color. Puedes añadirles imagen
con el mismo paso anterior (cambia `img: null` por la ruta de tu imagen).

## Personalizar contenido

- **Textos** (bio, nombre, rol): editar directamente en `index.html`.
- **Colores y tipografía**: variables al inicio de `style.css` (sección `:root`).
- **Redes y contacto**: sección `#contact` en `index.html`.
