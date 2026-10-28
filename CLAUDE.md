# CLAUDE.md — Proyecto "Crianza con Respeto" (web de regalo)

Documento de traspaso para cualquier sesión de Claude que retome este proyecto. Léelo entero antes de tocar nada. Última actualización: 27/10/2026.

Idioma de trabajo y de todo el contenido del sitio: **español rioplatense** (voseo: "escribime", "contame").

---

## 1. Qué es esto y cuál es el objetivo

- **Es un regalo.** El usuario (Max, desarrollador) le está haciendo una página web a su **madre**, la **Lic. Jacqueline "Jacqui" Szkliarski**, psicóloga sistémica y perinatal de CABA, Argentina, especializada en **crianza respetuosa**. Su marca y su usuario de Instagram son **Crianza con Respeto / @crianza.con.respeto**.
- **Es una sorpresa.** Ella no sabe nada todavía. Por eso: **no se publica, no se despliega, no se le escribe a nadie ni se sube a ningún servicio externo sin que el usuario lo pida explícitamente.** Todo contenido final necesita el OK de Jacqui antes de publicarse.
- **Objetivo del sitio:** darle a Jacqui una casa digital propia, profesional y cómoda, que le dé ventaja real: que se entienda en 5 segundos para quién es y cuál es el paso siguiente, que sea fácil escribirle o sacar turno (WhatsApp, y más adelante agenda), y que cumpla las reglas de publicidad de una psicóloga (matrícula visible, sin promesas, sin precios ni testimonios de pacientes mientras no se confirme con el Colegio). Hoy solo tiene una tienda en Tiendanube y Instagram; **no tiene sitio web con dominio propio**.
- **Requisito clave de mantenimiento:** ella **no es técnica** y debe poder editar textos, fotos y entrevistas sola, sin tocar código. Por eso el contenido vive en archivos JSON editables con **Pages CMS**.

## 2. Qué pasó hasta ahora (historia)

1. El usuario pidió dos investigaciones en sesiones separadas y paralelas:
   - **Marca y presencia:** `investigacion-marca.md` (estilo visual, redes, info pública de Jacqui).
   - **Cómo hacer la página:** `investigacion-web.md` (estructura, funciones, ética/legal, tecnología). Referencia pedida: https://moahu.com.ar/ (tienda de rolos de masaje; sirve de referencia de tono y conversión, no de estructura) más otros 12 sitios.
2. Con esas investigaciones se diseñó la **home** como maqueta HTML estática (hoy en `maqueta/index.html`). El usuario la aprobó ("me gusta la home").
3. Se **portó la home a Astro** con el contenido separado en JSON y se dejó la configuración de **Pages CMS** (`.pages.yml`). Compila sin errores (`npm run build`) y se verificó en el navegador integrado (escritorio y celular, sin scroll horizontal).
4. **Auditoría y rediseño visual:** se auditó la home (contraste, áreas táctiles, foco, accesibilidad) con el skill `ux-ui-audit`, se rehízo la composición con `frontend-design` (nueva tipografía, hojas superpuestas, lista editorial, servicio destacado) y se corrigieron los problemas; detalle en `auditoria-ux-ui.md`. No se tocó contenido ni funciones, salvo el cierre automático del menú móvil.
5. **No se hizo todavía:** git propio, repositorio en GitHub, conexión de Pages CMS, hosting, dominio, blog, agenda, newsletter real, política de privacidad, fotos reales. Ver sección 9.

## 3. Estado actual (resumen rápido)

| Cosa | Estado |
|---|---|
| Home (una sola página) | Hecha, en Astro, con contenido en JSON |
| Editor de contenido (Pages CMS) | Configurado en `.pages.yml`, **sin probar** y sin repo conectado |
| Fotos de Jacqui | **Faltan** (hay recuadro con el logo como marcador) |
| Matrícula profesional | **Falta** (no se encontró pública; se oculta en producción si está vacía) |
| Newsletter | Sin servicio conectado: el botón abre un email ya escrito. Falta cuenta de newsletter y cargar `novedades.endpoint` |
| Política de privacidad | **Borrador escrito** en `/privacidad` (`privacidad.json`). **Falta revisión de un abogado** (ver sección 8) |
| Metadatos para compartir | Hechos; falta cargar `sitio.url` cuando haya dominio |
| Git del proyecto | Repo propio en esta carpeta, remoto https://github.com/MaxiBernardoni/crianzaconrespeto (**público**; rama `main`). Ver sección 8 |
| Despliegue | **Ninguno** (a propósito) |

## 4. Estructura de archivos

```
crianza con respeto/
├─ CLAUDE.md                  ← este documento (traspaso)
├─ README.md                  ← guía corta para quien mantiene el sitio
├─ investigacion-marca.md     ← informe de marca/redes/estilo de Jacqui (fuente de verdad de datos sobre ella)
├─ investigacion-web.md       ← informe de estructura, funciones, ética/legal y stack
├─ auditoria-ux-ui.md         ← auditoría UX/UI y accesibilidad (antes/después) y pendientes de diseño
├─ referencias/               ← capturas de Instagram y de su tienda + logo original (500×500 PNG)
├─ maqueta/index.html         ← maqueta HTML original aprobada (ya no se usa; queda de referencia visual)
├─ src/
│  ├─ layouts/Base.astro      ← estructura común: <head> con metadatos, encabezado, pie, WhatsApp flotante, menú móvil
│  ├─ lib/wa.ts               ← arma los links de WhatsApp
│  ├─ pages/index.astro       ← la home (todas las secciones; lee los JSON)
│  ├─ pages/privacidad.astro  ← política de privacidad (lee privacidad.json)
│  ├─ styles/global.css       ← todo el CSS (tokens de marca en :root)
│  └─ content/                ← TODO el texto editable
│     ├─ sitio.json           ← datos generales, contacto, redes, matrícula, avisos de pie
│     ├─ inicio.json          ← portada, para quién, sobre mí, frase, novedades, contacto
│     ├─ trabajamos.json      ← tarjetas "qué trabajamos"
│     ├─ servicios.json       ← tarjetas de servicios (+ mensaje de WhatsApp por servicio)
│     ├─ prensa.json          ← entrevistas y notas en medios (con links)
│     └─ privacidad.json      ← texto de la política de privacidad (secciones editables)
├─ public/img/logo.png        ← logo (corazón con alas y manitos); también favicon. Acá van las fotos que suba ella.
├─ public/img/og.png          ← imagen 1200×630 para compartir el link (WhatsApp/Instagram), hecha con Chrome headless
├─ .pages.yml                 ← configuración de Pages CMS (un formulario por JSON)
├─ astro.config.mjs, package.json, .gitignore
└─ .claude/launch.json        ← config para levantar el servidor de desarrollo desde la app de Claude
```

`dist/`, `node_modules/` y `.astro/` son generados (están en `.gitignore`).

## 5. Cómo funciona

- **Astro 7 (`^7.4.2`), sitio 100 % estático**, sin framework de UI ni dependencias extra (solo `astro`). Casi sin JavaScript: el único script es el del formulario de novedades de maqueta; el menú móvil es un `<details>` sin JS.
- `index.astro` importa los 5 JSON y los renderiza. Para el texto, **se edita el JSON (o Pages CMS), no el `.astro`**.
- **Campos con comportamiento especial:**
  - `inicio.hero.foto` e `inicio.sobre_mi.foto`: si están vacíos se ve el recuadro con el logo; si tienen ruta (ej. `/img/jacqui.jpg`) se muestra la foto dentro de la **forma de flor de 4 círculos** (SVG `clipPath` `#flor`, la misma forma que usa en su tienda).
  - `sitio.matricula`: si está vacía, el pie no la muestra en producción; en desarrollo muestra "pendiente de completar" (`import.meta.env.DEV`).
  - `sitio.whatsapp` (solo números, con código de país, hoy `5491151105497`) + `sitio.mensaje_whatsapp` arman el link `wa.me`. Cada servicio tiene su propio `mensaje`.
  - `inicio.sobre_mi.texto`: los párrafos se separan con una línea en blanco.
  - `servicios.nota`: si queda vacía, no se muestra.
  - `inicio.novedades.endpoint`: dirección de envío del servicio de newsletter. **Vacío** (hoy): el botón abre un email ya escrito a `sitio.email` con el texto de consentimiento y no hay formulario. **Con valor**: se muestra el formulario real (`method="post"` a esa dirección, campos `nombre`, `email`, `consentimiento`; si el proveedor pide otros nombres, cambiarlos en `index.astro`).
  - `sitio.url`: dirección completa del sitio (ej. `https://crianzaconrespeto.com.ar`, sin barra final). **Vacía** (hoy): no hay `canonical` ni `og:url` y `og:image` es relativa. **Hay que cargarla al tener dominio**, si no WhatsApp/Instagram no muestran la vista previa.
- **Metadatos para compartir** (en `Base.astro`): Open Graph (`og:*`), `twitter:card=summary_large_image`, `theme-color`. Falta el dato estructurado JSON-LD (tipo Psychologist/LocalBusiness) para SEO.
- **Secciones de la home, en orden:** encabezado fijo → portada → "Para quién es" → "Qué trabajamos" → "Servicios" → "Sobre mí" → frase destacada → "Entrevistas" → formulario de novedades → contacto → pie con avisos → botón flotante de WhatsApp.
- **Tipografías (Google Fonts):** Fraunces con ejes `SOFT=100` y `WONK=1` (títulos) y **Figtree** (cuerpo). Ya no se usa Poppins en el sitio (sí la usa su tienda). Escala de 7 pasos definida como variables `--t-*` en `global.css`: no agregar tamaños sueltos.
- **Sistema visual (rediseño del 27/10/2026, ver `auditoria-ux-ui.md`):** secciones como "hojas" superpuestas (`.hoja`, con `--solape`), forma de flor (`clipPath #flor`) y esquinas de hoja (`--hoja`). Servicios: el **primer ítem de `servicios.json` se muestra destacado** (tarjeta grande burdeos), el resto en 2×2. "Qué trabajamos" es una lista editorial y "Entrevistas" son filas; no volver a grillas de tarjetas iguales. El color del anillo de foco se define con `--ring` por sección (crema sobre fondos oscuros).
- **Pages CMS:** `.pages.yml` define `media: public/img → /img` y una entrada `type: file` por cada JSON, con etiquetas en español para que ella entienda cada campo. Está escrito de memoria sobre la sintaxis de Pages CMS y **nunca se validó contra el servicio**: al conectar el repo, revisar que no haya errores de config.

## 6. Cómo correrlo (Windows, Node 24, npm 11)

```bash
npm install          # solo la primera vez
npm run dev          # http://localhost:4321
npm run build        # genera dist/
npm run preview      # sirve dist/
```

En la app de Claude: `preview_start` con el nombre `astro` (usa `.claude/launch.json`, puerto 4321).

**Trampas ya vividas:**
- En el shell, escribir archivos con *heredocs* que contienen emojis (por ejemplo `👨‍👩‍👧`) falló con "unexpected EOF". Para archivos con emojis o acentos usar la herramienta Write, no `cat <<EOF`.
- Abrir `index.html` suelto (`file://`) rompe las rutas relativas de las imágenes; usar siempre el servidor.
- La barra negra que aparece abajo en el navegador en desarrollo es la barra de herramientas de Astro, no es parte del sitio.

## 7. Qué se sabe de Jacqui y su marca (resumen; el detalle y las fuentes están en `investigacion-marca.md`)

Etiquetas del informe: **[V]** verificado en fuente primaria, **[S]** sin verificar, **[A]** análisis del investigador.

- **Quién:** Lic. en Psicología, psicóloga **sistémica y perinatal**, CABA. Se presenta como "Jacqui". Docente invitada en la Diplomatura de la **Universidad de Belgrano** (ciclo 2026) y en **BA Educación Ejecutiva**. Diplomada en Parentalidad y Apego (Fundación América por la Infancia). Formación sistémica (ESA), posgrado perinatal, máster en PNL (según su propia web).
- **Presencia:** Instagram @crianza.con.respeto (≈3.800 seguidores), Threads (755), YouTube propio casi inactivo (11 videos), tienda Tiendanube (crianzaconrespeto.mitiendanube.com), WhatsApp +54 9 11 5110-5497, email crianzaconrespetoarg@gmail.com (ambos publicados por ella como contacto profesional). LinkedIn existe pero está **desactualizado** (el informe tiene el detalle). **No tiene** TikTok, podcast ni Linktree; Facebook no confirmado.
- **Servicios:** grupos de crianza (embarazo/puerperio, bebés 0–1, niños 2–6) con encuentros mensuales y grupo de WhatsApp; atención individual y orientación a padres (online); charlas pregrabadas ("Crianza con Respeto – Fundamentos"; "Preparto" próximamente); grupo de trabajo y supervisión para profesionales; charlas institucionales. Atiende familias del exterior ("De Arg al mundo").
- **Marca visual:** pasteles cálidos (durazno, crema, malva, rosa corazón) + verde azulado grisáceo; texto burdeos; logo corazón rosa con alas crema y dos manitos; hojitas/ramas en esquinas; mucho aire; frases cortas centradas. Paleta del sitio (tokens en `global.css`): crema `#FBF4EA`, durazno `#F3DDD2`, rosa `#E79FA0`, malva `#C9B0BA`, salvia `#8CA7AC`, burdeos `#4A2530`.
- **Voz:** voseo rioplatense, valida primero y orienta después, "ternura + firmeza", sin culpa, sin tecnicismos, incluye a papás. Lemas suyos: "Ayudo a familias a construir vínculos sanos y respetuosos", "Poner límites con ternura", "No estás fallando. Te está faltando red".
- **Contraste/accesibilidad:** el rosa `#E79FA0` **no** sirve como color de texto sobre blanco (su tienda actual lo hace y se lee mal). Usarlo para fondos y botones con texto burdeos.

### Errores y trampas sobre su información (no repetirlos)

1. **Es falso que sea docente de la UBA.** Un resumen de buscador la mencionaba así, pero esa línea corresponde a otra docente. **No usar.**
2. **No hay podcast verificado a su nombre.** Descartar cualquier mención.
3. **El canal de YouTube "Motivarte Oficial" no es suyo** (es una fundación donde dio una entrevista; su tienda lo enlaza como "canal oficial", probablemente por error).
4. **Ortografía del nombre inconsistente:** Jacqueline / Jaqueline / Jacqui / "Jacqueline A.". En el sitio se usa "Lic. Jacqueline (Jacqui) Szkliarski". **Confirmar con ella** cómo lo quiere.
5. **Instagram marca varias de sus piezas como "Contenido de IA"** (probablemente las fotos de bebés y mamás). Para la web: **fotos reales**, no stock/IA.
6. **No reproducir** el número fiscal que aparece en el pie de su tienda; no hace falta.
7. **Homónimos:** otras Jacqueline/Jaqueline psicólogas o deportistas en otros países no son ella.
8. **Testimonios de su tienda** (cuatro, con nombre): públicos, pero no se usaron en el sitio. Antes de usarlos hay que pedir autorización y revisar la ética (ver siguiente sección).
9. **Matrícula:** no se encontró ningún número público. No inventarlo.

## 8. Reglas y decisiones de diseño ya tomadas (y por qué)

Vienen de `investigacion-web.md` (secciones 5 y 9). **No las deshagas sin hablar con el usuario.**

- **Sin precios publicados.** El Código de Ética de FePRA (6.1.1.1) pide abstenerse de publicitar honorarios. La home dice "Los valores se informan por WhatsApp". Su tienda sí tiene precios en ARS (ver `investigacion-marca.md` §3.4) pero no se trasladaron. Consultar al Colegio antes de cambiarlo.
- **Sin testimonios de pacientes** (riesgo de secreto profesional). Alternativas en el informe web.
- **Sin promesas de cura ni lenguaje clínico/diagnóstico.**
- **Matrícula visible** (campo `sitio.matricula`) cuando la tenga.
- **Aviso de alcance y aviso de crisis en el pie** (107 SAME y 135 asistencia en crisis CABA/GBA). **Los teléfonos no se verificaron**: confirmarlos y revisar la jurisdicción antes de publicar.
- **Ley 25.326 de protección de datos:** consentimiento expreso en formularios, política de privacidad, minimizar datos; ojo con servidores en EE. UU. (Cal.com, newsletter). Posible inscripción en el RNBD: consultar a un abogado.
- **Dominio y cuentas (hosting, CMS, repo, newsletter) a nombre de ella**, no del desarrollador; se citó el caso de un sitio de crianza argentino con el dominio desconectado.
- **Git:** esta carpeta tiene **su propio repo** (`git init` el 27/10/2026) dentro de otro repo que está en `C:/Users/Max` (el home del usuario, con cientos de archivos sin seguimiento). Trabajar siempre desde esta carpeta y confirmar con `git rev-parse --show-toplevel` que la raíz es `.../crianza con respeto`. El remoto `origin` es https://github.com/MaxiBernardoni/crianzaconrespeto y es **público**: cualquiera puede ver el código, los textos y las capturas de `referencias/`. Se pusheó por pedido explícito del usuario; no volver a pushear sin que lo pida. Pages CMS necesita un repo, idealmente a nombre de Jacqui, así que esto puede cambiar.

## 9. Pendientes y decisiones abiertas

**Decisiones del usuario (Max):**
1. ¿Se crea un repo propio y se conecta a GitHub? ¿A nombre de quién (idealmente de Jacqui)?
2. Hosting: Cloudflare Pages o Netlify (gratis) y dominio (`.com.ar` ≈ ARS 8.500/año, cifra verificada en el informe).
3. ¿Se mantiene la tienda Tiendanube (cobros) y el sitio la linkea, o se migra todo?
4. ¿Cuándo y cómo se le cuenta a Jacqui? Se necesita una sesión con ella para fotos, textos, matrícula y aprobación.

**Contenido que solo ella puede dar** (lista completa de 15 puntos en `investigacion-marca.md` §7): nombre exacto preferido, matrícula, archivos originales del logo (Canva) y paleta/fuentes oficiales, fotos reales y autorizaciones, qué módulos dicta en la UB, zona/horarios del consultorio, política de precios, descripción completa de supervisión y grupos, otras redes, política de uso de IA en imágenes, objetivos de la web, preferencia de contacto (WhatsApp vs agenda).

**Trabajo técnico pendiente, por fases** (de `investigacion-web.md` §8):
- **MVP que falta:** página de **política de privacidad**; **agenda de primera entrevista con Cal.com** + formulario de consentimiento; formulario de contacto alternativo; **newsletter real** (Brevo/MailerLite/Mailchimp, plan gratis); **1–2 guías PDF**; **blog con 3–5 notas** (colección de contenido Markdown en Astro + entrada en Pages CMS); **página `/links`** para la bio de Instagram con 6 posts curados; **FAQ**; **analítica sin cookies** (Plausible o Cloudflare Web Analytics); sitemap/SEO (agregar `site` en `astro.config.mjs` cuando haya dominio).
- **Fase 2:** talleres con reserva y **link de pago de Mercado Pago**; secuencia de bienvenida por email; más descargables; páginas por tema/edad; botón de arrepentimiento y términos si vende por la web.
- **Fase 3:** cursos grabados en plataforma externa; feed de Instagram; membresía. Área privada: **no**, salvo necesidad clara y revisión legal.
- **Pendiente de verificar:** cifras de costos de Mercado Pago, Calendly y Google Workspace (marcadas 🔶 en el informe web); validar `.pages.yml`; probar el flujo de edición completo con ella.
- **Pendientes de la auditoría de diseño:** resueltos (ver `auditoria-ux-ui.md` §5). Quedan los que dependen de datos externos: servicio de newsletter (`novedades.endpoint`), dominio (`sitio.url`) y revisión legal de la política.
- **Política de privacidad: es un borrador.** Dice que el sitio **no usa cookies ni estadísticas** y que carga Google Fonts. **Si se agrega analítica, un formulario con otro proveedor o se autoalojan las fuentes, hay que actualizar `privacidad.json`.** Un abogado debe revisarla y confirmar si corresponde inscribir la base de datos (RNBD) y qué decir sobre transferencia internacional (Ley 25.326, art. 12). No se incluyó domicilio legal porque no se conoce.
- Decisión de **rendimiento/accesibilidad:** meta LCP ≤ 2,5 s, mobile first (el tráfico viene de Instagram). Hoy las fuentes cargan desde Google Fonts; si se quiere cero terceros, autoalojarlas.

## 10. Cómo trabajar en este proyecto (reglas para sesiones futuras)

1. **No inventes datos sobre Jacqui.** Todo hecho sobre ella sale de `investigacion-marca.md` con su etiqueta de confianza. Lo no verificado queda marcado como pendiente.
2. **No publiques ni subas nada** (ni artefactos, ni hosting, ni redes, ni repositorios) sin pedido explícito. Es una sorpresa y el contenido necesita su aprobación.
3. **No cambies las decisiones éticas/legales de la sección 8** sin consultar.
4. **Cambios de contenido → JSON.** Si agregás un campo nuevo, actualizá también `.pages.yml` para que ella pueda editarlo.
5. **Mantené la marca:** paleta, tipografías, voseo, tono cálido sin culpa. Emojis suaves (💞 💙 🌱 🤍). Evitar tipografía "bubble" del banner de su tienda.
6. **Mantené el sitio liviano y estático:** pocas dependencias, casi sin JS. Aplica la regla de "lo más simple que funciona".
7. Si agregás una función con datos personales, incluí consentimiento y revisá la Ley 25.326.
8. Verificá en el navegador (escritorio y celular, sin scroll horizontal) antes de dar algo por terminado.
9. Actualizá este documento cuando algo cambie (estado, decisiones, pendientes).

## 11. Referencias

- `investigacion-marca.md` — 9 secciones: resumen, redes, estilo visual con hex, información profesional, audiencia, homónimos y errores, guía de marca, huecos de información, fuentes.
- `investigacion-web.md` — 11 secciones: resumen, análisis de 13 sitios (Moahu incluido), estructura y copy, funciones priorizadas, ética y datos en Argentina, técnica (opciones, hosting, dominio, SEO), diseño y UX, recomendación final, riesgos y decisiones, metodología, fuentes. Usa etiquetas ✅ verificado / 🔶 no verificado / 💭 opinión.
- Pages CMS: https://pagescms.org · Astro: https://astro.build
