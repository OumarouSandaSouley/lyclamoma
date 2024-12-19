export const students = [
  {
    id: 1,
    matricule: "2023001",
    firstName: "Alice",
    lastName: "Kameni",
    class: "Terminale D1",
    birthDate: "2006-05-15",
    gender: "F",
    parentName: "Jean Kameni",
    classroom: "Salle 12",
    photo: "/images/student.jpg",
  },
  {
    id: 2,
    matricule: "2023002",
    firstName: "Paul",
    lastName: "Moussa",
    class: "Première C",
    birthDate: "2007-03-22",
    gender: "M",
    parentName: "Jean Kameni",
    classroom: "Salle 15",
    photo: "/images/student.jpg",
  },
];

export const grades = {
  2023001: {
    trimester1: [
      {
        subject: "Mathématiques",
        grade: 15.5,
        coefficient: 4,
        teacher: "M. Mbarga",
      },
      { subject: "Physique", grade: 14, coefficient: 3, teacher: "Mme. Ngo" },
      { subject: "SVT", grade: 16, coefficient: 3, teacher: "M. Fotso" },
    ],
    trimester2: [
      {
        subject: "Mathématiques",
        grade: 16,
        coefficient: 4,
        teacher: "M. Mbarga",
      },
      { subject: "Physique", grade: 15, coefficient: 3, teacher: "Mme. Ngo" },
      { subject: "SVT", grade: 15.5, coefficient: 3, teacher: "M. Fotso" },
    ],
  },
  2023002: {
    trimester1: [
      {
        subject: "Mathématiques",
        grade: 13,
        coefficient: 4,
        teacher: "M. Talla",
      },
      { subject: "Physique", grade: 12, coefficient: 3, teacher: "M. Kuate" },
      { subject: "SVT", grade: 14, coefficient: 3, teacher: "Mme. Tchana" },
    ],
    trimester2: [
      {
        subject: "Mathématiques",
        grade: 14,
        coefficient: 4,
        teacher: "M. Talla",
      },
      { subject: "Physique", grade: 13, coefficient: 3, teacher: "M. Kuate" },
      { subject: "SVT", grade: 15, coefficient: 3, teacher: "Mme. Tchana" },
    ],
  },
};

export const teachers = {
  2023001: [
    {
      name: "M. Mbarga",
      subject: "Mathématiques",
      email: "mbarga@lycee.cm",
      phone: "677123456",
    },
    {
      name: "Mme. Ngo",
      subject: "Physique",
      email: "ngo@lycee.cm",
      phone: "677234567",
    },
    {
      name: "M. Fotso",
      subject: "SVT",
      email: "fotso@lycee.cm",
      phone: "677345678",
    },
  ],
  2023002: [
    {
      name: "M. Talla",
      subject: "Mathématiques",
      email: "talla@lycee.cm",
      phone: "677456789",
    },
    {
      name: "M. Kuate",
      subject: "Physique",
      email: "kuate@lycee.cm",
      phone: "677567890",
    },
    {
      name: "Mme. Tchana",
      subject: "SVT",
      email: "tchana@lycee.cm",
      phone: "677678901",
    },
  ],
};

export const schedules = {
  2023001: {
    monday: [
      {
        time: "08:00-10:00",
        subject: "Mathématiques",
        teacher: "M. Mbarga",
        room: "Salle 12",
      },
      {
        time: "10:00-12:00",
        subject: "Physique",
        teacher: "Mme. Ngo",
        room: "Labo Physique",
      },
    ],
    tuesday: [
      {
        time: "08:00-10:00",
        subject: "SVT",
        teacher: "M. Fotso",
        room: "Labo SVT",
      },
      {
        time: "10:00-12:00",
        subject: "Mathématiques",
        teacher: "M. Mbarga",
        room: "Salle 12",
      },
    ],
    // ... autres jours
  },
  2023002: {
    monday: [
      {
        time: "08:00-10:00",
        subject: "SVT",
        teacher: "Mme. Tchana",
        room: "Labo SVT",
      },
      {
        time: "10:00-12:00",
        subject: "Mathématiques",
        teacher: "M. Talla",
        room: "Salle 15",
      },
    ],
    tuesday: [
      {
        time: "08:00-10:00",
        subject: "Physique",
        teacher: "M. Kuate",
        room: "Labo Physique",
      },
      {
        time: "10:00-12:00",
        subject: "SVT",
        teacher: "Mme. Tchana",
        room: "Labo SVT",
      },
    ],
    // ... autres jours
  },
};
