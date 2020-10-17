const serviceTypes = [
  {
    id: 1,
    name: 'Virtual',
  },
  {
    id: 2,
    name: 'Presencial',
  }
];

const servicesCatalog = [
  {
    id: 1,
    name: 'Asesorías virtuales personales',
    slug: 'asesorias-virtuales-personales',
    serviceTypeId: 1,
  },
  {
    id: 2,
    name: 'Asesorías virtuales grupales',
    slug: 'asesorias-virtuales-grupales',
    serviceTypeId: 1,
  },
  {
    id: 3,
    name: 'Ciclos virtuales',
    slug: 'ciclos-virtuales',
    serviceTypeId: 1,
  },
  {
    id: 4,
    name: 'Cursos virtuales',
    slug: 'cursos-virtuales',
    serviceTypeId: 1,
  },
  {
    id: 5,
    name: 'Seminarios',
    slug: 'seminarios',
    serviceTypeId: 1,
  },
];

const newTicket = {
  id: null,
  serviceId: null,
  date: null,
  studentId: null,
  price: 0.0,
  date: null,
}

const newStudent = {
  id: null,
  firstName: '',
  lastName: '',
}

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  servicesCatalog,
  serviceTypes,
  newStudent,
  newTicket,
};
