# Dashboard Context

## Resumen

Este proyecto es un dashboard/local onboarding en HTML que consolida contenido de varias marcas en una sola experiencia navegable:

- `Ardene`
- `Cotton On`
- `LC Waikiki`
- `Lufian`

El objetivo es transformar exports de Genially y referencias PDF en un onboarding visual, editable y dinámico, con estructura por marca, secciones expandibles, imágenes, grids especiales y quizzes.

## Ubicación principal

- HTML principal: `/Volumes/Datos y backup/GrupoDavid/Codex/onboarding_marcas/index.html`
- Dataset generado: `/Volumes/Datos y backup/GrupoDavid/Codex/onboarding_marcas/data.js`
- Generador / normalizador: `/Volumes/Datos y backup/GrupoDavid/Codex/onboarding_marcas/scripts/extract-data.js`

## Fuentes de contenido

### PDFs de referencia entregados por el usuario

- Ardene: `/Users/luisvelasquez/Downloads/genially-68cafa25d1fcf3d4d2f3dffe.pdf`
- LC Waikiki: `/Users/luisvelasquez/Downloads/genially-6909af552ffd66bf84593564.pdf`
- Cotton On: `/Users/luisvelasquez/Downloads/genially-68939c61b5eb9e83c2e6ed53.pdf`

### Referencias de texto ya extraídas

- `/Volumes/Datos y backup/GrupoDavid/Codex/onboarding_marcas/reference/ardene_pdf_pages.txt`
- `/Volumes/Datos y backup/GrupoDavid/Codex/onboarding_marcas/reference/lcw_pdf_pages.txt`
- `/Volumes/Datos y backup/GrupoDavid/Codex/onboarding_marcas/reference/cottonon_pdf_pages.txt`

### Fuente técnica real del dashboard

El dashboard no lee los PDFs directamente en runtime. El flujo real es:

1. `extract-data.js` recopila contenido de los Genially/exportaciones.
2. Aplica limpieza, reordenamiento y personalizaciones por marca.
3. Genera `data.js`.
4. `index.html` renderiza todo desde `window.ONBOARDING_DATA`.

## Arquitectura del dashboard

### `index.html`

Contiene:

- estructura base del layout
- estilos CSS del dashboard
- navegación lateral por marca
- hero por marca
- buscador/filtro
- renderer completo de secciones
- lógica para componentes especiales

### `data.js`

Contiene el dataset ya procesado. Allí vive:

- metadata por marca
- hero de cada marca
- secciones
- bullets
- imágenes
- cards de departamentos
- quizzes
- datasets especiales para ciertos bloques

### `extract-data.js`

Es el archivo más importante a nivel de mantenimiento porque:

- centraliza la transformación del contenido bruto
- corrige errores de orden
- mueve imágenes a secciones específicas
- fusiona o elimina bloques
- genera estructuras especiales como `departmentCards` o `quizData`

Si hay que hacer cambios durables, lo ideal es hacerlos ahí, no solo en `index.html`.

## Componentes especiales soportados

`index.html` ya tiene renderers específicos para varios tipos de contenido:

- `renderConceptBoard(concepts)`
- `renderPersonasFeature(personasData)`
- `renderQuizBlock(quizData, sectionId, bulletIndex)`
- `renderDepartmentGrid(cards)`
- `renderSections(filteredSections)`

Esto permite que una sección no sea solo una lista de bullets, sino uno de estos formatos:

- board visual de conceptos
- bloque editorial de personas
- quiz / evaluación
- grid de departamentos con imagen y descripción
- lista de bullets con formato enriquecido

## Flujo de regeneración

Cuando cambie el origen del contenido, el flujo esperado es:

```bash
node "/Volumes/Datos y backup/GrupoDavid/Codex/onboarding_marcas/scripts/extract-data.js"
```

Eso vuelve a construir `data.js`.

## Estado actual por marca

### Ardene

Es la marca más trabajada y más personalizada hasta ahora.

Ajustes importantes ya incorporados:

- `Carta de Mark` con jerarquía de texto corregida
- `Somos Ardene` limpiado y reestructurado
- `Nuestros Clientes` corregido en pesos de texto
- `Personas` reordenado para priorizar:
  - introducción
  - `Aprende a Identificar Personas`
  - `Ardene Personas`
  - ejercicios
- `Estructura de Tienda` expandida con roles completos
- `Dress Code` depurado y reorganizado en:
  - `Tops`
  - `Bottoms`
  - `Calzado`
  - `Otros`
- `Cultura de Tienda y Experiencia del Cliente` reordenada
- `WE ARDENE` expandido como acrónimo con contexto
- `Producto` corregido para mover el bloque de ticket a `Etiqueta de producto`
- `Departamentos y Categorías` reconstruido como grid detallado
- `Guía de Estilos`
- `Fits`
- `Nuestras Telas`
- `VM`
- `KPI`
- `Dinámica de Tienda`
- `Evaluación` convertida a quiz
- `Felicitaciones` separada del quiz

#### Ardene: departamentos y mapeo visual

La sección `Departamentos y Categorías` ya está reconstruida con cards individuales para:

- `Tops`
- `Denim`
- `Vestidos y Faldas`
- `Acc & Joyería`
- `Calzado`
- `Ropa Íntima`
- `Swimwear`
- `MOVE`

Cada card debe tener:

- imagen correcta
- descripción
- tips de venta
- ejemplo de diálogo cuando aplique

#### Ardene: secciones más sensibles

Hay varias secciones donde el contenido ya no es “texto plano”, sino estructuras personalizadas:

- `Personas`
- `Dress Code`
- `Producto`
- `Departamentos y Categorías`
- `Nuestras Telas`
- `Fits`
- `VM`
- `KPI`
- `Evaluación`

### LC Waikiki

LCW ya tiene una base funcional, pero todavía necesita una revisión fina contra el PDF.

Ajustes ya incorporados:

- `Bienvenida` reordenada
- `Mision & Vision` limpiada
- `Servicio al Cliente` con selección visual más curada
- `Comunicación` expandida desde tooltips del Genially
- `Preguntas frecuentes` y otras secciones estructuradas
- `Éxito en tienda` enriquecido con información oculta del Genially
- `Glosario de VM` con formato especial para conceptos tipo:
  - `KEY PRODUCT:`
  - `OPCIONES:`
  - `CATEGORÍAS:`

Pendiente recomendado:

- hacer una pasada completa de LCW contra `/Users/luisvelasquez/Downloads/genially-6909af552ffd66bf84593564.pdf`
- validar nombres e imágenes de sub-marcas
- revisar material de FAQ, VM, KPI o tooltips ocultos que aún puedan faltar

### Cotton On

Cotton On existe en la data y en el dashboard, pero no se ha afinado tanto como Ardene.

Base actual:

- navegación
- hero
- secciones renderizadas
- imágenes
- bullets y estructura general

Pendiente recomendado:

- revisar la marca completa contra el PDF correspondiente
- confirmar branding/submarcas y jerarquías visuales
- validar si hay tooltips o información oculta aún omitida

### Lufian

Lufian se incorporó como una marca manual nueva a partir de su manual de operaciones y su guía de producto.

Ajustes ya incorporados:

- paleta visual gris y sobria
- imágenes locales extraídas de las portadas y páginas clave del material
- secciones de bienvenida, equipo, operaciones, stock, limpieza, VM, colección y accesorios

## Secciones con comportamiento especial

### Quiz / Evaluación

Ardene ya tiene una sección de evaluación modelada como quiz.

Soporta:

- preguntas
- opciones
- selección interactiva

La evaluación ya no debería depender de un párrafo largo.

### Grids de departamentos

La estructura `departmentCards` se usa para secciones como `Departamentos y Categorías`. Cada card puede tener:

- `title`
- `image`
- `body`
- `tips`
- `dialogue`

### Personas

La sección de `Personas` en Ardene tiene una composición editorial especial:

- imagen principal
- collage secundario
- intro estructurada
- títulos internos
- ejercicios separados

## Formato y overrides visuales

En `index.html` existe lógica para formatear ciertos bullets automáticamente:

- conceptos con `:` al inicio
- términos en mayúsculas tipo glosario
- bullets marcados como `emphasis`
- títulos internos por sección

Además hay overrides manuales por marca para casos donde el texto original del Genially no se adapta bien al layout.

## Assets / imágenes

Las imágenes usadas por el dashboard provienen principalmente de las carpetas exportadas de Genially y sus assets ya resueltos por `extract-data.js`.

En varias secciones ya se hicieron reasignaciones manuales para evitar:

- imagen correcta en card equivocada
- imágenes duplicadas
- imágenes demasiado pequeñas
- imágenes fuera de la sección correcta

Casos ya corregidos:

- departamentos de Ardene
- ticket/etiqueta de producto
- hero de Ardene
- bloques visuales de Dress Code
- imágenes de Fits y otras secciones editoriales

## Temas abiertos / cosas a revisar

### 1. LC Waikiki

Falta una réplica y corrección profunda contra el PDF para garantizar que:

- todas las sub-marcas tengan nombre + imagen correcta
- tooltips ocultos estén incluidos
- contenido no esté resumido de más

### 2. Cotton On

Necesita una revisión integral similar a la ya hecha en Ardene.

### 3. Consistencia entre `index.html` y `extract-data.js`

Cuando se corrige solo el render, los cambios pueden perderse al regenerar. Por eso:

- cambios estructurales deben ir preferentemente en `extract-data.js`
- cambios de layout puro pueden quedarse en `index.html`

## Recomendación de mantenimiento

Si se sigue iterando este dashboard, conviene trabajar con esta lógica:

1. comparar una marca contra su PDF
2. detectar faltantes, tooltips ocultos, desorden de imágenes o jerarquía visual
3. corregir la transformación en `extract-data.js`
4. regenerar `data.js`
5. ajustar en `index.html` solo cuando sea un cambio puramente visual

## Resumen ejecutivo

Hoy el dashboard ya tiene:

- experiencia multi-marca
- renderer dinámico
- quizzes
- grids especiales
- secciones enriquecidas con imágenes
- gran parte de Ardene muy avanzada

Lo que más valor daría como siguiente paso es:

- auditoría completa de `LC Waikiki` contra su PDF
- segunda auditoría de `Cotton On`
- revisión visual final de consistencia en imágenes, jerarquías y bloques especiales
