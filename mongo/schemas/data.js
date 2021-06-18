/**
 * Modelling the playlist
 */

 const mongoose = require('mongoose');

 const DataSchema = new mongoose.Schema({
   text: String,
   title: String,
   description: String,
   imgURL: String,
   category: String,
   dataLi: String,
   addedOn: Date,
   editedOn: Date,
   prevQuestionLi: String
 });
 
 module.exports = DataSchema;