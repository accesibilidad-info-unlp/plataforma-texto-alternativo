---
layout: layouts/post.njk
title: Juegos serios con objetos interactivos vinculados con el área de salud
image: image.jpg
qr: qr.png
---

# Juegos serios con objetos interactivos vinculados con el área de salud

## Texto transcrito

[Parte superior]

12 EXPO CIENCIA Y TECNOLOGÍA

PROYECTOS DE DESARROLLO E INNOVACIÓN 2026

**Juegos serios con objetos interactivos vinculados con el área de salud**

AUTORES:

- Santiago Rossetti
- Santiago Samudio

DIRECTORES:

- Cecilia Sanz
- Verónica Artola

**CONTEXTO Y MOTIVACIÓN**

El proyecto se enmarca en una línea de investigación, desarrollo e innovación del III-LIDI relacionada con el área de interacción persona-ordenador y su aplicación al escenario educativo. Al mismo tiempo, se trabaja en la línea de investigación vinculada al diseño de juegos serios y de experiencias educativas aumentadas. En este caso, se abordan objetivos educativos alineados con el área de salud, orientados a adultos mayores.

En la población de adultos mayores, la estimulación cognitiva resulta fundamental para preservar la autonomía y la calidad de vida. Esta estimulación puede abordarse desde distintos aspectos: comunicacionales, de recuperación y relación de información, y de atención. Se trabaja en el desarrollo de una aplicación basada en tecnologías de interacción por voz, que combina un asistente virtual con una interfaz multimedia. A través de ella, el usuario puede mantener una conversación natural que le permite ejercitar la memoria y estimular otros procesos cognitivos, como la atención, el lenguaje y el razonamiento.

La propuesta surge a raíz de la vinculación con una residencia de adultos mayores de la ciudad de La Plata, con quienes ya se vienen realizando otros proyectos.

**TRABAJO REALIZADO**

[Columna izquierda]

Se trabajó en el desarrollo de una aplicación móvil para la interacción directa con los adultos mayores. En esta se ofrece una interfaz de logueo con DNI y clave. Y luego, dos opciones que permiten hablar de temas de historia de vida personal o de temas generales de interés para la persona. La interacción se desarrolla a través de la voz y se dialoga con un personaje que es un búho que se llama Teté. La aplicación recibe el nombre de Te escucho, te hablo. Promueve el diálogo, y ofrece recomendaciones y recordatorios de actividades que se realizan en la residencia, del tipo: -Esta semana tenemos un taller de pintura, ¿te anotás para hacerlo?

El personaje ofrece también ciertas reacciones. Se  puede configurar sus colores y su voz, eligiendo la deseada por el usuario.

Para el funcionamiento fue necesario desarrollar una aplicación web como backend que posibilita la carga de la información de los residentes, que debe ser privada y tratada en forma segura.

[Columna derecha]

Aspectos de implementación

La interfaz móvil fue desarrollada en Flutter/Dart (SDK 3.12.2). La aplicación funciona como cliente delgado: concentra la interacción de voz y la interfaz visual (con una mascota/avatar), mientras que toda la inteligencia conversacional reside en un backend externo con el que se comunica por HTTP.

Para el servidor se trabajó con Ollama para utilizar una IA de manera local. Se realizaron pruebas con varios LLM. Se eligio gemma4:e4b por su velocidad, calidad de respuesta y adecuación a su entrenamiento con los datos precargados.

Se utiliza la técnica RAG (Retrieval-Augmented Generation) para vincular el modelo a una base de datos vectorial que se nutre de documentos locales y que considera las conversaciones ya realizadas.

[Parte inferior izquierda]

RESUMEN

En este proyecto se desarrolla un sistema orientado a la estimulación cognitiva de adultos mayores de una residencia de la ciudad de La Plata, a través de un asistente virtual, con interfaz multimedia. El sistema se compone de: 
1. una aplicación móvil que ofrece una interfaz basada en la interacción por voz, con un personaje interactivo
2. una aplicación web que opera como backend y permite la carga de datos  a los facilitadores/terapeutas de la residencia
3. un modelo de IA en un servidor local, que se entrena a partir de las conversaciones y datos de interés sobre los residentes. El proyecto es innovador y de impacto social.

[Parte inferior derecha]

CONCLUSIONES

El proyecto ha dado la oportunidad de aprender a los estudiantes y trabajar en conjunto con psicólogos de la residencia de adultos mayores, y docentes-investigadores de la facultad.

Se investigaron diferentes temas que ponen en práctica líneas de actualidad vinculadas al área de Interacción Persona-Ordenador. La propuesta es de interés local y de potencial impacto social. Se vincula con educación y salud. Aún no se ha avanzado en la
fase de pruebas con los residentes, pero se espera hacerlo en breve.

PALABRAS CLAVE

asistentes conversacionales, interacción persona-ordenador, interacción por voz, educación y salud, adultos mayores

[Franja inferior]

LIDI, LIFIA  Y LINTI
UNIVERSIDAD NACIONAL DE LA PLATA

## Descripción de imagen

[Sección central, diagrama de arquitectura]

Un diagrama representa la arquitectura del sistema. A la izquierda aparecen tres capturas de pantalla de un teléfono móvil con distintas vistas de la aplicación y otra pantalla con el personaje virtual. En el centro se representa la conexión mediante una red Wi-Fi local. A la derecha se muestra un servidor local, representado por una computadora de escritorio, asociado a los componentes Ollama, Gemma 4 y RAG.

A ambos lados del diagrama aparecen ilustraciones de dos personas mayores. Una sostiene un dispositivo móvil y la otra utiliza un teléfono para interactuar con la aplicación.

[Capturas de la aplicación móvil]

Las pantallas muestran una interfaz de acceso y opciones de interacción con el asistente virtual, representado por un búho de color marrón y naranja. También se observan elementos visuales para conversar y acceder a funcionalidades de la aplicación.

## Descripción general

El cartel presenta un proyecto de juego serio orientado a la estimulación cognitiva de adultos mayores mediante una aplicación móvil con interacción por voz y un personaje virtual llamado Teté. La propuesta busca estimular la memoria, la atención, el lenguaje y el razonamiento, además de ofrecer recordatorios de actividades de la residencia.
