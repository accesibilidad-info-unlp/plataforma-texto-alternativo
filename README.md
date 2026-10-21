# Plataforma de texto alternativo

![Markdown](https://img.shields.io/badge/Markdown-Content-lightgrey)
![Eleventy](https://img.shields.io/badge/11ty-SSG-blue)
![PicoCSS](https://img.shields.io/badge/PicoCSS-lightweight-green)
![Docker](https://img.shields.io/badge/Docker-ready-blue)
![CI](https://img.shields.io/github/actions/workflow/status/mikrod-info/plataforma-texto-alternativo/deploy.yml)

## Resumen

Sitio web orientado a mejorar la accesibilidad de materiales visuales en contextos educativos mediante la publicación de texto alternativo para carteles elaborados en el aula de forma manual.

Los textos alternativos se generan inicialmente con herramientas de inteligencia artificial y luego se revisan, corrigen y estandarizan manualmente.

A diferencia de un sitio web tradicional, la plataforma funciona como un sistema de organización y acceso a recursos accesibles: cada cartel físico se vincula a una página mediante un código QR, permitiendo acceder rápidamente a su contenido textual.

Estos textos pueden ser leídos por lectores de pantalla, como TalkBack o VoiceOver, facilitando el acceso a estudiantes que no pueden interpretar el contenido visual.

El resultado es una plataforma centralizada de descripciones accesibles, asociadas directamente a materiales reales del entorno educativo.

## Tecnologías

- Markdown (Formato del contenido)
- Eleventy (Static Site Generator)
- Pico.css 
- JavaScript vanilla 
- Docker 
- GitHub Actions (deploy)

## Decisiones técnicas

- **Markdown como fuente de contenido**  
  Se utiliza Markdown como formato base, ya que permite editar, corregir y estandarizar fácilmente los textos generados por IA. Los archivos se organizan en un sistema de carpetas, evitando el uso de una base de datos y facilitando su mantenimiento.

- **Generación estática con Eleventy**  
  Eleventy transforma los archivos Markdown en HTML semántico, permitiendo construir un sitio accesible a partir de buenas prácticas.

- **Flujo IA -> Markdown -> HTML**  
  Dado que la IA genera contenido textual, Markdown funciona como intermediario ideal para su revisión y normalización antes de ser publicado.

- **Estilos con Pico.css**  
  Se utiliza Pico.css por su enfoque minimalista y su orientación a HTML semántico, lo que reduce la complejidad del CSS.

- **Estructura escalable basada en archivos**  
  El contenido se organiza en carpetas (`src/posts`) siguiendo una jerarquía por materia y año, lo que permite escalar el proyecto sin depender de sistemas externos.

## Contexto y funcionamiento

Este proyecto surge en el marco de iniciativas de accesibilidad digital promovidas por la Dirección de Accesibilidad de la Facultad de Informática (UNLP), a partir de la necesidad de hacer accesibles los carteles elaborados por estudiantes durante el Ingreso 2026.

Muchos de estos materiales contienen información relevante en formato visual que no puede ser interpretada por estudiantes con discapacidad visual. Para abordar este problema, se propone una integración entre el entorno físico y digital mediante códigos QR que enlazan a versiones textuales accesibles.

El flujo de trabajo del proyecto es el siguiente:

1. Captura de la imagen del cartel físico.
2. Generación automática de un texto alternativo mediante herramientas de inteligencia artificial.
3. Revisión, corrección y estandarización manual del contenido.
4. Publicación del texto en la plataforma web.
5. Generación de un código QR que vincula el cartel físico con su versión accesible.

Este enfoque permite mantener los materiales originales en su formato físico, incorporando una capa digital accesible.

## Estandarización

Se definió una estructura jerárquica consistente para todos los documentos, con el objetivo de garantizar claridad, legibilidad y compatibilidad con tecnologías de asistencia.

- Un único encabezado H1 por documento.
- Uso consistente de encabezados H2 para las secciones principales.

Dado que las descripciones textuales son el eje central del proyecto, se estableció la siguiente jerarquía de contenido:

- Front Matter: Proporciona metadatos del documento y permite asignar el layout correspondiente.
- H1: Título del contenido.
- H2: Secciones principales, como "Texto transcrito", "Descripción de imagen" o "Descripción general".
- Negrita: Utilizada para subtítulos o elementos organizativos dentro de una misma sección.
- \[Corchetes\]: Indican contexto, ubicación o agrupación dentro del cartel original.

## Estructura de un cartel

```markdown
---
layout: layouts/plantilla.njk
title: Título del cartel
---
# Título del cartel

## Descripción de imagen

Texto

## Texto transcrito

[Columna izquierda]

Texto

[Columna derecha]

Texto

## Descripción general

Texto
```

## Agregar frontmatter

Moverse a la carpeta que contiene los archivos revisados y correr este comando

```bash
for f in ./*.md; do   awk 'BEGIN {
  print "---"
  print "layout: layouts/post.njk"
  print "title: "
  print "image: image.jpg"
  print "qr: qr.png"
  print "---"
  print ""
} { print }' "$f" > "$f.tmp" && mv "$f.tmp" "$f"; done
```

## Agregar

## Nombres de carpetas, HTML y URLs generadas

Los archivos de contenido se organizan en `src/posts` por categoría o materia, año y publicación. Eleventy usa la ruta y el nombre de cada archivo Markdown para generar el HTML. Como no se definen permalinks explícitos para las publicaciones, la URL se deriva de esa misma ruta.

Por ejemplo, la ruta de origen, el archivo HTML generado y la URL pública de una publicación se relacionan así:

```text
Ruta:
src/posts/semana-extension/2026/post-01/index.md

HTML generado:
_site/posts/semana-extension/2026/post-01/index.html

URL generado:
/plataforma-texto-alternativo/posts/semana-extension/2026/post-01/
```

Por este motivo, los nombres de carpetas forman parte de las URLs. Se recomienda que sean cortos, estén en minúsculas, no incluyan espacios ni tildes (acentos gráficos) y separen las palabras con guiones. Así se evitan espacios y caracteres acentuados codificados en las URLs. El nombre legible para el catálogo se define por separado en el `README.md` de cada carpeta directamente dentro de `src/posts`.

Ese `README.md` funciona como índice de la categoría en el catálogo, no como el Markdown de una publicación. Su front matter puede incluir:

```yaml
---
materia: Taller de Introducción a la Vida Universitaria
title: TIVU
type: index
---
```

- `title`: etiqueta visible en el catálogo.
- `materia`: texto complementario que se muestra como tooltip al pasar el cursor sobre la etiqueta. Puede contener el nombre desarrollado de una sigla; si no aporta una aclaración.
- `type: index`: indica que el archivo cumple el rol de índice. Actualmente, el código reconoce el índice por el nombre `README.md`.

El tooltip es complementario y puede no estar disponible en pantallas táctiles o con algunas tecnologías de asistencia. La información esencial debe estar disponible también en el contenido visible.

## Estructura del proyecto

```shell
/plataforma-texto-alternativo
├── config
│   └── collections.js # construye un árbol jerárquico de posts (materia/año)
├── docker-compose.yml
├── Dockerfile
├── package.json
├── package-lock.json
├── README.md # documentación del proyecto
└── src 
    ├── assets
    │   ├── icons
    │   │   └── favicon.svg
    │   └── images
    │       ├── accesibilidad-color.png # logo inventado (cambiar)
    │       ├── accesibilidad.png
    │       ├── logo-facultad.png
    │       └── logo.svg
    ├── catalogo.md # página de listado de posts
    ├── contacto.md # página de contacto
    ├── css
    │   ├── base.css #estilos generales: etiquetas, reset
    │   ├── components # módulos de CSS
    │   │   ├── catalog.css
    │   │   ├── footer.css
    │   │   ├── nav.css
    │   │   └── theme-switch.css
    │   ├── main.css # punto de entrada que importa todos los módulos
    │   ├── pico.min.css # framework CSS base (no modificar)
    │   ├── tokens.css # variables de color y tema (light/dark)
    │   └── utilities.css #
    ├── _includes # plantillas que generan HTML
    │   ├── layouts
    │   │   ├── base.njk
    │   │   └── post.njk
    │   └── partials # módulos que generan fragmentos de HTML
    │       ├── catalog-tree.njk # macro que recorre el árbol de posts
    │       ├── footer.njk
    │       ├── header.njk
    │       ├── head.njk
    │       ├── brand.njk
    │       ├── nav-controls.njk
    │       ├── nav.njk
    │       └── theme-switch.njk
    ├── index.md # entrada del sitio
    ├── js
    │   ├── components # módulos de JS
    │   │   ├── catalog-tree.js
    │   │   ├── nav-menu.js
    │   │   └── theme-switch.js
    │   ├── main.js # inicializa los módulos JS
    │   └── utils
    │       └── dom-ready.js
    └── posts    # contenido en markdown organizado por materia/anio/post-xx.md
        ├── CADP # cada README.md es un punto de indexación
        │   ├── 2026
        │   │   ├── post-01.md
        │   │   ├── post-02.md
        │   │   ├── post-03.md
         ...
        │   │   └── README.md
        │   ├── 2027
        │   │   ├── post-01.md
        │   │   ├── post-02.md
        │   │   ├── post-03.md
         ...
        │   │   └── README.md
        │   └── README.md
        └── TIVU
            ├── 2026
            │   ├── post-01.md
            │   ├── post-02.md
            │   ├── post-03.md
            ...
            │   └── README.md
            ├── 2027
            │   ├── post-01.md
            │   ├── post-02.md
            │   ├── post-03.md
            ...
            │   └── README.md
            └── README.md
```

## Demo

[Plataforma de texto alternativo](https://mikrod-info.github.io/plataforma-texto-alternativo/)
