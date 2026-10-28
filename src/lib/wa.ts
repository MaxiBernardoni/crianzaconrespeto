/** Link de WhatsApp con el mensaje ya escrito. `numero`: solo dígitos con código de país. */
export const wa = (numero: string, mensaje: string) =>
  `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
