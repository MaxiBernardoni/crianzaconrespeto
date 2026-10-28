# Crianza con Respeto

Sitio web de la Lic. Jacqui Szkliarski (psicóloga sistémica y perinatal, @crianza.con.respeto). Hecho con [Astro](https://astro.build), estático, con el contenido editable desde [Pages CMS](https://pagescms.org).

> Si sos una sesión de Claude o una persona que retoma el proyecto, empezá por [CLAUDE.md](CLAUDE.md): explica el objetivo, la historia, las decisiones y los pendientes.

## Correrlo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Dónde está cada cosa

- Textos: `src/content/*.json` (se editan a mano o desde Pages CMS, según `.pages.yml`).
- Fotos y logo: `public/img/`.
- Página: `src/pages/index.astro`. Estilos: `src/styles/global.css`.
- Investigaciones de base: `investigacion-marca.md` e `investigacion-web.md`.

## Editar contenido sin tocar código

Con el repositorio en GitHub conectado a Pages CMS, Jacqui entra al panel, elige una sección (Datos generales, Página de inicio, Servicios, etc.), cambia los textos o sube fotos y guarda. Cada guardado es un commit y el sitio se vuelve a publicar solo.

## Antes de publicar

- Completar la matrícula (`sitio.json`) y subir las fotos reales.
- Verificar los teléfonos del aviso de crisis y publicar la política de privacidad.
- Conectar el formulario de novedades a un servicio real.
- Contar con la aprobación de Jacqui sobre textos, fotos y servicios.
