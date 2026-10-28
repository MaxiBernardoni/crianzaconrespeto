/**
 * Iconos propios de Crianza con Respeto. Dibujados para este sitio: línea redondeada color texto (burdeos)
 * con relleno suave y un toque de color, en la línea de su marca (formas blandas, como las hojas y el corazón del logo).
 *
 * Grilla de 48×48. Clases dentro de cada dibujo (los colores se definen en global.css con `--ic-fondo` y `--ic-acento`):
 *   f = relleno suave + línea · a = relleno de acento + línea · s = solo línea · p = punto sólido
 */
export const ICONOS: Record<string, string> = {
  corazon: `<path class="f" d="M24 41C10 31 6 22 6 16.5 6 11.5 10 8 14.5 8c3.7 0 7 2.2 9.5 6 2.5-3.8 5.8-6 9.5-6C38 8 42 11.5 42 16.5 42 22 38 31 24 41z"/><path class="s" d="M13 16c.6-2 2.2-3.2 4-3.4"/>`,

  burbuja: `<path class="f" d="M10 8h28a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4H23l-9 8v-8h-4a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4z"/><path class="a" d="M24 28c-4.6-3-6.2-5.4-6.2-7.4 0-1.8 1.4-3.1 3.1-3.1 1.3 0 2.5.8 3.1 2 .6-1.2 1.800-2 3.100-2 1.700 0 3.100 1.300 3.100 3.100 0 2-1.600 4.400-6.200 7.400z"/>`,

  hoja: `<path class="f" d="M40 7c0 12-8 21-22 21C18 15 27 8 40 7z"/><path class="s" d="M18 28C24 20 30 14 36 11"/><path class="s" d="M18 28 9 41"/><path class="a" d="M15 34c-6 0-9-3.500-9-9 6 0 9 3.500 9 9z"/>`,

  luna: `<path class="f" d="M28 7a18 18 0 1 0 13 31 14 14 0 0 1-13-31z"/><path class="a" d="M38 9l1.700 4.300L44 15l-4.300 1.700L38 21l-1.700-4.300L32 15l4.300-1.700z"/>`,

  familia: `<circle class="f" cx="15" cy="12" r="5"/><path class="f" d="M6 32c0-6 4-10 9-10s9 4 9 10z"/><circle class="f" cx="33" cy="12" r="5"/><path class="f" d="M24 32c0-6 4-10 9-10s9 4 9 10z"/><circle class="a" cx="24" cy="30" r="4"/><path class="a" d="M16.500 44c0-5 3.300-8 7.500-8s7.500 3 7.500 8z"/>`,

  brote: `<path class="s" d="M24 42V24"/><path class="f" d="M24 29C14 29 8 23 8 13c10 0 16 6 16 16z"/><path class="a" d="M24 25c0-9 6-15 16-15 0 9-6 15-16 15z"/><path class="s" d="M14 42h20"/>`,

  lupa: `<circle class="f" cx="20" cy="20" r="13"/><path class="s" d="M30 30l11 11"/><path class="s" d="M13 18a8 8 0 0 1 5-6"/>`,

  chat: `<path class="f" d="M7 7h23a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H17l-7 6v-6H7a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3z"/><circle class="p" cx="12" cy="16" r="1.800"/><circle class="p" cx="18.500" cy="16" r="1.800"/><circle class="p" cx="25" cy="16" r="1.800"/><path class="a" d="M21 27h19a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v5l-6-5H21a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3z"/>`,

  cuadro: `<rect class="f" x="6" y="9" width="36" height="30" rx="5"/><circle class="a" cx="16" cy="19" r="3.500"/><path class="s" d="M6 33l10-9 8 7 6-5 12 8"/>`,

  lapiz: `<path class="f" d="M32 7l9 9L18 39l-11 2 2-11z"/><path class="a" d="M9 30l9 9-11 2z"/><path class="s" d="M27 12l9 9"/>`,

  celular: `<rect class="f" x="13" y="5" width="22" height="38" rx="5"/><path class="s" d="M21 10h6"/><circle class="p" cx="24" cy="37" r="1.800"/>`,

  escudo: `<path class="f" d="M24 5l15 5v11c0 10-6 17-15 22C15 38 9 31 9 21V10z"/><path class="a" d="M24 31c-5-3.400-7-6-7-8.400 0-2 1.600-3.400 3.400-3.400 1.400 0 2.800.9 3.600 2.200.8-1.300 2.200-2.200 3.600-2.200 1.800 0 3.400 1.400 3.400 3.400 0 2.400-2 5-7 8.400z"/>`,

  globo: `<circle class="f" cx="24" cy="24" r="17"/><path class="s" d="M24 7c-8 6-8 28 0 34 8-6 8-28 0-34z"/><path class="s" d="M7 24h34"/><path class="s" d="M10 14c9 4 19 4 28 0"/><path class="s" d="M10 34c9-4 19-4 28 0"/>`,
};

/** Formas del confeti de la página del regalo: SVG sueltos con los colores de la marca. */
export const CONFETI = [
  (c: string) => `<svg viewBox="0 0 48 48" width="1em" height="1em"><path fill="${c}" d="M24 42C9 31 5 22 5 16.500 5 11 9 7 14 7c4 0 7.500 2.300 10 6.500C26.500 9.300 30 7 34 7c5 0 9 4 9 9.500C43 22 39 31 24 42z"/></svg>`,
  (c: string) => `<svg viewBox="0 0 48 48" width="1em" height="1em"><g fill="${c}"><circle cx="15" cy="15" r="12"/><circle cx="33" cy="15" r="12"/><circle cx="15" cy="33" r="12"/><circle cx="33" cy="33" r="12"/><rect x="12" y="12" width="24" height="24"/></g></svg>`,
  (c: string) => `<svg viewBox="0 0 48 48" width="1em" height="1em"><path fill="${c}" d="M24 2l5 17 17 5-17 5-5 17-5-17L2 24l17-5z"/></svg>`,
];
