# Fiorella Lisset — Portfolio (multi-página)

Sitio con páginas separadas (como tu Wix): Home, Works, una página por cada
proyecto, y Contact. Fondo blanco, texto negro, tipografía Avenir.

## Estructura

```
portfolio-web/
├── index.html         → Home
├── works.html          → Listado de los 22 proyectos
├── contact.html        → Contacto
├── style.css           → Estilos (colores, tipografía, layout)
└── works/
    ├── alicorp.html
    ├── pawit.html
    ├── ... (22 páginas, una por proyecto)
```

## ⚠️ Importante: reemplaza todo tu repo, no lo mezcles

Como ya subiste algunos archivos `.html` sueltos antes, lo más seguro es
**borrar el contenido actual del repo y subir esta carpeta completa**, para
evitar que archivos viejos queden mezclados con los nuevos.

### Pasos:

1. Entra a tu repositorio en GitHub (`fiorellalisset/fiorellalisset.portfolio`)
2. Borra los archivos `.html` que subiste sueltos:
   - Click en el archivo → ícono de basurero (🗑) arriba a la derecha → **Commit changes**
   - Repite para cada archivo que no sea parte de esta nueva entrega
3. Click en **Add file → Upload files**
4. Arrastra **todo el contenido** de esta carpeta (`index.html`, `works.html`,
   `contact.html`, `style.css`, y la carpeta `works/` completa con sus 22 archivos)
   — GitHub permite arrastrar carpetas completas, mantiene la subcarpeta `works/`
5. Baja y click **Commit changes**

Vercel detectará el cambio y publicará la versión nueva automáticamente
(no necesitas hacer nada en Vercel).

## Personalizar contenido

- **Textos, bio, servicios**: editar `index.html` (sección `hero`)
- **Colores y tipografía**: variables en la parte superior de `style.css` (`:root`)
- **Datos de contacto**: `contact.html`

## Imágenes

Las imágenes de los proyectos siguen apuntando a los servidores de Wix por
ahora. Para independizarte de Wix a futuro, descarga tus imágenes y
reemplaza las URLs en cada archivo dentro de `works/`.

Dos proyectos ("Ilustración editorial" y "El Jurídico a la Medida") no
tenían imágenes disponibles al generar el sitio — sus páginas muestran solo
el título por ahora.
