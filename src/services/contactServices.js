const contacts = [
  {
    id: 1,
    name: "Marta",
    description: "Durmiendo",
    avatar: "https://i.pravatar.cc/150?img=5",
    last_connection: "En linea",
    messages: [
      {
        emisor: "YO",
        hora: "23:10",
        id: 1,
        texto: "Hola estoy hablando con pepe",
        status: "visto",
      },
      {
        emisor: "OTRO",
        hora: "23:11",
        id: 2,
        texto: "Si el que canta y baila",
        status: "visto",
      },
      {
        emisor: "YO",
        hora: "23:12",
        id: 3,
        texto: "Todo esta bien?",
        status: "visto",
      },
    ],
  },
  {
    id: 2,
    name: "Juan",
    description: "En el trabajo",
    avatar: "https://i.pravatar.cc/150?img=3",
    last_connection: "Ult. vez hace 3 horas",
    messages: [
      {
        emisor: "YO",
        hora: "23:10",
        id: 1,
        texto: "Hola, todo bien?",
        status: "visto",
      },
      {
        emisor: "OTRO",
        hora: "23:11",
        id: 2,
        texto: "Bien aca tomando mate",
        status: "visto",
      },
      {
        emisor: "YO",
        hora: "23:12",
        id: 3,
        texto: "Que rico",
        status: "visto",
      },
    ],
  },
  {
    id: 3,
    name: "Ana",
    description: "En el gimnasio",
    avatar: "https://i.pravatar.cc/150?img=2",
    last_connection: "Ult. vez hace 58 minutos",
    messages: [
      {
        emisor: "YO",
        hora: "23:10",
        id: 1,
        texto: "Me lo cruce el otro dia",
        status: "visto",
      },
      {
        emisor: "OTRO",
        hora: "23:11",
        id: 2,
        texto: "Que casualidad",
        status: "visto",
      },
      {
        emisor: "YO",
        hora: "23:12",
        id: 3,
        texto: "Es medio raro",
        status: "visto",
      },
    ],
  },
  {
    id: 4,
    name: "Luis",
    description: "De vacaciones",
    avatar: "https://i.pravatar.cc/150?img=4",
    last_connection: "Ult. vez hace 1 hora",
    messages: [
      {
        emisor: "YO",
        hora: "23:10",
        id: 1,
        texto: "No sabes lo que me paso anoche",
        status: "visto",
      },
      {
        emisor: "OTRO",
        hora: "23:11",
        id: 2,
        texto: "Me cai por las escalerasde mi casa",
        status: "visto",
      },
      {
        emisor: "YO",
        hora: "23:12",
        id: 3,
        texto: "Si por suerte todo bien solo un golpe",
        status: "visto",
      },
    ],
  },
  {
    id: 5,
    name: "Sofia",
    description: "Estudiando",
    avatar: "https://i.pravatar.cc/150?img=10",
    last_connection: "Ult. vez hace 13 minutos",
    messages: [
      {
        emisor: "YO",
        hora: "23:10",
        id: 1,
        texto: "Holaaaaa",
        status: "visto",
      },
      {
        emisor: "OTRO",
        hora: "23:11",
        id: 2,
        texto: "Hace mucho no hablamos",
        status: "visto",
      },
      {
        emisor: "YO",
        hora: "23:12",
        id: 3,
        texto: "Yo tambien te extraño",
        status: "visto",
      },
    ],
  },
  {
    id: 6,
    name: "Carlos",
    description: "Jugando videojuegos",
    avatar: "https://i.pravatar.cc/150?img=6",
    last_connection: "Ult. vez hace 9 minutos",
    messages: [
      {
        emisor: "YO",
        hora: "23:10",
        id: 1,
        texto: "Ayer me di cuenta que no te habia escrito",
        last_connection: "Ult. vez hace 7 horas",
        status: "visto",
      },
      {
        emisor: "OTRO",
        hora: "23:11",
        id: 2,
        texto: "LLegue tarde a casa",
        status: "visto",
      },
      {
        emisor: "YO",
        hora: "23:12",
        id: 3,
        texto: "Tardo un monton el colectivo",
        status: "visto",
      },
    ],
  },
  {
    id: 7,
    name: "Laura",
    description: "Leyendo un libro",
    avatar: "https://i.pravatar.cc/150?img=9",
    last_connection: "Ult. vez hace 1 hora",
    messages: [
      {
        emisor: "YO",
        hora: "23:10",
        id: 1,
        texto: "Te acordas de la charla que tuvimos?",
        status: "visto",
      },
      {
        emisor: "OTRO",
        hora: "23:11",
        id: 2,
        texto: "Si, esa",
        status: "visto",
      },
      {
        emisor: "YO",
        hora: "23:12",
        id: 3,
        texto: "Me dijiste que no lo ibas a hacer nunca mas",
        status: "visto",
      },
    ],
  },
  {
    id: 8,
    name: "Pedro",
    description: "Cocinando",
    avatar: "https://i.pravatar.cc/150?img=7",
    last_connection: "Ult. vez hace 30 minutos",
    messages: [
      {
        emisor: "YO",
        hora: "23:10",
        id: 1,
        texto: "Holaa, vos vas a traer la ensalada no?",
        status: "visto",
      },
      {
        emisor: "OTRO",
        hora: "23:11",
        id: 2,
        texto: "Sii esa que haces vos",
        status: "visto",
      },
      {
        emisor: "YO",
        hora: "23:12",
        id: 3,
        texto: "La de palta y tomate",
        status: "visto",
      },
    ],
  },
  {
    id: 9,
    name: "Julian",
    description: "Si la vida te da limones, haz limonada",
    last_connection: "Ult. vez hace 12 horas",
    avatar: "https://i.pravatar.cc/150?img=11",
    messages: [
      {
        emisor: "YO",
        hora: "23:10",
        id: 1,
        texto: "Viste el partido anoche?",
        status: "visto",
      },
      {
        emisor: "OTRO",
        hora: "23:11",
        id: 2,
        texto: "Fue terrible",
        status: "visto",
      },
      {
        emisor: "YO",
        hora: "23:12",
        id: 3,
        texto: "Espero que mejore porque sino me mato",
        status: "visto",
      },
    ],
  },
  {
    id: 10,
    name: "Gaby",
    description: "🐱🐱🐱",
    avatar: "https://i.pravatar.cc/150?img=14",
    last_connection: "Ult. vez hace 2 horass",
    messages: [
      {
        emisor: "YO",
        hora: "23:10",
        id: 1,
        texto: "No puse a lavar la remera",
        status: "visto",
      },
      {
        emisor: "OTRO",
        hora: "23:11",
        id: 2,
        texto: "No la otra que te iba a prestar",
        status: "visto",
      },
      {
        emisor: "YO",
        hora: "23:12",
        id: 3,
        texto: "La proxima te la traigo",
        status: "visto",
      },
    ],
  },
];

const getContactList = () => {
  return contacts;
};

const getContactById = (contact_id) => {
  for (const contact of contacts) {
    if (Number(contact.id) === Number(contact_id)) {
      return contact;
    }
  }
  return null;
};

export { getContactList, getContactById };
export default contacts;
