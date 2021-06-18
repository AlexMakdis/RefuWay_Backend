/**
 * The GraphQL queries
 */

const  { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    questions:[Question]
    questionById(id:ID!):Question
    questionByCategory(category:Category):[Question]

    data:[Data]
    dataById(id:ID!):Data
    dataByCategory(category:Category):[Data]

    organisations:[Organisation]
    organisationById(id:ID!):Organisation
    organisationByCategory(category:Category):[Organisation]
    login(user: UserInput):AuthData
    users:[User]
    user(id:ID):User
  }
`