---
layout: layouts/post.njk
title: Mapa interactivo accesible e inteligente de la Facultad de Informática
image: image.jpg
qr: qr.png
---

# Mapa interactivo accesible e inteligente de la Facultad de Informática

## Texto transcrito

[Parte superior]

12 EXPO CIENCIA Y TECNOLOGÍA

PROYECTOS DE DESARROLLO E INNOVACIÓN 2026

AUTORES:

- Brenda Morinigo
- Lizbeth Sanchez
- Matias Miyawaki
- Walter Lin

DIRECTORAS:
- Ana Paola Amadeo
- Ivana Harari

**MOTIVACIÓN**

El Problema

La falta de información anticipada sobre el entorno físico es una barrera para personas en situación de discapacidad en la universidad.

El Objetivo

Mitigar las barreras físicas e informativas mediante un mapa interactivo multimodal y accesible.

¿Qué permite la aplicación?

- Encontrar rutas personalizadas, priorizando restricciones motrices (ej. uso de silla de ruedas)
- Ubicar puntos de interés como la biblioteca o el buffet
- Interactuar con un asistente virtual y personalizar la vista (modo oscuro, daltonismo, alta legibilidad)

**TRABAJO REALIZADO**

[Columna izquierda]

- Arquitectura SVG: Diseño de capas superpuestas (interfaz visual y lógica) que permite manipular el trazado nativamente en el DOM con JavaScript
- Cálculo de Rutas (Teoría de Grafos): El edificio se mapeó como una red de nodos y aristas. Un algoritmo aplica un filtro de accesibilidad estricto que descarta obstáculos (ej. gradas) y redirige por rampas si el usuario usa silla de ruedas
- Perfiles Visuales Inclusivos: Uso de variables CSS para adaptar la interfaz a distintas necesidades ópticas
- Asistente Inteligente (Búsqueda Semántica): Comprende lenguaje natural conectando intenciones con destinos (ej. "necesito imprimir" dirige a la "Fotocopiadora")
- Rutas y Asistencia por Voz: Integración con la Web Speech API del navegador para dictar en voz alta instrucciones espaciales paso a paso

[Parte inferior izquierda]

RESUMEN Y PALABRAS CLAVES

Aplicación web interactiva para guiar a los usuarios en la Facultad de Informática. Integra un mapa vectorial SVG, cálculo de rutas por grafos, asistente virtual y asistencia por voz.

Palabras clave: Accesibilidad, Mapa Interactivo, SVG, Grafos, Búsqueda Semántica, Web Speech API.

[Parte inferior derecha]

CONCLUSIONES

El proyecto generó conciencia sobre las necesidades de accesibilidad (motriz y visual) y representó un gran aprendizaje académico en el trabajo de equipo

Trabajo Futuro: El sistema actual abarca la planta baja, pero su expansión a todos los pisos de la Facultad generaría un impacto enorme para lograr un entorno universitario 100% accesible.

[Franja inferior]

LIDI, LIFIA  Y LINTI
UNIVERSIDAD NACIONAL DE LA PLATA

## Descripción de imagen

[Sección «Trabajo realizado», columna derecha]

Bajo el rótulo «Arquitectura SVG» se muestran tres imágenes que representan distintas etapas o perspectivas del mapa de la Facultad: una vista del plano, un esquema arquitectónico del edificio y un grafo con nodos y conexiones que representan recorridos.

[Sección «Rutas al buffet»]

Dos imágenes muestran el plano de la Facultad con recorridos señalizados hacia el buffet. Una corresponde a una ruta que utiliza rampas y otra a una ruta que incluye gradas, permitiendo comparar alternativas de desplazamiento.

[Sección «Asistente inteligente»]

Una captura de pantalla muestra una interfaz conversacional con el título «Destino: Buffet». El asistente presenta indicaciones para llegar al destino y ofrece opciones de lugares, entre ellos Buffet, Alumnos, Biblioteca y Fotocopiadora.

[Sección «Menú de accesibilidad»]

Una captura de pantalla presenta un panel de configuración con opciones para ajustar el tamaño del texto, el contraste y el modo de color. También incluye controles para gestionar la visualización del mapa y opciones de lectura por voz.

## Descripción general

El cartel presenta una aplicación web que busca facilitar la orientación dentro de la Facultad de Informática mediante un mapa interactivo accesible. La propuesta integra rutas personalizadas, un asistente virtual basado en búsqueda semántica, instrucciones por voz y opciones de personalización visual.

La composición se organiza en una sección de motivación, seguida de una descripción de las tecnologías y funcionalidades implementadas, acompañada de capturas de pantalla del mapa, las rutas y las herramientas de accesibilidad. En la parte inferior aparecen el resumen y las palabras clave a la izquierda, y las conclusiones y el trabajo futuro a la derecha.
