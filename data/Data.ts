// Data.ts

// Definir una interfaz para los elementos de DATA
interface CardItem {
  id: string;
  title: string;
  description: string;
  image: any; // Usamos `any` para las imágenes, ya que require() devuelve un tipo específico de módulo
}

// Datos
const DATA: CardItem[] = [
  {
    id: '1',
    title: 'Dilo al revés',
    description: ' Di una palabra difícil al revés en 5 segundos. Si fallas, bebes.',
    image: require('@/assets/images/fotor.jpg'),
  },
  {
    id: '2',
    title: 'Mensaje vergonzoso',
    description: 'Envía un mensaje de texto vergonzoso a alguien al azar o bebe.',
    image: require('@/assets/images/bar.jpg'),
  },
  {
    id: '3',
    title: 'Confesión incómoda',
    description: 'Di una verdad vergonzosa sobre ti o bebe.',
    image: require('@/assets/images/cofesion.png'),
  },
  {
    id: '4',
    title: 'Danza loca',
    description: 'Baila como si nadie te viera durante 30 segundos o bebe.',
    image: require('@/assets/images/danza.png'),
  },
  {
    id: '5',
    title: 'Imita a alguien',
    description: 'Imita a otro jugador sin parar hasta que alguien adivine a quién imitas o bebe.',
    image: require('@/assets/images/imitar.png'),
  },

  {
    id: '6',
    title: 'Cambio de redes',
    description: 'Deja que otro jugador publique algo en una de tus redes sociales o bebe.',
    image: require('@/assets/images/kiss.jpg'),
  },

  {
    id: '7',
    title: 'Adivina la cancións',
    description: 'Tararea una canción y si nadie la adivina en 10 segundos, bebes.',
    image: require('@/assets/images/kiss.jpg'),
  },

  {
    id: '8',
    title: 'Selfie loco',
    description: 'Sube una selfie haciendo una cara graciosa o bebe.',
    image: require('@/assets/images/kiss.jpg'),
  },

  {
    id: '8',
    title: 'Selfie loco',
    description: 'Sube una selfie haciendo una cara graciosa o bebe.',
    image: require('@/assets/images/kiss.jpg'),
  },
  {
    id: '9',
    title: 'Cambio de ropa',
    description: 'Ponte la prenda de otro jugador o bebe.',
    image: require('@/assets/images/kiss.jpg'),
  },
  {
    id: '10',
    title: 'Llama a un ex',
    description: 'Llama a un ex y pregúntale cómo ha estado o bebe.',
    image: require('@/assets/images/kiss.jpg'),
  },
  {
    id: '11',
    title: 'Pide un favor extraño',
    description: 'Escribe a alguien pidiendo un favor raro y espera su respuesta o bebe.',
    image: require('@/assets/images/kiss.jpg'),
  },
  {
    id: '12',
    title: 'Beso o cachetada',
    description: ' Dale un beso en la mejilla a alguien o recibe una cachetada suave (o bebe).',
    image: require('@/assets/images/kiss.jpg'),
  },
  {
    id: '13',
    title: 'Doble trago ',
    description: ' Si no quieres hacer el reto, en vez de un trago, tomas dos.',
    image: require('@/assets/images/kiss.jpg'),
  },
  {
    id: '14',
    title: 'Reto del Chiste ',
    description: ' Cuenta un chiste. Si nadie se ríe, tú bebes. Si alguien se ríe, ellos beben.',
    image: require('@/assets/images/kiss.jpg'),
  },

  {
    id: '15',
    title: 'Reto del Juego de Palabras',
    description: 'Di una palabra y la siguiente persona debe decir otra relacionada. Quien se quede sin ideas, bebe.',
    image: require('@/assets/images/kiss.jpg'),
  },
  {
    id: '16',
    title: 'Reto del Chiste ',
    description: 'Desafía a alguien a hacer algo (como bailar o cantar). Si no lo hace, bebe..',
    image: require('@/assets/images/kiss.jpg'),
  },

  {
    id: '17',
    title: 'Baile Loco',
    description: 'Ponte de pie y baila durante 1 minuto. Si te detienes antes de tiempo, bebe.',
    image: require('@/assets/images/kiss.jpg'),
  },

  {
    id: '19',
    title: 'El Reto del Mensaje',
    description: 'Envía un mensaje de texto aleatorio a un contacto en tu teléfono. Si no lo haces, bebe.',
    image: require('@/assets/images/kiss.jpg'),
  },
 
  {
    id: '21',
    title: 'El Reto del Equilibrio',
    description: 'Coloca un vaso lleno en tu cabeza y camina 5 pasos. Si se cae, bebe.',
    image: require('@/assets/images/kiss.jpg'),
  },
  {
    id: '22',
    title: 'El Reto del Volado',
    description: 'Lanza una moneda. Si pierdes, bebes y haces 10 sentadillas.',
    image: require('@/assets/images/kiss.jpg'),
  },

  {
    id: '24',
    title: 'El Reto del Teléfono Desbloqueado',
    description: 'Entrega tu teléfono desbloqueado a alguien. Ellos pueden enviar un mensaje o publicar algo en tus redes sociales. Si no lo haces, bebes.',
    image: require('@/assets/images/kiss.jpg'),
  },

  {
    id: '26',
    title: 'El Reto del Juego de Palabras',
    description: 'Di una palabra y la siguiente persona debe decir otra relacionada. Quien se quede sin ideas, bebe.',
    image: require('@/assets/images/kiss.jpg'),
  },
  {
    id: '27',
    title: 'El Reto del Cubo de Hielo',
    description: 'Sostén un cubo de hielo en tu mano hasta que se derrita. Si lo sueltas, bebe.',
    image: require('@/assets/images/kiss.jpg'),
  },
  {
    id: '28',
    title: 'El Reto del Baile Congelado',
    description: 'Baila hasta que la música se detenga. Cuando pare, debes quedarte quieto como una estatua. Si te mueves, bebes.',
    image: require('@/assets/images/kiss.jpg'),
  },
  {
    id: '29',
    title: 'El Reto del Dicho Popular',
    description: 'Completa un dicho popular. Si no lo haces correctamente, bebes.',
    image: require('@/assets/images/kiss.jpg'),
  },
  {
    id: '31',
    title: 'El Reto del Beso',
    description: 'Elige a alguien del grupo para darle un beso en la mejilla. Si te niegas, bebes.',
    image: require('@/assets/images/kiss.jpg'),
  },
  {
    id: '32',
    title: 'El Reto del Lap Dance',
    description: 'Dale un lap dance a alguien del grupo durante 30 segundos. Si te niegas, bebes.',
    image: require('@/assets/images/kiss.jpg'),
  },
  {
    id: '33',
    title: 'El Reto del Confesionario',
    description: 'Confiesa algo que nunca hayas contado antes. Si te niegas, bebes.',
    image: require('@/assets/images/kiss.jpg'),
  },
  {
    id: '34',
    title: 'El Reto del Seductor',
    description: 'Seduce a alguien del grupo con una frase picante. Si no lo haces, bebes.',
    image: require('@/assets/images/kiss.jpg'),
  },
  {
    id: '35',
    title: 'El Reto del Baile Prohibido',
    description: 'Baila de manera sensual con alguien del grupo durante 1 minuto. Si te niegas, bebes.',
    image: require('@/assets/images/kiss.jpg'),
  },

  {
    id: '36',
    title: 'El Reto del Mimo Atrevido',
    description: 'Actúa como un mimo, pero con movimientos sensuales. Si te ríes o hablas, bebes.',
    image: require('@/assets/images/kiss.jpg'),
  },
  {
    id: '37',
    title: 'El Reto del Desafío del Cuerpo',
    description: 'Usa a alguien como soporte para hacer 10 flexiones. Si no lo haces, bebes.',
    image: require('@/assets/images/kiss.jpg'),
  },
  {
    id: '38',
    title: 'El Reto del Beso en la Boca',
    description: 'Elige a alguien del grupo para darle un beso en la boca. Si te niegas, bebes.',
    image: require('@/assets/images/kiss.jpg'),
  },
  {
    id: '39',
    title: 'El Reto del Juego de Miradas',
    description: 'Mantén contacto visual con alguien del grupo durante 1 minuto sin reírte. Si pierdes, bebes.',
    image: require('@/assets/images/kiss.jpg'),
  },
  {
    id: '40',
    title: 'El Reto del Desafío del Vestuario',
    description: 'Intercambia una prenda de ropa con alguien del grupo. Si te niegas, bebes.',
    image: require('@/assets/images/kiss.jpg'),
  },
  {
    id: '41',
    title: 'El Reto del Masaje',
    description: 'Dale un masaje en los hombros a alguien del grupo durante 2 minutos. Si te niegas, bebes.',
    image: require('@/assets/images/kiss.jpg'),
  },
  {
    id: '42',
    title: 'El Reto del Susurro',
    description: 'Susurra algo al oído de alguien del grupo que lo haga sonrojar. Si no lo haces, bebes.',
    image: require('@/assets/images/kiss.jpg'),
  },
  {
    id: '43',
    title: 'El Reto del Juego de las Preguntas Picantes',
    description: 'Responde una pregunta picante. Si te niegas, bebes.',
    image: require('@/assets/images/kiss.jpg'),
  },
  {
    id: '44',
    title: 'El Reto del Baile en Pareja',
    description: 'Baila de manera sensual con alguien del grupo. Si te niegas, bebes.',
    image: require('@/assets/images/kiss.jpg'),
  },
  {
    id: '45',
    title: 'El Reto del Desafío del Beso en el Cuello',
    description: 'Dale un beso en el cuello a alguien del grupo. Si te niegas, bebes.',
    image: require('@/assets/images/kiss.jpg'),
  },
  {
    id: '46',
    title: 'El Reto del Juego de las Verdades Picantes',
    description: 'Responde una verdad picante sobre tu vida amorosa. Si te niegas, bebes.',
    image: require('@/assets/images/kiss.jpg'),
  },
  {
    id: '47',
    title: 'El Reto del Desafío del Baile en el Suelo',
    description: 'Baila en el suelo de manera sensual durante 1 minuto. Si te niegas, bebes.',
    image: require('@/assets/images/kiss.jpg'),
  },
  {
    id: '48',
    title: 'El Reto del Juego de las Posiciones',
    description: 'Imita una posición sugerente durante 30 segundos. Si te niegas, bebes.',
    image: require('@/assets/images/kiss.jpg'),
  },
  {
    id: '49',
    title: 'El Reto del Desafío del Beso en la Mano',
    description: 'Besa la mano de alguien del grupo de manera seductora. Si te niegas, bebes.',
    image: require('@/assets/images/kiss.jpg'),
  },
  {
    id: '50',
    title: 'El Reto del Juego de las Miradas Picantes',
    description: 'Mira fijamente a alguien del grupo de manera seductora durante 30 segundos. Si te ríes, bebes.',
    image: require('@/assets/images/kiss.jpg'),
  },
 
];

export default DATA;