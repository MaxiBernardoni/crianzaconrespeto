# Auditoría UX/UI y rediseño visual de la home

Fecha: 27/10/2026. Alcance: la home (`src/pages/index.astro`) en escritorio (1280 px) y celular (375 px), servida por `astro dev`. Herramienta: skill `ux-ui-audit` (sondas de medición en el navegador: contraste WCAG, tamaño de áreas táctiles, nombres accesibles, foco con teclado, jerarquía, Gestalt) más lectura manual y capturas.

Regla del trabajo: **no se cambió contenido ni funcionalidad**, solo diseño. Las únicas excepciones están en la sección "Correcciones que tocan comportamiento".

## 1. Problemas encontrados (antes), por gravedad

| # | Gravedad | Problema | Evidencia medida |
|---|---|---|---|
| 1 | Accesibilidad, mayor | El anillo de foco en el pie casi no se ve | Anillo `rgb(63,95,101)` sobre `rgb(74,37,48)` = **1,9:1**; WCAG 1.4.11 pide 3:1 |
| 2 | Accesibilidad, mayor | El borde de los campos del formulario no se distingue del fondo | Borde `rgb(201,176,186)` sobre blanco = **2,02:1**; pide 3:1 (1.4.11) |
| 3 | Usabilidad, mayor | En celular, el botón principal de WhatsApp queda fuera de la primera pantalla porque la foto va primero | Título a 497 px y botón termina en **854 px** con pantalla de 812 px |
| 4 | Usabilidad, mayor | En celular, el menú queda abierto tapando el contenido después de elegir una sección | `details.open` seguía en `true` tras el clic |
| 5 | Accesibilidad, mayor | Áreas táctiles menores a 24 px (WCAG 2.5.8) | Links del encabezado **126×21, 68×21, 68×21, 84×21**; 8 links del pie de **20 px** de alto; casilla **18×18** |
| 6 | Accesibilidad | No hay enlace "Saltar al contenido" (WCAG 2.4.1) | El primer elemento enfocable era el logo |
| 7 | Accesibilidad | Salto de nivel de títulos h2 → h4 en el pie (1.3.1) | `skippedLevels: h2 -> h4` |
| 8 | Accesibilidad, menor | Tres botones "Quiero info" con el mismo nombre y destinos distintos (2.4.4) | 3 nombres duplicados, 3 URLs distintas |
| 9 | Visual, menor | Texto de 11,2 px y 11,5 px | `smallTextUnder12px: Lic. Jacqui Szkliarski 11.2px` |
| 10 | Visual, menor | Escala tipográfica sin sistema | **19** tamaños de letra distintos |
| 11 | Visual | Tres grillas de tarjetas idénticas seguidas; la de servicios deja un hueco (5 tarjetas en 3 columnas) | Captura; mismas tarjetas redondeadas y misma sombra repetidas |
| 12 | Visual | Rasgos de "plantilla": etiquetas en MAYÚSCULAS con tracking sobre cada título, una palabra destacada en el título, sombra gris igual en todo | Captura y CSS |

Lo que ya estaba bien (se conservó): **134 de 134** textos con contraste correcto (0 fallas), anillo de foco de 6,33:1 sobre fondo claro, un solo h1, landmarks correctos, `lang="es-AR"`, sin scroll horizontal, sin tareas largas, carga en 228 ms (dev).

## 2. Cambios de diseño

Criterio del skill `frontend-design`: evitar el "kit de tarjetas SaaS" y las etiquetas de plantilla, y gastar la audacia en un solo lugar.

- **Idea:** secciones como **hojas de papel superpuestas** con esquinas grandes, y la **forma de flor/hoja de su marca** como motivo (pétalos detrás de la foto, íconos en forma de flor, tarjetas con esquinas de hoja).
- **Tipografía:** Fraunces con ejes `SOFT=100` y `WONK=1` (más blanda y con carácter) para títulos; **Figtree** para el cuerpo (reemplaza a Poppins, de la que ya no depende el sitio). Escala de 7 pasos: 13 / 15 / 17 / 20 / h2 / h1 / cita.
- **Color:** misma paleta de marca, con más contraste entre bloques: banda **burdeos** para la frase y el pie, tarjeta destacada en burdeos sobre fondo salvia.
- **Composición:** título con segunda línea sangrada y sin palabra de otro color; "Qué trabajamos" pasó de 6 tarjetas a una **lista editorial** con título fijo al costado; "Servicios" tiene **un servicio destacado y cuatro en 2×2** (sin hueco); "Entrevistas" pasó de tarjetas a **filas con filetes**; las etiquetas sobre los títulos son cursivas en minúscula y ya no mayúsculas.
- **Movimiento:** un solo momento, los pétalos de la portada se abren al cargar (se desactiva con `prefers-reduced-motion`). Se quitaron los saltos al pasar el mouse sobre cada tarjeta.

## 3. Resultado (después)

| Medida | Antes | Después |
|---|---|---|
| Contraste de textos | 134/134 | **135/135** (0 fallas) |
| Foco en el pie | 1,9:1 | **12,03:1** |
| Borde de campos | 2,02:1 | **3,56:1** |
| Áreas táctiles < 24 px | 13 elementos | **0** |
| Botón principal en la primera pantalla del celular | No (termina en 854 px de 812) | **Sí** (termina en 540 px) |
| Menú móvil tras elegir sección | Queda abierto | **Se cierra** |
| Enlace "Saltar al contenido" | No | **Sí** |
| Saltos de nivel de título | 1 | **0** |
| Nombres de botón duplicados | 3 | **0** (cada botón nombra su servicio) |
| Tamaños de letra distintos | 19 | **9** (mínimo 13 px, antes 11,2 px) |
| Scroll horizontal | No | No |

La re-auditoría detectó una regresión propia: la etiqueta "Grupal" de la tarjeta destacada quedó con 1,85:1 (texto crema sobre malva). Se corrigió y la medición final no tiene fallas.

## 4. Correcciones que tocan comportamiento (mínimas)

- El menú móvil ahora se cierra al elegir una sección (script de 3 líneas). Era un defecto de la auditoría, no una función nueva.
- Los botones de servicios tienen `aria-label` con el nombre del servicio. El texto visible no cambió.

## 5. Pendientes que la auditoría vio y se resolvieron después

1. **Formulario de novedades que simulaba un alta:** ya no. Sin servicio conectado (`novedades.endpoint` vacío) el botón abre un email ya escrito a la casilla de Jacqui con el texto de consentimiento; con `endpoint` se muestra un formulario real que envía a esa dirección. Se probaron las dos ramas.
2. **Link de privacidad muerto:** ahora lleva a `/privacidad`, una página con un **borrador** de política (datos que se reciben, servicios de terceros, sin cookies, derechos y leyenda de la Ley 25.326). **Requiere revisión de un abogado.**
3. **"Escribime" con destinos distintos:** el botón del encabezado ahora abre WhatsApp, igual que el de la portada y el flotante. "Contacto" sigue en el menú móvil y en la página.
4. **Metadatos para compartir:** `og:*`, `twitter:card`, `theme-color` y una imagen `public/img/og.png` de 1200×630. El `canonical` y las URL absolutas aparecen cuando se cargue `sitio.url` (sin dominio todavía).
5. Verificación posterior: 0 fallas de contraste en ambas páginas (133 y 47 textos medidos), 0 áreas táctiles menores a 24 px, sin saltos de títulos ni desbordes.

Siguen abiertos: fotos reales y matrícula (revisar de nuevo portada y pie al tenerlas), dominio, cuenta de newsletter y revisión legal.

## 6. Cómo repetir la auditoría

Las sondas viven en el plugin `ux-ui-audit` (no están en el proyecto). Para repetirla: servir el sitio con `npm run dev`, copiar temporalmente las sondas a `public/_audit/`, cargarlas con `fetch` desde la página y evaluarlas, y **borrar `public/_audit/` al terminar**. Para el foco: apretar Tab de verdad antes de correr `probe-focus.js` (enfocar por código da falsos negativos).
