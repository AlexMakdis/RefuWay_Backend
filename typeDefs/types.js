/**
 * The GraphQL types
 */

const  { gql } = require('apollo-server');

module.exports = gql`
  scalar Date

  enum Category {
    WORK
    HOUSE
    LANGUAGE
    CULTURE
  }
  type Answer {
    id: ID!
    text: String,
    imgURL: String,
    answerLi: String,
    nextQuestionId: String,
    conclusionId: String,
    addedOn: Date,
    editedOn: Date
  }
  type Question {
    id: ID!
    text: String
    imgURL: String
    addedOn: Date
    editedOn: Date
    category: Category
    questionLi: String
    prevQuestionLi: String
    answers: [Answer]
  }
  type Data {
    id: ID!
    text: String,
    title: String,
    description: String,
    imgURL: String,
    category: Category,
    dataLi: String,
    addedOn: Date,
    editedOn: Date,
    prevQuestionLi: String
  }
  type Organisation {
    id: ID!
    text: String,
    title: String,
    description: String,
    imgURL: String,
    category: Category,
    organisationLi: String,
    longitude: String,
    latitude: String,
    addedOn: Date,
    editedOn: Date
  }

  type AuthData {
    userId: ID
    token: String
  }

  type User {
    id: ID
    email: String
    password: String
  }
`