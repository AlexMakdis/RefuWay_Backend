/**
 * Modelling the playlist
 */

 const mongoose = require('mongoose');

 const OrganisationSchema = new mongoose.Schema({
   text: String,
   title: String,
   description: String,
   imgURL: String,
   category: String,
   organisationLi: String,
   longitude: String,
   latitude: String,
   addedOn: Date,
   editedOn: Date
 });
 
 module.exports = OrganisationSchema;