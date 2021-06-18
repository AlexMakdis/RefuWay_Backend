/**
 * Modelling the playlist
 */

 const mongoose = require('mongoose');

 const AnswerSchema = new mongoose.Schema({
   text: String,
   imgURL: String,
   answerLi: String,
   nextQuestionId: String,
   conclusionId: String,
   addedOn: Date,
   editedOn: Date
 });
 
 module.exports = AnswerSchema;