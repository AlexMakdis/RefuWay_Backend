/**
 * The GraphQL mutations
 */

const  { gql } = require('apollo-server');

module.exports = gql`
  type Mutation {
    addQuestion(question: QuestionInput):Question
    updateQuestion(questionId: ID, question: QuestionUpdateInput):Question
    deleteQuestion(questionId:ID):Question
    addData(data: DataInput):Data
    updateData(dataId: ID, data: DataUpdateInput):Data
    deleteData(dataId:ID):Data
    addOrganisation(organisation: OrganisationInput):Organisation
    updateOrganisation(organisationId: ID, organisation: OrganisationUpdateInput):Organisation
    deleteOrganisation(organisationId:ID):Organisation
    register(user: UserInput):User
  }
`