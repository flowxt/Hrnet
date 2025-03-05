export const generateEmployees = (count) => {
  const departments = [
    "Ventes",
    "Marketing",
    "RH",
    "IT",
    "Finance",
    "R&D",
    "Support",
  ];
  const firstNames = [
    "Jean",
    "Marie",
    "Pierre",
    "Sophie",
    "Lucas",
    "Emma",
    "Thomas",
    "Julie",
  ];
  const lastNames = [
    "Martin",
    "Bernard",
    "Dubois",
    "Robert",
    "Richard",
    "Petit",
    "Durand",
  ];
  const cities = [
    "Paris",
    "Lyon",
    "Marseille",
    "Bordeaux",
    "Lille",
    "Toulouse",
    "Nantes",
  ];
  const states = ["IDF", "PACA", "HDF", "NAQ", "ARA", "OCC", "BRE"];

  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
    lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
    startDate: new Date(
      2020 + Math.floor(Math.random() * 4),
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1
    ).toISOString(),
    department: departments[Math.floor(Math.random() * departments.length)],
    dateOfBirth: new Date(
      1970 + Math.floor(Math.random() * 30),
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1
    ).toISOString(),
    street: `${Math.floor(Math.random() * 100) + 1} rue ${
      lastNames[Math.floor(Math.random() * lastNames.length)]
    }`,
    city: cities[Math.floor(Math.random() * cities.length)],
    state: states[Math.floor(Math.random() * states.length)],
    zipCode: String(Math.floor(Math.random() * 90000) + 10000),
  }));
};
