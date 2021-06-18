/**
 * Importing mongoose
 */

const mongoose = require('mongoose');

/**
 * Importing schemas
 */

const QuestionSchema = require('./schemas/question');
const AnswerSchema = require('./schemas/answer');
const DataSchema = require('./schemas/data');
const OrganisationSchema = require('./schemas/organisation');
const UserSchema = require('./schemas/user');

/**
 * Creating mongoose models
 */

const Question = mongoose.model('Question', QuestionSchema);
const Answer = mongoose.model('Answer', AnswerSchema);
const Data = mongoose.model('Data', DataSchema);
const Organisation = mongoose.model('Organisation', OrganisationSchema);
const User = mongoose.model('User', UserSchema);

/**
 * Exporting the models
 */

module.exports = {
  Question,
  Organisation,
  Answer,
  Data,
  User
}