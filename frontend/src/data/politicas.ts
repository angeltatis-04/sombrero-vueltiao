// Políticas legales de la tienda (Ley 1480 de 2011 - Estatuto del Consumidor, y Ley 1581 de 2012 - Datos personales).
// Los datos de la empresa, envíos y garantía salen de config/sitio.ts y data/tienda.ts para no repetirlos.

import { EMPRESA, ENVIO, SITIO, WHATSAPP } from "@/config/sitio";
import { MESES_GARANTIA, OBSEQUIOS } from "@/data/tienda";
import { formatoCOP } from "@/lib/format";

export type Bloque = { titulo: string; parrafos?: string[]; lista?: string[] };

export type Politica = {
  slug: string;
  titulo: string;
  nombreCorto: string;
  resumen: string;
  // Lo esencial en pocas líneas; se muestra destacado antes del detalle legal.
  enResumen: string[];
  bloques: Bloque[];
};

// Fecha desde la que rigen las políticas. Cambiarla cada vez que se modifique el texto.
export const VIGENCIA_POLITICAS = "27 de octubre de 2026";

const TITULAR = `${SITIO.marca}, identificado con NIT ${EMPRESA.nit}`;

const canales = [
  EMPRESA.correo && `correo electrónico ${EMPRESA.correo}`,
  WHATSAPP.numero && `WhatsApp +${WHATSAPP.numero.slice(0, 2)} ${WHATSAPP.numero.slice(2)}`,
  ...EMPRESA.telefonos.map((t) => `teléfono ${t}`),
]
  .filter(Boolean)
  .join(", ");

const domicilio = [EMPRESA.direccion, EMPRESA.ciudad].filter(Boolean).join(", ");

const envios: Politica = {
  slug: "envios",
  titulo: "Política de envíos",
  nombreCorto: "Envíos",
  resumen: "Cobertura, costos, tiempos de entrega y qué hacer al recibir tu pedido.",
  enResumen: [
    "Enviamos a toda Colombia.",
    `Envío gratis desde ${formatoCOP(ENVIO.gratisDesde)}; si no, ${formatoCOP(ENVIO.costo)}.`,
    `Despachamos en ${ENVIO.diasPreparacion} días hábiles (personalizados: ${ENVIO.diasPreparacionPersonalizado}).`,
    `Llega en ${ENVIO.diasEntregaCiudades} días hábiles a ciudades principales y ${ENVIO.diasEntregaMunicipios} a otros municipios.`,
  ],
  bloques: [
    {
      titulo: "Cobertura",
      parrafos: [
        `Enviamos desde ${EMPRESA.ciudad} a cualquier ciudad o municipio de Colombia mediante empresas de mensajería. Para envíos fuera de Colombia escríbenos antes de comprar y te enviamos una cotización.`,
      ],
    },
    {
      titulo: "Costo del envío",
      lista: [
        `Compras desde ${formatoCOP(ENVIO.gratisDesde)}: envío gratis.`,
        `Compras por debajo de ese valor: ${formatoCOP(ENVIO.costo)} a cualquier destino nacional.`,
        "El costo del envío se muestra en el carrito antes de pagar, junto con el precio total. Los precios incluyen los impuestos aplicables.",
      ],
    },
    {
      titulo: "Tiempos de entrega",
      parrafos: [
        `Preparamos tu pedido en ${ENVIO.diasPreparacion} días hábiles después de confirmado el pago. Los sombreros personalizados toman ${ENVIO.diasPreparacionPersonalizado} días hábiles.`,
        `Después del despacho, la transportadora entrega en ${ENVIO.diasEntregaCiudades} días hábiles en ciudades principales y en ${ENVIO.diasEntregaMunicipios} días hábiles en otros municipios.`,
        "Son tiempos estimados. En ningún caso la entrega superará los 30 días calendario desde la compra, como establece el artículo 50 de la Ley 1480 de 2011. Si no cumplimos ese plazo, puedes cancelar la compra y te devolvemos el 100% del dinero.",
      ],
    },
    {
      titulo: "Seguimiento",
      parrafos: [
        "Cuando despachemos tu pedido te enviaremos por WhatsApp o correo el nombre de la transportadora y el número de guía para que puedas rastrearlo.",
      ],
    },
    {
      titulo: "Al recibir tu pedido",
      lista: [
        "Revisa que la caja llegue cerrada y sin daños antes de firmar la guía.",
        "Si la caja llega abierta, mojada o golpeada, déjalo anotado en la guía de la transportadora y tómale fotos.",
        "Escríbenos dentro de los 2 días hábiles siguientes con las fotos para ayudarte con el reclamo.",
      ],
    },
    {
      titulo: "Dirección y recepción",
      parrafos: [
        "Verifica que la dirección, el nombre y el teléfono de quien recibe estén completos y correctos. Si el pedido es devuelto por una dirección errada o porque nadie lo recibió después de los intentos de la transportadora, el nuevo envío corre por cuenta del cliente.",
      ],
    },
  ],
};

const cambios: Politica = {
  slug: "cambios-y-devoluciones",
  titulo: "Cambios, devoluciones y garantía",
  nombreCorto: "Cambios y devoluciones",
  resumen: "Derecho de retracto, cambios por talla, garantía y reversión del pago.",
  enResumen: [
    "¿Te arrepentiste? Tienes 5 días hábiles desde que lo recibes para devolverlo sin uso y te reembolsamos el dinero.",
    "Cambios por talla o modelo dentro de los 15 días siguientes a la entrega.",
    "Por ser tejido a mano, hilos sueltos, uniones visibles y pequeñas diferencias de trenza son normales y no son defectos.",
    "Los sombreros personalizados no tienen devolución ni cambio, pero sí garantía.",
  ],
  bloques: [
    {
      titulo: "Derecho de retracto (5 días hábiles)",
      parrafos: [
        "Por ser una compra a distancia, tienes derecho a arrepentirte de la compra dentro de los 5 días hábiles siguientes a la entrega del producto, según el artículo 47 de la Ley 1480 de 2011.",
      ],
      lista: [
        `El sombrero debe estar sin uso, en perfecto estado, con su empaque y todos sus obsequios${OBSEQUIOS.length ? ` (${OBSEQUIOS.join(", ").toLowerCase()})` : ""}.`,
        "El costo del envío de vuelta corre por tu cuenta.",
        "Te devolvemos el dinero pagado, sin descuentos ni retenciones, en un plazo máximo de 30 días calendario desde que ejerces el retracto.",
        "No aplica para sombreros personalizados con nombre u otras indicaciones tuyas, porque son hechos a tu medida (artículo 47 de la Ley 1480 de 2011).",
      ],
    },
    {
      titulo: "Cambios por talla o modelo",
      parrafos: [
        "Si el sombrero no te queda o prefieres otro modelo, puedes pedir el cambio dentro de los 15 días calendario siguientes a la entrega, con el producto sin uso y en su empaque. Los envíos del cambio corren por cuenta del cliente. Si el nuevo producto tiene un precio mayor, pagas la diferencia.",
        "Los sombreros personalizados no tienen cambio por talla o modelo, salvo que el error sea nuestro.",
      ],
    },
    {
      titulo: "Un producto hecho a mano",
      parrafos: [
        "Cada sombrero se teje y se cose a mano en caña flecha natural, trenza por trenza. Por eso es normal y propio de la artesanía, y no se considera defecto:",
      ],
      lista: [
        "Hilos o fibras sueltas en el tejido o en las costuras. Si sobresale alguno, se puede recortar con cuidado con unas tijeras, sin halarlo.",
        "Costuras y uniones visibles entre las trenzas.",
        "Pequeñas diferencias de tono, trenza, forma o medida entre un sombrero y otro, o frente a las fotos.",
        "Leves irregularidades en el dibujo o en el borde del ala.",
      ],
    },
    {
      titulo: "Garantía",
      parrafos: [
        `Nuestros sombreros tienen una garantía de ${MESES_GARANTIA} meses contados desde la entrega, según el artículo 8 de la Ley 1480 de 2011.`,
        "La garantía cubre los defectos de fabricación que afecten la estructura o el uso del sombrero, por ejemplo una trenza que se desbarata o una costura que se abre y deforma el sombrero con un uso normal.",
        "Si el sombrero tiene un defecto lo reparamos y, si no es posible repararlo o el defecto se repite, lo cambiamos por uno igual o te devolvemos el dinero. Respondemos tu solicitud en máximo 15 días hábiles y los envíos de la garantía corren por nuestra cuenta.",
        "Si tienes dudas sobre un detalle de tu sombrero, escríbenos con fotos y lo revisamos contigo.",
      ],
    },
    {
      titulo: "Lo que no cubre la garantía",
      lista: [
        "Las características propias del trabajo a mano descritas arriba.",
        "Daños por mal uso: dejar el sombrero mojado, aplastarlo o doblarlo de forma distinta a la indicada, o exponerlo por largo tiempo al sol o al calor.",
        "El desgaste natural por el uso.",
      ],
    },
    {
      titulo: "Producto equivocado o dañado en el envío",
      parrafos: [
        "Si recibes un producto distinto al que compraste o dañado por el transporte, escríbenos dentro de los 2 días hábiles siguientes con fotos. Lo cambiamos sin costo para ti.",
      ],
    },
    {
      titulo: "Reversión del pago",
      parrafos: [
        "Si pagaste con tarjeta de crédito, débito, PSE u otro medio electrónico, puedes pedir la reversión del pago cuando fuiste víctima de fraude, la operación no fue solicitada, el producto no llegó, o el producto no corresponde a lo comprado o está defectuoso (artículo 51 de la Ley 1480 de 2011).",
        "Para hacerlo, preséntanos tu reclamo dentro de los 5 días hábiles siguientes a que conociste el problema, avisa también a la entidad emisora de tu medio de pago y devuélvenos el producto si lo recibiste.",
      ],
    },
    {
      titulo: "Cómo hacer una solicitud",
      parrafos: [
        `Escríbenos por ${canales} con tu nombre, número de pedido, el motivo y fotos del producto. Te respondemos con las instrucciones de envío.`,
        "Si no quedas satisfecho con nuestra respuesta, puedes acudir a la Superintendencia de Industria y Comercio (www.sic.gov.co).",
      ],
    },
  ],
};

const datos: Politica = {
  slug: "tratamiento-de-datos",
  titulo: "Política de tratamiento de datos personales",
  nombreCorto: "Tratamiento de datos",
  resumen: "Cómo recogemos, usamos y protegemos tus datos, y cómo ejercer tus derechos.",
  enResumen: [
    "Usamos tus datos solo para enviar tu pedido y atenderte.",
    "No guardamos datos de tarjetas ni vendemos tu información.",
    "Puedes pedirnos ver, corregir o borrar tus datos cuando quieras.",
  ],
  bloques: [
    {
      titulo: "Responsable del tratamiento",
      parrafos: [
        `El responsable de tus datos personales es ${TITULAR}, con domicilio en ${domicilio}. Canales de contacto: ${canales}.`,
        "Esta política cumple la Ley 1581 de 2012 y el Decreto 1377 de 2013, incorporado en el Decreto 1074 de 2015.",
      ],
    },
    {
      titulo: "Datos que recogemos",
      lista: [
        "Nombre, número de cédula, teléfono y correo electrónico.",
        "Dirección y ciudad de entrega.",
        "El texto que pides para personalizar tu sombrero.",
        "Historial de pedidos y conversaciones de atención al cliente.",
        "No guardamos los datos de tu tarjeta ni de tu cuenta bancaria: el pago lo procesa directamente la pasarela de pagos.",
      ],
    },
    {
      titulo: "Para qué usamos tus datos",
      lista: [
        "Procesar, facturar y enviar tus pedidos.",
        "Atender tus preguntas, cambios, devoluciones y garantías.",
        "Crear y administrar tu cuenta en la tienda.",
        "Enviarte novedades, descuentos y promociones, solo si nos diste permiso. Puedes pedir que dejemos de hacerlo cuando quieras.",
        "Cumplir obligaciones legales, contables y tributarias.",
      ],
    },
    {
      titulo: "Con quién compartimos tus datos",
      parrafos: [
        "Solo compartimos los datos necesarios con las transportadoras que entregan tu pedido, la pasarela de pagos y los proveedores tecnológicos que alojan la tienda. Todos deben usarlos únicamente para esa finalidad. No vendemos ni alquilamos tus datos.",
      ],
    },
    {
      titulo: "Tus derechos",
      parrafos: ["Como titular de los datos tienes derecho a:"],
      lista: [
        "Conocer, actualizar y corregir tus datos.",
        "Pedir prueba de la autorización que nos diste.",
        "Saber cómo hemos usado tus datos.",
        "Revocar la autorización o pedir que borremos tus datos, cuando no exista una obligación legal o contractual de conservarlos.",
        "Presentar quejas ante la Superintendencia de Industria y Comercio, después de haber hecho tu reclamo ante nosotros.",
        "Consultar tus datos de forma gratuita.",
      ],
    },
    {
      titulo: "Cómo ejercer tus derechos",
      parrafos: [
        `Envía tu solicitud por ${canales}, con tu nombre, número de cédula, lo que pides y un dato de contacto para responderte.`,
        "Consultas: respondemos en máximo 10 días hábiles, prorrogables 5 días hábiles más si es necesario, avisándote el motivo.",
        "Reclamos (corrección, actualización, supresión o revocatoria): respondemos en máximo 15 días hábiles, prorrogables 8 días hábiles más, avisándote el motivo.",
      ],
    },
    {
      titulo: "Autorización",
      parrafos: [
        "Al registrarte, comprar o escribirnos, nos autorizas a tratar tus datos según esta política. No recogemos a sabiendas datos de menores de edad; si un menor quiere comprar, debe hacerlo su padre, madre o representante.",
      ],
    },
    {
      titulo: "Seguridad, cookies y conservación",
      parrafos: [
        "Protegemos tus datos con medidas técnicas y administrativas razonables para evitar su pérdida, uso o acceso no autorizado.",
        "La tienda guarda tu carrito de compras en tu propio navegador para que no lo pierdas al cerrar la página. No usamos cookies de publicidad.",
        "Conservamos tus datos mientras sean necesarios para las finalidades descritas y durante el tiempo que exija la ley.",
      ],
    },
    {
      titulo: "Vigencia",
      parrafos: [
        `Esta política rige desde el ${VIGENCIA_POLITICAS} y estará vigente mientras la tienda funcione. Cualquier cambio importante lo publicaremos en esta página.`,
      ],
    },
  ],
};

export const POLITICAS: Politica[] = [envios, cambios, datos];

export const getPolitica = (slug: string) => POLITICAS.find((p) => p.slug === slug);
