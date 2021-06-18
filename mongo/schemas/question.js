/**
 * Modelling the playlist
 */

const mongoose = require('mongoose');

const AnswerSchema = require('./answer');

const QuestionSchema = new mongoose.Schema({
  text: String,
  imgURL: String,
  category: String,
  answers: [AnswerSchema],
  addedOn: Date,
  editedOn: Date,
  questionLi: String,
  prevQuestionLi: String
});

module.exports = QuestionSchema;