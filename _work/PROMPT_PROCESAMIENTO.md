# Prompt de procesamiento con IA de material visual

## Objetivo

Analizá la imagen completa de un cartel y producí una versión textual accesible en Markdown.

El resultado debe:

- transcribir todo el texto visible y legible
- describir las imágenes y otros elementos visuales relevantes
- organizar el contenido respetando su estructura y orden de lectura
- utilizar indicaciones espaciales únicamente cuando sean necesarias para orientar al lector

No asumas una estructura fija. La organización debe surgir de la composición del cartel.

## Estructura de salida

El documento debe utilizar la siguiente estructura:

- Un único `# Heading1` que corresponde al título del cartel
- `## Heading2` para las secciones principales de contenido: texto transcrito, descripción de imagen y descripción general
- `**Negrita**` para subtítulos o elementos organizativos dentro de una misma sección
- `[Corchetes]` para indicar contexto, ubicación o agrupación dentro del cartel original

Los únicos `## Heading2` que deben utilizarse son:

- `## Texto transcrito`
- `## Descripción de imagen`
- `## Descripción general`

No es obligatorio utilizar las tres secciones. Incluí únicamente las que correspondan al contenido del cartel.

Utilizá `## Heading2` únicamente para estas tres secciones normalizadas. No repitas estos `## Heading2` para crear nuevas divisiones dentro del documento.

No utilices otros niveles de encabezado.

No uses `---` para dividir contenido.

No utilices encabezados para representar diferencias visuales de tamaño, color, posición o diseño.

## Texto transcrito

Transcribí el texto visible y legible del cartel.

Conservá:

- palabras y frases
- números y fechas
- nombres propios y siglas
- enlaces e información de contacto
- listas
- llamados a la acción

No reemplaces texto visible por una paráfrasis.

No fusiones ni reformules varios fragmentos independientes en una única oración o párrafo para resumir su contenido.

Si una palabra o fragmento no puede leerse con seguridad, no inventes su contenido. En su lugar, utilizá la etiqueta textual `<incomprensible>`.

## Descripción de imagen

Describí las imágenes que aporten información relevante para comprender el cartel.

Incluí, cuando corresponda:

- personas
- objetos
- lugares
- acciones
- símbolos
- ilustraciones
- fotografías
- otros elementos visuales con función comunicativa

No describas elementos puramente decorativos.

No inventes información que no pueda determinarse a partir de la imagen.

## Organización y orden de lectura

Organizá el contenido para que pueda ser leído de forma lineal sin perder la relación entre sus partes.

Respetá la organización espacial del cartel cuando sea relevante para comprender el contenido.

Los elementos que pertenezcan a una misma unidad de contenido deben mantenerse juntos.

Cuando la posición de un bloque sea necesaria para comprender la relación entre sus elementos, utilizá un landmark de ubicación entre corchetes.

No intentes reproducir visualmente el diseño original.

## Landmarks de ubicación

Utilizá `[corchetes]` únicamente cuando la ubicación o relación espacial ayude a comprender la organización del cartel.

Preferí indicaciones simples, como:

- `[parte superior]`
- `[parte inferior]`
- `[centro]`
- `[lado izquierdo]`
- `[lado derecho]`

Cuando sea necesario expresar una relación entre elementos, podés utilizar:

- `[arriba de]`
- `[debajo de]`
- `[a la izquierda de]`
- `[a la derecha de]`
- `[junto a]`
- `[entre]`
- `[alrededor de]`

## Formato textual

Conservá mediante Markdown las características estructurales relevantes del contenido.

Cuando corresponda:

- utilizá `**negrita**` para subtítulos o elementos organizativos relevantes
- utilizá listas Markdown cuando el contenido sea una lista
- utilizá guión `-` para cada elemento de la lista

No combines en un mismo párrafo textos que correspondan a bloques o mensajes independientes del cartel.

No uses punto y coma `;` ni punto `.` en las listas.

## Verificación

Antes de entregar el resultado, comprobá internamente:

- ¿Transcribí todo el texto legible?
- ¿Describí las imágenes relevantes?
- ¿La estructura refleja la organización del cartel?
- ¿El orden de lectura es comprensible?
- ¿Utilicé únicamente los landmarks necesarios?
- ¿Separé correctamente texto y descripción?
- ¿Evité inventar información?

No incluyas esta verificación ni las respuestas en el output.

## Formato de salida

Entregá únicamente el contenido Markdown resultante.

No incluyas:

- explicaciones previas o posteriores
- comentarios sobre la calidad de la imagen
- razonamiento
- notas para el revisor
- código envolvente
- bloques de código que contengan toda la respuesta

El resultado debe comenzar directamente con:

```markdown
# Título

...
```

Si no es posible identificar un título, utilizá:

```markdown
# Sin título identificado

...
```