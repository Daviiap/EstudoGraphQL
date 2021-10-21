const users = [
  { id: 1, name: "Davi Andrade", email: "davi@email.com" },
  { id: 2, name: "Aline Gruppi", email: "aline@email.com" },
];

export const Resolvers = {
  Query: {
    users: () => users,
    user: (_: any, query: any) => {
      const { id } = query;
      return users.find((user) => user.id == id);
    },
  },

  Mutation: {
    createUser: () => {},
  },
};
