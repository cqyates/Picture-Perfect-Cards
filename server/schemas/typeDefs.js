const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    savedPhotos: [Photo]
  }
  type Photo {
    _id: ID!
    photoId: Int!
    alt: String!
    lgSrc: String!
    medSrc: String!
    orgSrc: String!
    photographer: String
    url: String!
    smSrc: String!
    xlSrc: String!
    createdAt: String
  }
  input PhotoInput {
    photoId: Int!
    alt: String!
    photographer: String
    smSrc: String!
    medSrc: String!
    orgSrc: String!
    lgSrc: String!
    xlSrc: String!
    url: String!
    createdAt: String
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
    removePhoto(photoId: ID!): User
  }
`;

module.exports = typeDefs;
