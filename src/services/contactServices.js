const contacts = [
  {
    id: 1,
    name: "Marta",
    description: "Durmiendo",
    avatar: "https://i.pravatar.cc/150?img=5",
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
    messages: [
      {
        emisor: "YO",
        hora: "23:10",
        id: 1,
        texto: "Ayer me di cuenta que no te habia escrito",
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
