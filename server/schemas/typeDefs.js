const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    savedPhotos: [Photo]
  }
  type Photo {
    _id: ID!
    photoId: String!
    createdAt: String
  }
  input PhotoInput {
    photoId: String!
  }
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me:User
    users:[User]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    savePhoto(photoData: PhotoInput): User
  }
`;

module.exports = typeDefs;
