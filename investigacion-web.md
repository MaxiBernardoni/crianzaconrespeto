# Investigación: cómo debería ser la web de Jacqueline Szkliarski ("crianza.con.respeto")

> Alcance: estructura, funciones, aspectos éticos/legales y tecnología. El estilo visual y la información pública de ella los investiga otra sesión.
> Fecha de la investigación: 27/10/2026. Todo en español rioplatense.

## Cómo leer este informe

Cada afirmación importante lleva una etiqueta para que sepas cuánta fe darle:

| Etiqueta | Significa |
|---|---|
| ✅ | **Verificado**: lo leí en una fuente primaria (texto de la norma, página oficial, sitio del proveedor) o lo vi yo en el navegador. |
| 🔶 | **Reportado / no verificado**: sale de una fuente secundaria (blog, nota periodística, resultado de búsqueda) o de una lectura automática de la página que no pude contrastar. |
| 💭 | **Opinión mía**: criterio de diseño, de producto o de estrategia. Discutible. |

**Limitaciones que tenés que conocer** (detalle completo en la sección 10):

- De los sitios comparados, solo pude medir rendimiento y ver en navegador a algunos (Moahu, Sara Tarrés, Elisenda Pascual, Machy Guerrero, Adhara Monzó, Good Inside). El resto lo analicé con una herramienta que extrae el texto de la página y lo resume; sirve para estructura y copy, pero puede perderse cosas que se cargan con JavaScript (por ejemplo, contadores animados).
- No corrí Lighthouse ni PageSpeed. Las cifras de velocidad son **una sola carga** en el navegador integrado de la app, no un laboratorio.
- Hay precios (Calendly, Mercado Pago, Google Workspace) que no pude confirmar en la fuente oficial. Están marcados.
- **No soy abogado.** La parte legal es un mapa de qué mirar y qué preguntarle al Colegio y a un profesional, no asesoramiento.

---

## 1. Resumen ejecutivo

1. **Lo que más importa en esta web no es la tecnología, es la combinación de tres cosas:** (a) que se entienda en 5 segundos para quién es y cuál es el paso siguiente, (b) que sea fácil escribirle o sacar turno (WhatsApp + agenda) y (c) que cumpla las reglas de publicidad de una psicóloga (nombre y matrícula visibles, sin precios publicados, sin promesas). Casi todos los sitios que revisé fallan en alguna de las tres.
2. **Moahu es una buena referencia de *tono y de conversión*, no de estructura.** Es una tienda de rolos de masaje (no de salud mental). Rescato: mensaje único y directo, voseo natural, WhatsApp flotante, prueba social con nombre, FAQ. Descarto: cuenta regresiva de despacho, descuentos, 200 pedidos de red por página y un primer pantallazo vacío en celular.
3. **Hay un hueco (💭, con la muestra limitada que pude encontrar):** de los sitios argentinos que analicé, ninguno combinaba claridad + agenda + matrícula visible + recursos + aviso de alcance. Uno (crianzaempatica.com) hoy tiene el dominio desconectado de Wix ✅, lo cual es un buen recordatorio de por qué el dominio tiene que estar a nombre de ella.
4. **Recomendación técnica (💭):** sitio estático con **Astro**, contenido en archivos Markdown editados con un CMS visual gratuito (**Pages CMS** como primera opción), hosteado gratis (Cloudflare Pages o Netlify), dominio **.com.ar** (ARS 8.500/año ✅), agenda con **Cal.com** (plan gratis ✅), WhatsApp y analítica sin cookies. Costo del primer año: del orden de **ARS 8.500** más, opcionalmente, USD 108 de analítica. Alternativa si no querés depender de que vos mantengas el código: WordPress (más fácil de editar *todo*, más mantenimiento).
5. **Lo que debería decidir el usuario antes de publicar** (sección 9): qué Colegio/jurisdicción la rige, si ofrece clínica o solo orientación/talleres, si pueden publicarse precios o "gratis", si habrá testimonios, y quién mantiene el sitio.

---

## 2. Análisis de sitios

### 2.1 Referencia de partida: Moahu — https://moahu.com.ar/

**Qué es:** tienda online de rolos de masaje de caucho reciclado para deportistas. No tiene nada que ver con salud mental, pero la mamá del usuario la eligió/propuso como referencia, así que la desmenuzo.

**Estructura observada** (✅ para lo que vi en el navegador; 🔶 para lo que viene de la lectura automática):

- Menú superior: *Productos · Por qué macizo · Personalizar · Reseñas* + botón de carrito "Comprar" ✅.
- Orden de secciones: hero ("Subite a la ola") → "Elegí tu rolo" con dos productos y precios → prueba social con cifra ("Más de 100/800 ya se subieron a la ola"; la cifra cambió entre dos lecturas, probablemente es un contador animado) → referentes/atletas con nombre → cliente institucional (Comité Olímpico Argentino) → reseñas → comparativa visual "Uno es macizo. El otro, hueco." (con aviso "No es un ensayo certificado") → material → personalización → "1 año de garantía" → usos → Instagram (@moahu_) → videos → tienda/contacto → FAQ → carrito lateral → aviso de cookies ✅ (encabezados leídos en el DOM).
- CTAs: "Comprar", "Ver productos", "Personalizar el mío", "Escribinos por WhatsApp". **WhatsApp es un botón flotante fijo en pantalla** ✅ (vi el ícono en la esquina inferior derecha en desktop y celular).
- Urgencia comercial: "Despachamos el jueves 29/10 · Comprá dentro de 1 d 17 h 05 m" y "Envío gratis desde $150.000" ✅ (visto en celular).
- Plataforma: probablemente Tienda Nube 🔶 (inferido por rutas de assets; no lo confirmé).

**Qué funciona (💭):**

- **Un solo mensaje por pantalla** y verbos en voseo ("Subite", "Hacelo tuyo", "Recuperate mejor"): cercano sin ser infantil.
- **Prueba social concreta** (nombres propios, cantidades).
- **Contacto sin fricción**: WhatsApp siempre a un toque.
- **Objeciones atendidas en la página** (comparativa, garantía, FAQ).

**Qué no funciona o no se traslada:**

- **Primer pantallazo vacío en celular** ✅: en el emulador de 375 px la primera pantalla era totalmente negra con solo el aviso de cookies; el contenido aparece al hacer scroll (el hero parece ser una animación atada al scroll). En un sitio de salud mental, quien llega desde Instagram a las 23 h con un hijo llorando no puede encontrarse con una pantalla negra.
- **Peso y velocidad** ✅ (una carga, escritorio): 204 requests, 217 imágenes, ~512 KB transferidos (subestimado: los recursos de otros dominios no reportan tamaño), carga completa en 4,6 s, página de ~18.800 px de alto. Es mucho para lo que dice.
- **Secciones vacías** ✅: en el DOM hay varios `<h2>` sin texto y la lectura automática reportó FAQ con las respuestas vacías y bloques "Marcas…"/"Nuestra comunidad, en video" sin contenido 🔶.
- **Meta descripción con entidades HTML sin decodificar** (`&aacute;`) 🔶.
- **Mecánicas de venta agresivas** (cuenta regresiva, descuentos, urgencia): chocan con el Código de Ética (ver 5.1: no usar "precio o gratuidad como propaganda") y con el tono que una profesional de crianza respetuosa necesita.
- **Oscuro/negro de pared a pared:** funciona para deporte, no para calidez maternal/familiar (💭; el estilo visual lo decide la otra sesión).

**Lecciones a llevarse:** botón de WhatsApp flotante *con texto*, una promesa clara arriba, prueba social, FAQ **completa** y un pie con datos reales.

### 2.2 Tabla comparativa de los sitios analizados

Leyenda de "Fuente de datos": **N** = visto en navegador (con mediciones); **T** = lectura automática del texto de la página (puede perder contenido dinámico).

| # | Sitio | País / perfil | Plataforma | CTA principal | Precio visible | Matrícula visible | Prueba social | Lead magnet / newsletter | Lo mejor | Lo peor | Datos |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | [Moahu](https://moahu.com.ar/) | AR · tienda de rolos | Probable Tienda Nube 🔶 | Comprar / WhatsApp flotante | Sí (producto) | n/a | Nombres y cifras | No | Mensaje y voseo; WhatsApp | Hero vacío en celular; 204 requests; secciones vacías | N + T |
| 2 | [Carolina Mora – Psicóloga](https://carolinamorapsicologa.com/) | AR · psicóloga perinatal y autora | WordPress.com 🔶 | WhatsApp (ícono sin texto) | No | **No** | No | **5 PDF gratis** + suscripción (195 suscriptores) | Recursos descargables, voseo, muchos formatos (talleres grabados, charlas, libros) | WhatsApp sin etiqueta, sin agenda, blog con última nota de jul-2025, sin política de privacidad visible | T (en el navegador me apareció un chequeo anti-bots y no lo salteé) |
| 3 | [Crianza Empática](https://www.crianzaempatica.com/) | AR · psicóloga infantil, Belgrano (según [perfil](https://psicologiaymente.com/psicologos/2061696/sofia-frenkel-santillan)) | Wix | "Pedí un turno" (según una búsqueda 🔶) | — | — | — | — | — | **Hoy el dominio muestra "Este dominio no está conectado a un sitio" (Wix)** ✅ | N |
| 4 | [Psico.lubosco – Taller Crianza Respetuosa 0 a 5](https://psicolubosco.tiendup.com/curso/crianza0a5) | AR · psicóloga + pediatra, curso grabado | Tiendup | "Adquiere tu acceso" + contenido gratuito con email | **Sí** (ARS 60.000 → 30.000; USD 75 → 35) | **No** | 19 reseñas (sin extractos) | Acceso gratuito con nombre+email | Pago con Mercado Pago/PayPal claro, lista de capítulos con duración, voseo | Sin política de reembolso ni términos visibles, sin aviso de alcance, textos "Cargando…" y variable sin completar | T |
| 5 | [Mamá Psicóloga Infantil – Sara Tarrés](https://www.mamapsicologainfantil.com/) | ES · psicóloga infantil, 20+ años, autora | WordPress ✅ | "Pedir una sesión de orientación" | **Sí** (60 € / 60 min) | **Sí** (COPC 15709) | Medios (TV3, El País…) pero sin testimonios | **Curso gratis + PDF + newsletter semanal** | Hero emocional con "espejo" de frases, 2 CTAs, banner de cookies con Rechazar/Configurar/Aceptar ✅, precio y matrícula | Modales compiten con el hero, CTA con formato roto, menú duplicado | N (26 requests, ~471 KB, carga 3,8 s) |
| 6 | [Adhara Monzó – Psicóloga perinatal online](https://psicologaperinatalonline.com/) | ES · perinatal online | WordPress (tema Qode) ✅ | "Reserva tu cita" (cabecera) + WhatsApp flotante | No | Sí, sin rótulo ("M-31296") | Muchos testimonios con fecha y enlace a Google | Rincón de recursos + newsletter con consentimientos separados | Botón de reserva siempre visible, formularios con consentimiento, tono validante | **Sin aviso de crisis/urgencias**, menú con nombres inconsistentes | N (46 requests, ~283 KB, 4,4 s) |
| 7 | [Elisenda Pascual Martí](https://elisendapascualmarti.com/es/) | ES · psicóloga de crianza respetuosa | WordPress + WPML, Thrivecart 🔶 | "Reserva ahora tu sesión" | No | No | No (sección de prensa vacía) | No claro | Hero muy claro ("Encuentra una forma de criar más amorosa y consciente"), formulario con casilla de privacidad, área personal para alumnos | Sin WhatsApp ni teléfono, © 2024 con notas de 2026, sección "prensa" sin contenido | N (26 requests, ~397 KB, 4,5 s) + T |
| 8 | [Machy Guerrero](https://machyguerrero.com/) | MX · psicóloga infanto-parental, cursos | WordPress + Elementor ✅, Calendly | "Quiero Agendar" (Calendly), "¡Quiero mi KIT gratis!" | No | No | 3 testimonios con nombre + reseñas de Facebook | **Kit gratis con nombre+email** | Embudo claro (servicios → kit → sobre mí → testimonios) y cambio de moneda MXN/USD | **Pesado** (110 requests, ~2,6 MB, 5,8 s), bloque de blog con mensaje de error visible, contadores en 0 y typos 🔶 | N + T |
| 9 | [Crecimiento en Positivo](https://crecimientownpositivo.com/talleres/) | ES · talleres de disciplina positiva | WordPress 🔶 | "Escríbenos" (poco visible) | No | No | No | No | Pie legal completo con **declaración de accesibilidad** y enlace "Ir al contenido" | Sin botón de reserva, sin precios/fechas | T |
| 10 | [Psiko Aprende](https://psikoaprende.com/curso-de-crianza-respetuosa-y-consciente/) | ES/LatAm · plataforma de cursos | — | "Inscríbete ahora" | Sí (140 €) | Sin número | No | No | Casilla de privacidad en el formulario | Claims sin respaldo ("Nº1", "99%"), 100 h en 1 mes, contadores en 0, sin garantía ni aviso de alcance | T |
| 11 | [Mónica Serrano – Psicología y Crianza](https://www.psicologiaycrianza.com/cursos-y-talleres-maternidad-y-crianza-on-line/) | ES · psicóloga, cursos grabados | WordPress + ActiveCampaign 🔶 | "Quiero más información" | No | Sin número ("psicóloga colegiada") | No | **Curso gratis a cambio de email** con consentimiento | Gestor de cookies por categorías | Catálogo sin precios ni descripciones, contenido de 2013-2014 con © 2025, placeholders `{vendor_count}` visibles | T |
| 12 | [Good Inside – Dr. Becky Kennedy](https://www.goodinside.com/) | US · app/membresía de crianza | Next.js + Builder.io 🔶 | "Get started" (cuestionario de ~3 min) | No (aparece tras el quiz) | n/a (credenciales con rol) | 3 testimonios, 14.085 reseñas de app | Newsletter, talleres en vivo | **Segmentación por etapa** ("Find your stage"), objeciones respondidas en FAQ, garantía de devolución | Sin aviso "no reemplaza terapia" 🔶, repite CTAs, 117 requests, ~2 MB | N (117 requests, ~2.016 KB) + T |
| 13 | [Peaceful Parent, Happy Kids – Dr. Laura Markham](https://www.peacefulparenthappykids.com/) (ex ahaparenting.com, redirige ✅) | US · psicóloga clínica, libros y curso | Siteglide/Enginate 🔶 | "Calmer Parenting Starts Here" → explorar por situación | No | n/a | 5 testimonios con foto + prensa | Newsletter semanal, taller/conferencia gratis | **Navegación por edad, tema y preocupación** (gran modelo para un blog de crianza) | "Start here" apunta a un buscador, newsletter como enlace y no formulario | T |
| — | [crianzapositiva.ar](https://crianzapositiva.ar/) | AR | — | — | — | — | — | — | — | **Hoy redirige a una tienda de decoración** ✅ (descartado como referencia) | N |
| — | reddecrianza.org.ar | AR | — | — | — | — | — | — | — | **El dominio no resolvió** (error de DNS desde mi máquina) ✅; no lo analicé | — |

**Observaciones transversales** (🔶 salvo lo marcado ✅):

- **Matrícula/colegiación:** solo 2 de 9 sitios de profesionales la muestran (Sara Tarrés y Adhara Monzó). En Argentina **es obligatoria en publicidad** (ver 5.1).
- **Precio visible:** lo muestran los sitios españoles/mexicanos de venta de cursos y una consulta (Sara Tarrés). El Código de Ética de FePRA pide *abstenerse de publicitar honorarios* (✅ ver 5.1), así que **no se puede copiar esto sin consultar al Colegio**.
- **Lead magnet + newsletter:** 6 de los 9 sitios de profesionales ofrecen algo gratis a cambio del mail (Carolina Mora, Sara Tarrés, Adhara, Machy, Mónica Serrano, psico.lubosco). Es el patrón dominante y funciona.
- **Errores recurrentes en las páginas** (el costo en confianza es alto en salud mental): contadores en 0, textos de plantilla sin reemplazar, mensajes de error de plugins a la vista, copyright viejo, blog dormido, WhatsApp como ícono sin texto, menús duplicados. Algunos "0" podrían ser contadores animados que la lectura automática no activó (no lo pude comprobar).
- **Aviso de alcance ("esto no reemplaza una consulta") y aviso de crisis:** prácticamente ausentes. Quien los incluya queda mejor parado.
- **Rendimiento** (una carga, escritorio, navegador de la app; ✅ pero con la salvedad de que `transferSize` subestima recursos de terceros):

| Sitio | Requests | KB transferidos | Carga completa |
|---|---|---|---|
| Sara Tarrés | 26 | 471 | 3,8 s |
| Elisenda Pascual | 26 | 397 | 4,5 s |
| Adhara Monzó | 46 | 283 | 4,4 s |
| Machy Guerrero (Elementor) | 110 | 2.604 | 5,8 s |
| Good Inside | 117 | 2.016 | — |
| Moahu | 204 | 512 | 4,6 s |

  Los tiempos son altos en todos (la medición incluye el entorno de la app), pero el patrón es claro: **los que arman con constructores visuales (Elementor) o con muchos scripts cuestan 4-10 veces más peso**. El umbral de "bueno" de Google para LCP es ≤ 2,5 s, INP ≤ 200 ms y CLS ≤ 0,1 en el percentil 75 ([web.dev](https://web.dev/articles/vitals)) ✅.

---

## 3. Estructura y contenido recomendados

### 3.1 Sitemap propuesto (💭)

```
/                       Inicio
/sobre-mi               Sobre mí (formación, enfoque, matrícula)
/servicios              Cómo puedo acompañarte (hub)
   /servicios/orientacion-a-familias      (online / presencial, duración, cómo es la 1ª entrevista)
   /servicios/talleres                    (si aplica: lo que ofrece, no precio ver 5.1)
/talleres               Próximos talleres + grabados (cuando exista)
/recursos               Guías gratis (PDF) + alta al newsletter
/notas                  Blog, con filtros por edad y por tema
   /notas/<slug>
/preguntas-frecuentes   Cómo trabajo, qué incluye, qué NO hago, cuándo consultar
/contacto               WhatsApp + formulario + agenda
/links                  Página "link in bio" para Instagram (reemplaza Linktree)
/privacidad             Política de privacidad y tratamiento de datos
/terminos               Solo si vende talleres/cursos
/boton-de-arrepentimiento   Solo si vende por la web (ver 5.3)
/accesibilidad          Declaración breve (opcional pero suma)
```

Pie de página en **todas** las páginas: nombre completo, **título y matrícula** (con la jurisdicción), contacto, enlaces legales y un bloque corto "Si estás en una situación de urgencia…" (ver 5.4).

### 3.2 Orden recomendado de la home (💭)

1. **Hero:** una frase que diga *para quién y para qué* (no "Bienvenidos"), subtítulo que nombre la situación real ("berrinches, límites, pantallas, el día a día en casa"), **dos CTAs**: "Agendá una primera entrevista" y "Escribime por WhatsApp". Foto real de ella.
2. **"¿Te pasa algo de esto?"**: 4-5 frases en primera persona que reflejen el momento del conflicto (Sara Tarrés lo hace bien con "No puedo más", "Quiero volver a disfrutar…").
3. **Cómo trabajo:** 3 pasos simples (me escribís → primera entrevista → plan y seguimiento).
4. **Sobre mí (corto):** foto, 3 líneas, formación, **matrícula**, y un "ver más" a la página completa.
5. **Servicios** (2-3 tarjetas con "para quién es", formato y duración; sin precios, ver 5.1).
6. **Talleres próximos** (si hay; si no, esta sección no existe: mejor ausente que vacía).
7. **Un recurso gratis** + alta al newsletter (1 guía, un solo campo de email + consentimiento).
8. **Últimas notas** (3).
9. **Instagram** (fila de 6 publicaciones curadas + botón "Seguime").
10. **FAQ corta** (4-5 preguntas con respuestas completas).
11. **CTA final** + pie con matrícula y aviso de crisis.

### 3.3 Copywriting para generar confianza en salud mental (💭, con anclaje en las reglas ✅ de 5.1)

**Hacer**

- **Voseo, segunda persona, frases cortas.** (Moahu, psico.lubosco y Carolina Mora ya lo hacen; lo español con "tú" suena ajeno para el público argentino).
- **Validar sin culpar:** "no sos una mala madre/padre por estar agotado/a". Evita el culpabilizar y el "hacé esto".
- **Decir qué es y qué no es:** "orientación a familias y psicoeducación; no reemplaza un tratamiento cuando hace falta". Ningún sitio de los que revisé lo dice con claridad.
- **Explicar el primer paso:** cómo es la primera entrevista, cuánto dura, si es online o presencial, en cuánto tiempo responde. Reduce la ansiedad de escribir.
- **Credenciales concretas** (universidad, posgrados, años) y **matrícula** a la vista.
- **Hablar de herramientas y acompañamiento, no de resultados garantizados.**

**Evitar** (el Código de FePRA, art. 6.1.1.2 y 6.2.2, pide publicidad "mesurada", sin tergiversar "la índole y eficacia" y sin declaraciones engañosas)

- "Curá/resolvé/eliminá los berrinches", "garantizado", "en 7 días", "100% efectivo", "la única".
- Cifras sin fuente ("99% de aplicabilidad", "Nº1": visto en Psiko Aprende).
- Frases absolutas ("todo mal comportamiento es una llamada de atención").
- Testimonios clínicos de pacientes (ver 5.1).
- Etiquetas diagnósticas a la ligera en el blog ("tu hijo tiene TDAH").

**Ejemplos de microcopy** (ilustrativos, la voz de marca la define la otra sesión):

- Hero: "Crianza con respeto, también cuando se hace cuesta arriba. Orientación para madres, padres y cuidadores."
- Aviso bajo el formulario: "Tus datos se usan solo para responderte. No escribas información clínica en este formulario."
- Aviso de alcance: "Este sitio ofrece información y orientación general. No reemplaza una consulta profesional ni sirve para situaciones de urgencia."

---

## 4. Funciones: valor, esfuerzo, costo y si entran en la primera versión

Escalas: **valor** y **esfuerzo** = Alto/Medio/Bajo (💭). **Costo** en dinero, lo verificado va con ✅.

| Función | Valor | Esfuerzo | Costo | ¿MVP? | Notas |
|---|---|---|---|---|---|
| **Botón de WhatsApp** (flotante, con texto, mensaje pre-armado `wa.me`) | Alto | Muy bajo | $0 | **Sí** | Es el canal dominante en Argentina (Moahu lo usa en todo el sitio ✅). Etiquetalo con texto ("Escribime"), no un ícono solo (error de Carolina Mora). Mensaje inicial sugerido: "Hola Jacqueline, quiero consultar por…". No pedir datos clínicos por acá al inicio. |
| **Agenda / reserva de primera entrevista** (Cal.com) | Alto | Bajo-medio | **Plan gratis**: 1 usuario, tipos de evento y calendarios ilimitados, notificaciones por email/SMS, integraciones; pagos con Stripe y PayPal (no vi Mercado Pago en la lista) ✅ ([cal.com/pricing](https://cal.com/pricing)). Teams USD 12/usuario/mes ✅ | **Sí** | Se sincroniza con Google Calendar. Solo pedir nombre, email, teléfono y un "motivo" **corto y opcional**. Los datos pasan por servidores fuera de Argentina (ver 5.2). Alternativa: Calendly (plan gratis con 1 tipo de evento y 1 calendario 🔶 secundario, no verifiqué en su sitio). Google Calendar "citas" no lo evalué. |
| **Formulario de contacto con consentimiento** | Medio-alto | Bajo | $0 (Formspree/Web3Forms/Netlify Forms/etc.) | **Sí** | Alternativa para quien no quiere WhatsApp o agenda. Casilla de consentimiento **expresa** y enlace a privacidad (los sitios de Elisenda y Adhara lo hacen bien ✅). |
| **Newsletter + lista de contactos** | Alto (es la audiencia propia, a salvo del algoritmo de Instagram) | Bajo | Free tiers de Brevo/MailerLite/etc. 🔶 (no verifiqué límites vigentes) | **Sí, con una sola guía** | Mailchimp lo usa Sara Tarrés ✅. Doble opt-in, baja en cada mail, consentimiento separado (patrón de Adhara ✅). |
| **Descargables (guías PDF)** | Alto | Bajo (el contenido ya lo tiene en Instagram; hay que maquetarlo) | $0 | **Sí, 1-2** | Funciona de lead magnet. Ojo: ver la cláusula sobre "gratuidad como propaganda" en 5.1. |
| **Link in bio propio (`/links`)** | Alto (es lo primero que toca quien viene de Instagram) | Muy bajo | $0 | **Sí** | Reemplaza a Linktree: una página mobile-first con 5-6 botones (agendar, WhatsApp, guía gratis, últimas notas, talleres). Con parámetros UTM para saber qué botón sirve. |
| **Feed de Instagram integrado** | Medio | Medio (si es automático) | Gratis (manual) o pago (widgets) | **Versión liviana sí** (6 posts curados con *oEmbed* o capturas + enlace); **automática, no** | La API *Basic Display* de Instagram fue cerrada a fines de 2024 🔶 ([ejemplo](https://wiserreview.com/blog/embed-instagram-feed-website/)); hoy un feed vivo requiere cuenta Business/Creator + una página de Facebook vinculada 🔶. Meta documenta un [endpoint oEmbed para publicaciones individuales](https://developers.facebook.com/documentation/instagram-platform/oembed) ✅ (no feeds completos). Los widgets de terceros suman scripts y peso. |
| **Blog / notas** | Alto a mediano plazo (SEO + autoridad) | Medio (el esfuerzo es de contenido, no técnico) | $0 | **Sí, con 3-5 notas de arranque** | Un blog dormido es peor que ninguno (Carolina Mora: última nota jul-2025 🔶). Arrancar con el contenido que ya tiene en IG. |
| **Pagos con Mercado Pago** (link de pago o Checkout Pro) | Medio (depende de si vende) | Bajo con link de pago; medio con integración | Comisión 🔶: fuentes secundarias del 2026 hablan de ≈ 6,6 % + IVA para crédito con acreditación inmediata y menos si se espera más días ([ejemplo](https://calculadorapagos.com/calculadora-de-comisiones-mercado-pago-2026/)); **no pude abrir la tabla oficial** (pide login) | **Fase 2** | Empezar con *link de pago* manual (sin código). Si vende talleres por la web aplica el botón de arrepentimiento (5.3). Consultar con contador por facturación. |
| **Venta de talleres/cursos grabados** | Medio-alto | Alto si se construye; bajo si se usa plataforma | Plataformas aparte (Tiendup, Hotmart, Tienda Nube, etc.) | **Fase 3** | No armar un LMS propio. psico.lubosco usa Tiendup + Mercado Pago/PayPal ✅(T). |
| **Talleres en vivo con inscripción** | Medio | Bajo (Cal.com como evento grupal + link de pago) | Idem Cal.com/MP | **Fase 2** | Una página `/talleres` con fechas y botón "Reservar lugar". |
| **Zona privada de recursos para pacientes** | Bajo-medio | **Alto** (login, permisos, datos) | Variable | **No** (o solo enlaces privados no listados) | Implica custodiar datos de salud; el riesgo supera el beneficio. Alternativa: mandar el material por email o un enlace no indexado. |
| **Testimonios** | Parece alto, pero **riesgoso** | Bajo | $0 | **No (por defecto)** | Ver 5.1: tensiona con el secreto profesional y la publicidad mesurada. Alternativas: reseñas de talleres con consentimiento escrito, menciones en prensa, descripciones de casos *ficticios/compuestos* identificados como tales. **Consultar al Colegio.** |
| **Chatbot / IA en la web** | Bajo | Medio | Variable | **No** | Riesgo de que "aconseje" algo clínico. |
| **Analítica respetuosa** | Medio | Muy bajo | **Plausible: USD 9/mes** (1 sitio, 10k pageviews), sin cookies, datos en la UE, también autoalojable ✅ ([plausible.io](https://plausible.io/)). Alternativas gratuitas sin cookies (Cloudflare Web Analytics, GoatCounter) no las verifiqué en esta sesión | **Sí (la gratuita)** | Sin cookies de seguimiento no hace falta un banner de consentimiento pesado, pero sí una política de privacidad. |
| **Aviso de cookies** | — | Bajo | $0 | Solo si usa trackers (Google Analytics, Meta Pixel, Mailchimp con tracking) | Sara Tarrés lo resuelve con "Rechazar/Configurar/Aceptar" ✅. Evitar el Pixel de Meta: envía datos de visitas a una tercera parte, y en un sitio de salud mental es un riesgo innecesario (💭). |

**Qué no recomiendo para la primera versión** (💭): tienda con carrito, login de usuarios, foro/comunidad, chatbot, feed de Instagram en vivo, multi-idioma, pop-ups, múltiples métodos de pago.

---

## 5. Aspectos propios de salud mental y de Argentina

> **No soy abogado.** Esto es un mapa de lo que verifiqué y de lo que hay que preguntar. Antes de publicar: consultar al **Colegio de Psicólogos de la jurisdicción** donde ella está matriculada (los códigos provinciales pueden ser más estrictos que el de FePRA) y, para datos personales y venta, a un abogado.

### 5.1 Publicidad y ética profesional

**Hechos verificados ✅** — [Código de Ética de la FePRA](https://fepra.org.ar/wp-content/uploads/2021/06/Codigo-de-E%CC%81tica-de-la-FePRA.pdf) (texto leído directamente del PDF, versión 2013 que la Federación propone como referencia a los Colegios):

| Artículo | Qué dice (paráfrasis) | Qué implica para la web |
|---|---|---|
| 6.1.1.1 | Quien publicita servicios debe seguir las normas profesionales, **incluir nombre y matrícula** y **abstenerse de publicitar honorarios**. | Matrícula visible en pie y en "Sobre mí". **No publicar tarifas** en la web (ni en Instagram). Ojo con copiar el modelo de Sara Tarrés (60 € a la vista). |
| 6.1.1.2 | Publicidad **mesurada**, con los datos indispensables, sin exagerar de modo que se tergiverse "la índole y eficacia de los servicios". | Sin promesas de resultados ni lenguaje de "transformación garantizada". |
| 6.1.1.3 | No ofrecer técnicas no reconocidas por la comunidad profesional. **Tampoco usar el precio o la gratuidad del servicio como forma de propaganda.** | Cuidado con "primera consulta gratis", "sin cargo", "promo". Y con rotular lo que hace como "coaching" u otras técnicas ambiguas. Si un descargable gratuito cuenta como "servicio" o no, **hay que preguntarle al Colegio**. |
| 6.1.1.4 | La participación en medios masivos será con fines **educativos y divulgativos**; no participar "como tales" en avisos que recomienden un producto. | Nada de recomendar marcas/productos (cunas, apps, suplementos) desde su rol de psicóloga, ni afiliados. |
| 6.2.1–6.2.3 | La divulgación debe hacerse con **rigor científico**, sin declaraciones falsas, engañosas u omisiones, y apoyada en práctica y bibliografía apropiada. | En el blog: citar fuentes, evitar generalizaciones. |
| 6.2.6 | Al informar técnicas psicológicas, aclarar que **solo pueden ser indicadas y aplicadas por profesionales competentes**. | Un aviso en las notas con "ejercicios/herramientas". |
| 5.1.9 | Si se usan casos como ilustración, extremar el cuidado para que **no se identifique a los involucrados**. | Cuidado con anécdotas de pacientes en notas y posts. |
| 2.6 | Garantizar **confidencialidad al crear, almacenar, transferir y eliminar registros**, también digitales. | Aplica a lo que recibe por formulario, mail, WhatsApp y agenda. |

**Lo que NO aparece en el Código de FePRA:** no encontré una cláusula que hable expresamente de **testimonios** (hice la búsqueda de texto en el documento). Eso no significa que estén permitidos: pueden estar en el código provincial o interpretarse a través de 6.1.1.2, 2.x y 6.2.2. 💭 Mi criterio: **no publicar testimonios de pacientes** (secreto profesional y relación terapéutica), y ofrecer otras pruebas de confianza (formación, años, prensa, reseñas de talleres con consentimiento escrito).

**Otras reglas a consultar** (🔶, no las leí en esta sesión):

- Código de Ética y normas de publicidad de **su** Colegio (provincial). Cada Colegio publica su código.
- [Buenas Prácticas en Telepsicología de FePRA (2025)](https://fepra.org.ar/wp-content/uploads/2025/10/FEPRA-Buenas-Practicas-Telepsicologia-corregido.pdf) ✅ (lo leí en parte): está escrito para el **ámbito psico-jurídico**, pero fija criterios útiles para atención online: acreditar identidad y **matrícula** del profesional, consentimiento informado, preferir plataformas con **cifrado de punto a punto** y atender la Ley 25.326, y prever mecanismos de emergencia.
- Ley 27.553 (teleasistencia y receta electrónica): la modificó para el ejercicio de la psicología 🔶 (fuente: [Becca & Varela](https://beccarvarela.com/novedades/ley-27-553-con-que-disposiciones-legales-cuenta-la-telemedicina-en-argentina/)); no revisé el texto.

### 5.2 Protección de datos personales (Ley 25.326)

**Hechos verificados ✅** (lectura del [texto de la ley en argentina.gob.ar](https://www.argentina.gob.ar/normativa/nacional/ley-25326-64790/texto)):

- **Art. 2:** los datos de **salud** y vida sexual son **datos sensibles**.
- **Art. 5:** el tratamiento exige **consentimiento libre, expreso e informado**, por escrito o medio equivalente (hay excepciones, por ejemplo relación profesional necesaria).
- **Art. 6:** antes de recabar datos hay que informar **finalidad, destinatarios, identidad y domicilio del responsable, si las respuestas son obligatorias o facultativas, consecuencias de no responder** y la posibilidad de ejercer acceso, rectificación y supresión.
- **Art. 7:** nadie puede ser obligado a dar datos sensibles; no se pueden formar archivos que los revelen salvo excepciones.
- **Art. 8:** los **profesionales de la salud** pueden tratar los datos de salud de sus pacientes **respetando el secreto profesional**.
- **Art. 9:** deber de adoptar medidas técnicas y organizativas de **seguridad y confidencialidad**. Prohíbe registrar datos en sistemas sin condiciones de integridad y seguridad.
- **Art. 10:** deber de secreto, incluso después de terminada la relación.
- **Art. 12:** **prohíbe transferir datos a países sin nivel de protección adecuado**, con excepciones (entre ellas "datos médicos cuando lo exija el tratamiento del afectado").
- **Art. 14–16:** acceso (10 días corridos), rectificación/supresión (5 días hábiles).
- **Art. 21:** registro de archivos: obliga a inscribir los públicos y los privados **destinados a dar informes**.

**Dato clave sobre servidores en el exterior** ✅ ([argentina.gob.ar – Transferencias internacionales](https://www.argentina.gob.ar/transferencias-internacionales)): la lista oficial de países con nivel adecuado incluye UE/EEE, Reino Unido, Suiza, Guernsey, Jersey, Isla de Man, Islas Feroe, Canadá (sector privado), Andorra, Nueva Zelanda, Uruguay e Israel. **Estados Unidos no está.** Para transferir a un país no adecuado hay alternativas: consentimiento expreso, cláusulas contractuales modelo (Disp. 60/2016 y Res. AAIP 198/2023) o las excepciones del art. 12.

**Qué implica para esta web** (💭, aplicando lo anterior):

- **Cal.com, Calendly, Mailchimp, Tally, Google Forms, Formspree, WhatsApp** guardan o procesan datos en servidores de EE. UU. u otros países. Para los datos de **contacto básicos** (nombre, mail, teléfono) el riesgo es bajo, pero **conviene que el formulario no recoja información clínica**, ofrezca consentimiento expreso y diga dónde se guardan los datos. Eso reduce la exposición de las cláusulas de transferencia.
- Regla práctica: **la web capta contacto; lo clínico se habla en la consulta**. El campo "motivo de consulta" debería ser opcional y corto, con la leyenda "no escribas datos clínicos acá".
- **Política de privacidad** con: responsable (nombre, domicilio/contacto), qué datos pide, para qué, con quién se comparten (los proveedores), dónde se guardan, cuánto tiempo, derechos de acceso/rectificación/supresión y cómo ejercerlos, y la mención al organismo de control (AAIP).
- **Registro de bases de datos (RNBD):** la regla general dice que quienes tratan bases privadas destinadas a dar informes deben inscribirse ([argentina.gob.ar](https://www.argentina.gob.ar/servicio/inscribir-un-responsable-de-bases-de-datos-personales-privadas) 🔶 vía búsqueda). Una resolución de 2006 de un consejo profesional entendió que un profesional que usa los datos solo en su actividad no está obligado ([CPCE Santa Fe](https://www.cpcesfe2.org.ar/wp-content/uploads/2023/12/cs-10-06-registro-nac-bases-datos.pdf) 🔶, no es criterio de la AAIP). **Pregunta abierta para un abogado:** si la lista de newsletter + los contactos de la agenda la obligan a inscribirse.
- **Newsletter:** consentimiento separado y específico, baja fácil. La ley también regula bases con fines de publicidad (art. 27) 🔶, que no verifiqué.

### 5.3 Venta a distancia (si hay talleres/cursos pagos)

✅ [Resolución 424/2020 de la Secretaría de Comercio Interior](https://www.casi.com.ar/sites/default/files/res4242020sci.pdf) (leí el texto):

- Art. 1: los proveedores que comercialicen **bienes y servicios a través de páginas web** deben tener publicado el link **"BOTÓN DE ARREPENTIMIENTO"**; ante una solicitud, deben informar **dentro de 24 h y por el mismo medio** un código de identificación.
- Art. 2: debe ser un **link de acceso fácil y directo desde la página de inicio**, "en un lugar destacado en visibilidad y tamaño", **sin exigir registro previo**.
- Art. 4: el incumplimiento se sanciona según la Ley 24.240.
- Los considerandos mencionan también la **Res. 271/2020**: publicar los **contratos de adhesión** en la web y un **"botón de baja"** (para servicios con suscripción).

💭 Si vende talleres/cursos por la web, aplicalo. Si solo recibe consultas, no es obvio que aplique; **confirmar con un abogado**. Las plataformas (Tienda Nube, por ejemplo) ya lo traen resuelto ([ayuda de Tienda Nube](https://ayuda.tiendanube.com/es_AR/123288-mis-ventas/que-es-el-boton-de-arrepentimiento-de-compra-de-mi-tiendanube) 🔶), argumento a favor de vender por plataforma en la Fase 3.

### 5.4 Seguridad de las personas

- **Aviso de crisis** en el pie y en la página de contacto (pocos lo tienen; Adhara Monzó no, por ejemplo ✅(T)). Texto sugerido: "Este sitio no es un servicio de urgencias. Si vos o alguien está en peligro, llamá al 911 o al 135 (Centro de Asistencia al Suicida, CABA y GBA) / 102 (Línea de Derechos de Niñas, Niños y Adolescentes) / 144 (violencia de género)". 💭 Los números salen de mi conocimiento general: **verificar vigencia y cobertura antes de publicar**, y agregar los de la jurisdicción de ella.
- **No publicar fotos ni datos identificables de menores**, ni de pacientes, ni "casos" reconocibles (Código FePRA 5.1.9 ✅). Usar fotos propias de ella, ilustraciones o bancos de imágenes.
- **Maltrato y riesgo:** en notas del blog que toquen temas sensibles, incluir un párrafo sobre cuándo consultar/derivar.

### 5.5 Accesibilidad

- La **Ley 26.653** obliga a los sitios del Estado nacional (decreto reglamentario 656/2019) 🔶 y toma **WCAG 2.0** ([W3C](https://www.w3.org/wai/policies/argentina)); no aplica a un sitio privado, pero **es la práctica correcta y suma SEO**.
- 💭 Piso recomendado: WCAG 2.2 AA: contraste suficiente, tipografía ≥ 16 px, textos alternativos, formularios con etiquetas, navegación por teclado, enlace "Ir al contenido", botones con texto (no solo íconos). Crecimiento en Positivo tiene una "declaración de accesibilidad" que es un buen modelo ✅(T).

---

## 6. Técnica: opciones, recomendación, hosting, dominio, SEO

### 6.1 Opciones realistas (💭 salvo lo marcado)

Criterio principal: **quien construye es desarrollador (vos), quien mantiene es ella (no técnica)**. Hay que optimizar por: que ella pueda editar texto/imágenes/notas/talleres **sin romper nada**, que cueste poco de mantener y que sea rápido en celular.

| Opción | Pros | Contras | Edición para ella | Mantenimiento | Costo aprox. |
|---|---|---|---|---|---|
| **HTML/CSS estático a mano** | Súper rápido, $0, control total | Ella no puede editar nada sin tocar código; cada cambio pasa por vos | ❌ | Muy bajo, pero dependiente de vos | Dominio |
| **Astro + Markdown + CMS visual** (recomendada) | Velocidad (HTML casi sin JS), seguro (sin base de datos ni plugins), hosting gratis, buen SEO, componentes reutilizables | Hay que armar el flujo de edición; depende de un CMS de terceros; ella necesita una cuenta (GitHub u otra) | ✅ para blog, talleres, recursos, FAQ, textos (campos definidos) · ❌ para cambiar el diseño | Bajo | Dominio |
| **Next.js** | Poderoso (formularios, API, áreas privadas) | Sobredimensionado para una web de contenido; más superficie de mantenimiento; costo de hosting si usa servidor | Igual que Astro si se le agrega un CMS | Medio | Dominio + posible hosting |
| **WordPress** (hosting compartido) | Ella puede editar **casi todo** visualmente; miles de plugins (agenda, formularios, SEO); todo el mundo sabe usarlo | **Mantenimiento permanente** (actualizaciones, parches, backups), superficie de ataque, tiende a engordar con plugins (el caso Elementor de Machy Guerrero: 110 requests, 2,6 MB ✅), rendimiento depende de la configuración | ✅✅ | Medio-alto | Dominio + hosting (≈ USD 5-15/mes 🔶, estimación mía; cotizar) |
| **Wix / Squarespace / Framer** | Editor visual, hosting incluido, rápido de arrancar | Cuota mensual, **dependencia de la plataforma** (el caso Crianza Empática: dominio desconectado de Wix ✅), exportar es difícil; el desarrollador casi no aporta; plantillas pesadas | ✅✅ | Bajo | Plan mensual 🔶 (no verifiqué precios) |
| **Tienda Nube / Tiendup / Hotmart** | Pagos, botón de arrepentimiento y facturación resueltos | No es un sitio de contenido; apariencia limitada | Solo catálogo | Bajo | Planes/comisión |
| **Linktree / Carrd** | Inmediato | No es una web; no construye SEO ni autoridad | ✅ | Nulo | Gratis/barato |

### 6.2 Recomendación concreta (💭)

**Astro (sitio estático) + contenido en Markdown + Pages CMS (o Decap/Sveltia) + Cloudflare Pages o Netlify + Cal.com + WhatsApp.**

**Por qué:**

1. **Para ella:** edita en un panel con formularios (título, texto, imagen, fecha) y no puede romper el diseño. Sube una nota nueva o un taller en 5 minutos, sin tocar código.
2. **Para vos:** nada que parchear semanalmente; el sitio es HTML estático, difícil de hackear y casi sin costos de mantenimiento.
3. **Para la gente:** sitio liviano. En celular con datos limitados eso se nota (y Google lo mide con Core Web Vitals ✅).
4. **Para el bolsillo:** hosting y CMS gratis.
5. **Para el futuro:** si más adelante hay tienda o área privada, se agregan piezas sin migrar todo.

**Qué hay que tener claro** (hechos y riesgos):

- **Pages CMS** ✅ ([pagescms.org](https://pagescms.org/)): gratis, MIT, edita contenido y medios **dentro del repo de GitHub**, sin base de datos, soporta Astro, invitación por email. Requiere que el sitio esté en **GitHub** (no soporta GitLab/Bitbucket) y que ella tenga una cuenta de GitHub. La parte de subida de medios a almacenamiento externo figura como "Soon".
- **Decap CMS** 🔶: es la opción clásica y está bien documentada en Astro, **pero** su autenticación original (Netlify Identity / Git Gateway) fue **deprecada por Netlify** ([anuncio](https://netlify.com/changelog/deprecation-netlify-identity), resultado de búsqueda; no pude abrir la página) y la comunidad la describe como en lento declive ([discusión en Decap](https://github.com/decaporg/decap-cms/discussions/7419)). Habría que usar el backend GitHub con un proxy OAuth propio. Tiene más fricción que Pages CMS.
- **Hosting gratis:** Cloudflare Pages en plan Free permite 500 builds/mes, 20.000 archivos por sitio y 25 MiB por archivo ✅ ([docs](https://developers.cloudflare.com/pages/platform/limits/)); no encontré en esa página una cifra de ancho de banda para estáticos. Más que suficiente para una web de este tamaño, pero verificá límites vigentes al implementar (el sitio también puede ir en Netlify o Vercel).
- **Riesgo principal (💭):** **depende de vos**. Si dejás de estar disponible, ella no puede cambiar el diseño ni arreglar un problema. Mitigación: documentación corta ("cómo agrego una nota / un taller"), repositorio y cuentas a nombre de ella o compartidas, y un video de 10 minutos. Probarlo con ella en una sesión de 1 hora **antes** de decidir definitivamente.
- **Plan B:** si la fricción de "una cuenta de GitHub" es un problema, usar un CMS con login por email (p. ej. Sanity, Keystatic con servidor, TinaCMS); o ir a WordPress aceptando el mantenimiento.

### 6.3 Dominio y hosting

- **.com.ar:** **ARS 8.500 por año** para alta, renovación y transferencia; **.ar: ARS 25.500** ✅ ([NIC Argentina – Dominios y Aranceles](https://nic.ar/es/dominios/dominios_y_aranceles); la página no indica fecha de vigencia, y los dominios son de validez anual). Un revendedor pide desde ARS 15.000 🔶 (no oficial).
- **.com:** comprarlo además si está libre y es barato, para evitar que otro lo use (💭); el precio no lo verifiqué.
- **Elegir .com.ar como principal** (💭): refuerza la señal local para Google Argentina y es más barato que el .ar corto. Nombre sugerido: el que defina la otra sesión (p. ej. algo derivado de "crianza con respeto" + apellido/nombre profesional). Evitar guiones y caracteres difíciles de dictar.
- **Titularidad:** el dominio, el hosting, el CMS, Cal.com, el newsletter y la cuenta de Google **tienen que estar a nombre de ella** (💭). El caso de Crianza Empática (dominio hoy desconectado ✅) y de crianzapositiva.ar (hoy redirige a una tienda ✅) muestra lo que pasa cuando un dominio se pierde o cambia de manos.
- **Email profesional** (`hola@…`): conviene tenerlo (💭). Opciones: reenvío gratuito desde el hosting/DNS o un servicio pago; **no cotizado** en esta sesión.

### 6.4 SEO local y de crianza en Argentina (💭, sin datos de volumen de búsqueda)

No tuve acceso a herramientas de palabras clave, así que **lo que sigue son hipótesis a validar con Search Console y Google Trends** una vez publicada:

- **Intención de búsqueda real en crianza:** consultas del tipo "qué hacer cuando mi hijo no quiere…", "berrinches a los 2 años", "límites sin gritar", "pantallas y niños", "psicóloga online crianza". Las notas del blog deberían responder **preguntas concretas** (las que ya le llegan por Instagram: comentarios y mensajes) más que temas genéricos.
- **Estructura de contenido:** al estilo de Dr. Laura Markham (navegación por *edad*, *tema* y *preocupación* ✅(T)) y Good Inside (por *etapa* ✅(T)). Cada nota enlaza a servicios y a un recurso.
- **Técnico:** títulos y descripciones únicos, un `<h1>` por página, URLs cortas en español, `lang="es-AR"`, sitemap.xml, datos estructurados (`Person` / `ProfessionalService`), imágenes en WebP con `alt`, objetivo de Core Web Vitals "buenos" ✅.
- **Local:** **Google Business Profile** solo si tiene consultorio con dirección atendible al público; los negocios solo online tienen restricciones que no verifiqué. Si lo crea, usar el mismo nombre, teléfono y matrícula que en el sitio.
- **Autoridad (E-E-A-T, en temas de salud Google es más exigente):** matrícula visible, formación, fecha de actualización de las notas, fuentes citadas. Coincide con lo que pide el Código (6.2.1/6.2.3 ✅).
- **Enlace entre canales:** Instagram → `/links` → sitio; y el sitio → Instagram. Mismo nombre/identidad en todos lados.

### 6.5 Rendimiento y mobile-first (💭)

- Diseñar y probar **primero en celular** (el tráfico viene de Instagram).
- Metas: LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1 ✅; peso de la home ≲ 500 KB sin imágenes pesadas; fuentes locales o a lo sumo 2.
- Imágenes en WebP/AVIF con tamaños responsive. **Nada de hero con video o animación ligada a scroll** (el problema de Moahu en celular ✅).
- Cargar scripts de terceros (agenda, Instagram) **solo cuando el usuario los pide** (carga diferida).

### 6.6 Analítica respetuosa

- **Plausible** (USD 9/mes ✅, sin cookies ✅, datos en la UE ✅) o una alternativa gratuita sin cookies. Medir: visitas, de dónde vienen (`/links` con UTM), clics en WhatsApp, reservas en agenda, altas al newsletter.
- Evitar Google Analytics con identificadores y el **Pixel de Meta** (💭).

### 6.7 Costos estimados del primer año

| Rubro | Costo | Estado |
|---|---|---|
| Dominio .com.ar | ARS 8.500/año | ✅ |
| Hosting (Cloudflare Pages / Netlify) | $0 | 🔶 verificar límites |
| CMS (Pages CMS) | $0 | ✅ |
| Agenda (Cal.com Free) | $0 | ✅ |
| Formularios / newsletter (free tiers) | $0 | 🔶 |
| Analítica (Plausible) | USD 9/mes ≈ USD 108/año (opcional; hay alternativas gratis) | ✅ |
| Email profesional | A cotizar | — |
| Comisión de cobro Mercado Pago (si vende) | ≈ 6,6 % + IVA con acreditación inmediata en tarjeta de crédito (según fuentes secundarias) | 🔶 |
| Mano de obra | A definir entre ustedes | — |

---

## 7. Diseño y experiencia: patrones que funcionan y qué evitar

**Patrones que transmiten calidez y profesionalismo** (observados en los sitios; el estilo gráfico lo define la otra sesión):

1. **Hero con foto real y frase en primera persona** ("Soy…", "Acompaño a madres y padres…"). Mamá Psicóloga Infantil lo logra con una frase de "espejo emocional" + dos CTAs ([sitio](https://www.mamapsicologainfantil.com/)).
2. **Un único camino principal** ("Agendá una primera entrevista") + uno secundario de baja fricción (WhatsApp o guía gratis).
3. **Botón de reserva siempre visible** en la cabecera (Adhara Monzó ✅) y **WhatsApp flotante** (Moahu ✅, Adhara ✅).
4. **Navegación por situación o edad** para el blog (Markham, Good Inside).
5. **FAQ que responde objeciones reales** ("¿Es terapia? ¿Hace falta que vengan los dos? ¿Y si mi hijo no quiere?") (Good Inside lo hace ✅(T)).
6. **Matrícula y formación visibles** (Sara Tarrés: COPC 15709 ✅).
7. **Banner de cookies que permite "Rechazar"** (Sara Tarrés ✅).
8. **Tipografía generosa, mucho aire, contrastes suaves**, textos cortos; botones grandes y con texto.
9. **Páginas de talleres con ficha clara**: temas, fecha, formato, para quién es (lo que falta en Crecimiento en Positivo ✅(T)).
10. **Pie de página con datos reales** (nombre, matrícula, contacto, privacidad, accesibilidad).

**Qué evitar** (visto en los sitios reales, todo reproducible):

- Contadores en 0, bloques con `{variables}` o "Cargando…" a la vista, mensajes de error de plugins, secciones vacías ("Prensa" sin contenido).
- Ícono de WhatsApp sin texto ni etiqueta accesible.
- Menús repetidos 2-3 veces en la misma página.
- Modales y pop-ups compitiendo con el hero (Mamá Psicóloga Infantil tiene dos + cookies).
- Blog dormido y "© 2024" con notas de 2026.
- Cifras o "Nº 1" sin fuente.
- Urgencia comercial (cuenta regresiva, "últimos lugares", descuentos).
- Hero que depende de una animación y deja la primera pantalla vacía (Moahu en celular ✅).
- Fotos de niños o casos identificables.
- Estética clínica fría (blanco/azul hospitalario) o, al revés, demasiado "infantil/tierno" que reste seriedad profesional (💭).

---

## 8. Recomendación final

### 8.1 Funciones priorizadas

**MVP (lo mínimo para publicar con orgullo)**

1. Home + Sobre mí + Servicios + Contacto + FAQ, con **matrícula visible**, aviso de alcance y aviso de crisis.
2. **WhatsApp flotante** con texto.
3. **Agenda de primera entrevista (Cal.com)** con formulario mínimo y consentimiento.
4. **Formulario de contacto** alternativo.
5. **1-2 guías PDF + alta al newsletter** (con consentimiento).
6. **Blog** con 3-5 notas.
7. **`/links`** para Instagram + 6 posts curados.
8. **Política de privacidad** + analítica sin cookies.
9. Rendimiento y accesibilidad de base (LCP ≤ 2,5 s).

**Fase 2 (cuando el MVP esté en uso 1-2 meses)**

- `/talleres` con fechas, reserva de lugar (Cal.com grupal) y **link de pago de Mercado Pago**.
- Secuencia de bienvenida por email (3 mails).
- Más descargables; página por tema/edad; mejoras de SEO según Search Console.
- Botón de arrepentimiento y términos si ya vende por la web.
- Medición de conversión por botón.

**Fase 3 (si hay demanda)**

- **Talleres/cursos grabados en una plataforma** (no en la web propia).
- Feed de Instagram automático (solo si aporta).
- Membresía/biblioteca (si hay base de suscriptores).
- Segundo idioma o contenido para otros países (solo si hay audiencia).
- Área privada: **no**, salvo necesidad clara y revisión legal.

### 8.2 Stack recomendado (resumen)

| Capa | Elección | Alternativa |
|---|---|---|
| Sitio | Astro (estático) | WordPress si se prefiere edición total |
| Edición | Pages CMS (GitHub) | Decap/Sveltia, TinaCMS, Keystatic |
| Hosting | Cloudflare Pages o Netlify | Vercel |
| Dominio | .com.ar (ARS 8.500/año) | .ar (ARS 25.500) |
| Agenda | Cal.com (Free) | Calendly |
| WhatsApp | enlace `wa.me` con mensaje inicial | WhatsApp Business |
| Newsletter | Brevo/MailerLite/Mailchimp (free tier) | — |
| Pagos (fase 2) | Mercado Pago link de pago | Plataforma de cursos |
| Analítica | Plausible o equivalente sin cookies | Cloudflare Web Analytics |

### 8.3 Costos
Ver 6.7: del orden de **ARS 8.500 + (opcional) USD 108** el primer año, sin contar el trabajo de desarrollo ni el correo profesional.

---

## 9. Riesgos y decisiones que debe tomar el usuario

| # | Decisión / riesgo | Por qué importa | Sugerencia |
|---|---|---|---|
| 1 | **¿Qué Colegio/jurisdicción la rige y qué dice su código de publicidad?** | El Código de FePRA es una referencia; el provincial puede ser más estricto. | Preguntar al Colegio antes de publicar precios, "gratis", testimonios o cualquier oferta. |
| 2 | **¿Es clínica (turnos, historias) o solo orientación/talleres?** | Cambia el tratamiento de datos (art. 8 de la Ley 25.326) y el tono legal. | Definirlo y reflejarlo en las páginas y en el aviso de alcance. |
| 3 | **¿Se publican precios?** | FePRA 6.1.1.1 pide abstenerse de publicitar honorarios. Pero los talleres se venden con precio. | Consultar. Idea: precios solo al contactar o en la plataforma de venta del taller, nunca en consultas clínicas. |
| 4 | **"Primera consulta gratis" / guías gratis** | 6.1.1.3: no usar el precio o la gratuidad *del servicio* como propaganda. | Preguntar si una guía descargable entra en esa cláusula. |
| 5 | **Testimonios** | Secreto profesional, no hallé una regla explícita pero hay riesgo. | Sin testimonios de pacientes; alternativas en 3.3 y 4. |
| 6 | **Datos en servidores de EE. UU.** (Cal.com, newsletter, formularios) | Art. 12 de la Ley 25.326; EE. UU. no está en la lista de adecuados ✅. | Minimizar datos, consentimiento expreso, política clara, evaluar cláusulas modelo con un abogado. |
| 7 | **¿Inscribir la base en el RNBD?** | Evitar sanciones. | Consultar a un abogado/AAIP. |
| 8 | **Quién mantiene el sitio y quién es titular de las cuentas** | Dependencia del desarrollador (💭), caso de dominios perdidos ✅. | Cuentas y dominio a nombre de ella; documentación y una capacitación breve. |
| 9 | **Quién escribe y actualiza el contenido** | Un blog dormido lastima (✅(T) en otros sitios). | Calendario realista (p. ej. 1 nota por mes) a partir de lo que ya publica en IG. |
| 10 | **Facturación e impuestos si cobra por la web** | Obligaciones fiscales. | Hablar con su contador; no lo investigué. |
| 11 | **Aviso de crisis** | Responsabilidad ante lectores en riesgo. | Verificar teléfonos vigentes y de su jurisdicción. |
| 12 | **Imágenes de menores / casos** | FePRA 5.1.9; privacidad. | Política propia y consentimientos por escrito si se usan. |
| 13 | **Dependencia de Instagram** | Si cambia el algoritmo o pierde la cuenta, pierde audiencia. | Priorizar el newsletter y `/links`. |
| 14 | **Expectativas de este "regalo"** | Es una sorpresa; hacen falta sus textos, fotos, matrícula, enfoque. | Planificar una sesión con ella para contenido y aprobación; sin su OK no se publica. |
| 15 | **Claims de otras fuentes** | Varias cifras de costos las dejé sin verificar. | Revisar los 🔶 antes de decidir presupuesto. |

---

## 10. Metodología y límites

- **Búsquedas:** WebSearch (varias consultas, la herramienta tiene sesgo a EE. UU. y devuelve resúmenes; sus datos solo los usé como 🔶 salvo verificación posterior).
- **Fuentes primarias que sí leí:** Código de Ética FePRA 2013 (PDF, texto extraído), Buenas Prácticas en Telepsicología FePRA 2025 (PDF, extracto), Ley 25.326 (texto en argentina.gob.ar), Res. 424/2020 (PDF), página de transferencias internacionales de argentina.gob.ar, tabla de aranceles de NIC Argentina, páginas de precios de Cal.com y Plausible, documentación de límites de Cloudflare Pages, página de Pages CMS, web.dev (Core Web Vitals).
- **Mediciones propias:** en el navegador integrado de la app: Moahu (desktop y celular emulado 375 px), Sara Tarrés (desktop y celular), Elisenda Pascual, Machy Guerrero, Adhara Monzó y Good Inside (desktop). Una sola carga por sitio; sin Lighthouse.
- **Lo que no pude hacer:**
  - **carolinamorapsicologa.com**: en el navegador mostró un chequeo anti-bots ("Checking your browser…") y no lo salteé; su análisis es de la lectura automática.
  - **crianzaempatica.com**: dominio desconectado de Wix (✅); su análisis es solo desde el [perfil público](https://psicologiaymente.com/psicologos/2061696/sofia-frenkel-santillan) y una búsqueda.
  - **reddecrianza.org.ar**: el dominio no resolvió. **crianzapositiva.ar**: redirige a una tienda de decoración.
  - **Mercado Pago**: la tabla oficial de costos pide login; usé fuentes secundarias.
  - **Calendly, Google Calendar (citas), Brevo/MailerLite/Mailchimp, Cloudflare Web Analytics, Google Workspace**: no los verifiqué en fuentes oficiales.
  - **Netlify Identity**: el anuncio de deprecación lo vi como resultado de búsqueda; la página no abrió.
  - **Sitios argentinos**: encontré pocos; lo más probable es que haya más buenos ejemplos que mi búsqueda no mostró (y puede que la sesión hermana, que investiga el ecosistema de ella, tenga referencias mejores).

---

## 11. Fuentes

**Sitios analizados**
- Moahu — https://moahu.com.ar/
- Carolina Mora, psicóloga — https://carolinamorapsicologa.com/
- Crianza Empática (dominio desconectado; perfil público) — https://www.crianzaempatica.com/ · https://psicologiaymente.com/psicologos/2061696/sofia-frenkel-santillan
- Psico.lubosco (Tiendup) — https://psicolubosco.tiendup.com/curso/crianza0a5
- Mamá Psicóloga Infantil (Sara Tarrés) — https://www.mamapsicologainfantil.com/
- Adhara Monzó, psicóloga perinatal online — https://psicologaperinatalonline.com/
- Elisenda Pascual Martí — https://elisendapascualmarti.com/es/
- Machy Guerrero — https://machyguerrero.com/
- Crecimiento en Positivo — https://crecimientownpositivo.com/talleres/
- Psiko Aprende — https://psikoaprende.com/curso-de-crianza-respetuosa-y-consciente/
- Mónica Serrano — https://www.psicologiaycrianza.com/cursos-y-talleres-maternidad-y-crianza-on-line/
- Good Inside — https://www.goodinside.com/
- Peaceful Parent, Happy Kids (ex Aha! Parenting) — https://www.peacefulparenthappykids.com/
- crianzapositiva.ar (hoy redirige) — https://crianzapositiva.ar/

**Ética y normativa**
- Código de Ética de la FePRA — https://fepra.org.ar/wp-content/uploads/2021/06/Codigo-de-E%CC%81tica-de-la-FePRA.pdf
- FePRA, Buenas Prácticas en Telepsicología (2025) — https://fepra.org.ar/wp-content/uploads/2025/10/FEPRA-Buenas-Practicas-Telepsicologia-corregido.pdf
- Ley 25.326 — https://www.argentina.gob.ar/normativa/nacional/ley-25326-64790/texto
- Transferencias internacionales de datos — https://www.argentina.gob.ar/transferencias-internacionales
- Inscripción de bases de datos privadas (AAIP) — https://www.argentina.gob.ar/servicio/inscribir-un-responsable-de-bases-de-datos-personales-privadas
- Registro de bases de datos, criterio de un consejo profesional (2006) — https://www.cpcesfe2.org.ar/wp-content/uploads/2023/12/cs-10-06-registro-nac-bases-datos.pdf
- Resolución 424/2020 (botón de arrepentimiento) — https://www.casi.com.ar/sites/default/files/res4242020sci.pdf
- Botón de arrepentimiento en Tienda Nube — https://ayuda.tiendanube.com/es_AR/123288-mis-ventas/que-es-el-boton-de-arrepentimiento-de-compra-de-mi-tiendanube
- Ley 27.553 (análisis) — https://beccarvarela.com/novedades/ley-27-553-con-que-disposiciones-legales-cuenta-la-telemedicina-en-argentina/
- Accesibilidad web en Argentina (W3C) — https://www.w3.org/wai/policies/argentina

**Técnica y costos**
- NIC Argentina, Dominios y Aranceles — https://nic.ar/es/dominios/dominios_y_aranceles
- Cal.com, precios — https://cal.com/pricing
- Plausible — https://plausible.io/
- Core Web Vitals — https://web.dev/articles/vitals
- Cloudflare Pages, límites — https://developers.cloudflare.com/pages/platform/limits/
- Pages CMS — https://pagescms.org/
- Netlify Identity deprecado — https://netlify.com/changelog/deprecation-netlify-identity (no se pudo abrir; solo resultado de búsqueda)
- Decap CMS, discusión sobre Netlify Identity — https://github.com/decaporg/decap-cms/discussions/7419
- Decap CMS y Astro — https://docs.astro.build/pl/guides/cms/decap-cms
- Instagram, oEmbed — https://developers.facebook.com/documentation/instagram-platform/oembed
- Instagram, cierre de la API Basic Display (vendor blog) — https://wiserreview.com/blog/embed-instagram-feed-website/
- Mercado Pago, comisiones (secundaria) — https://calculadorapagos.com/calculadora-de-comisiones-mercado-pago-2026/ · https://fortunaweb.com.ar/blog/cuanto-cobran-realmente-las-pasarelas-de-pago-por-vender-online
- Calendly, plan gratis (secundaria) — https://costbench.com/software/scheduling/calendly/free-plan
