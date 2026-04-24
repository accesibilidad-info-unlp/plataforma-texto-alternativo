---
layout: layouts/base.njk
title: Catálogo
---

{% from "partials/catalog-tree.njk" import renderTree %}

## Navegación por materia y año

Para acceder a los textos alternativos, desplegá cada materia y luego el año correspondiente.

<div class="card shadow-sm border-0">
  <div class="card-body">
    {{ renderTree(collections.catalogTree) }}
  </div>
</div>
