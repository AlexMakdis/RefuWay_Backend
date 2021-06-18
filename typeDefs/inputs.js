/**
 * The GraphQL inputs
 */

const  { gql } = require('apollo-server');

module.exports = gql`
  input AnswerInput {
    text: String,
    answerLi: String,
    nextQuestionId: String,
    conclusionId: String,
  }
  input QuestionInput {
    text: String
    imgURL: String
    category: Category
    questionLi: String
    prevQuestionLi: String
    answers: [AnswerInput]
  }
  input QuestionUpdateInput {
    text: String
    imgURL: String
    category: Category
    questionLi: String
    prevQuestionLi: String
    answers: [AnswerInput]
  }
  input OrganisationInput {
    text: String,
    title: String,
    description: String,
    imgURL: String,
    category: Category,
    organisationLi: String,
    longitude: String,
    latitude: String,
  }
  input OrganisationUpdateInput {
    text: String,
    title: String,
    description: String,
    imgURL: String,
    category: Category,
    organisationLi: String,
    longitude: String,
    latitude: String,
  }

  input DataInput {
    text: String,
    title: String,
    description: String,
    imgURL: String,
    category: Category,
    dataLi: String,
    prevQuestionLi: String
  }
  input DataUpdateInput {
    text: String,
    title: String,
    description: String,
    imgURL: String,
    category: Category,
    dataLi: String,
    prevQuestionLi: String
  }

  input UserInput {
    email: String
    password: String
  }
`