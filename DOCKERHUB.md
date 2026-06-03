# Plataforma de Texto Alternativo

Sitio web estático destinado a publicar textos alternativos de carteles educativos de la Facultad de Informática, UNLP.

## Características

- Sitio estático generado con Eleventy
- Publicado mediante Nginx
- Sin base de datos
- Sin almacenamiento persistente

## Arquitectura

La imagen utiliza una construcción multi-stage:

1. Una etapa de build basada en Node.js genera el sitio estático
2. Una etapa de runtime basada en Nginx publica el contenido generado

El contenido se sirve desde:

```text
/plataforma-texto-alternativo/
```

Las solicitudes realizadas a `/` son redireccionadas automáticamente a dicha ruta.

## Puertos

Puerto expuesto por el contenedor:

```text
80/tcp
```

Ejemplo de ejecución:

```bash
docker run -d \
  --name plataforma-texto-alternativo \
  -p 8080:80 \
  accesibilidad-info-unlp/plataforma-texto-alternativo:latest
```

## Persistencia

La aplicación no almacena datos de usuarios ni requiere volúmenes persistentes.

## Requisitos

- Docker

## Repositorio

https://github.com/accesibilidad-info-unlp/plataforma-texto-alternativo
