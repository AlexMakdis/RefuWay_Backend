/**
 * The Mutation Resolvers
 */

const { Question, Data, Organisation, User } = require('../mongo/models');
const { ApolloError, AuthenticationError } = require('apollo-server');
const pubsub = require('./pubsub');
const bcrypt = require('bcrypt');
const cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

module.exports = {
  Mutation: {
    addQuestion: async (parent, { question }, context) => {
      try {

        return await Question.create({
          ...question,
          addedOn: new Date(),
        });
      } catch(e) {
        if(e.extensions.code === 'UNAUTHENTICATED') throw e;
        else throw new ApolloError(e.message);
      }
    },
    updateQuestion: async (parent, { questionId, question }, context) =>{
      try {
        const questionExists = await Question.exists({ _id: questionId });
        if(!questionExists) throw new ApolloError("No question found?") 
        else{
          return await Question.findOneAndUpdate(
            {
              _id: questionId
            },
            {
              ...question,
              editedOn: new Date()
            }, {new: true}
          )
        };
      } catch(e) {
        if(e.extensions.code === 'UNAUTHENTICATED') throw e;
        else throw new ApolloError(e.message);
      }
    },
    deleteQuestion: async (parent, { questionId }, context) =>{
      try {
        const questionExists = await Question.exists({ _id: questionId });
        if(!questionExists) throw new ApolloError("No question found?") 
        else{
          return await Question.findOneAndDelete(
            {
              _id: questionId
            }
          )
        };
      } catch(e) {
        if(e.extensions.code === 'UNAUTHENTICATED') throw e;
        else throw new ApolloError(e.message);
      }
    },
  
    addData: async (parent, { data }, context) => {
      try {

        return await Data.create({
          ...data,
          addedOn: new Date(),
        });
      } catch(e) {
        if(e.extensions.code === 'UNAUTHENTICATED') throw e;
        else throw new ApolloError(e.message);
      }
    },
    updateData: async (parent, { dataId, data }, context) =>{
      try {
        const dataExists = await Data.exists({ _id: dataId });
        if(!dataExists) throw new ApolloError("No data found?") 
        else{
          return await Data.findOneAndUpdate(
            {
              _id: dataId
            },
            {
              ...data,
              editedOn: new Date()
            }, {new: true}
          )
        };
      } catch(e) {
        if(e.extensions.code === 'UNAUTHENTICATED') throw e;
        else throw new ApolloError(e.message);
      }
    },
    deleteData: async (parent, { dataId }, context) =>{
      try {
        const dataExists = await Data.exists({ _id: dataId });
        if(!dataExists) throw new ApolloError("No data found?") 
        else{
          return await Data.findOneAndDelete(
            {
              _id: dataId
            }
          )
        };
      } catch(e) {
        if(e.extensions.code === 'UNAUTHENTICATED') throw e;
        else throw new ApolloError(e.message);
      }
    },
 
    addOrganisation: async (parent, { organisation }, context) => {
      try {

        return await Organisation.create({
          ...organisation,
          addedOn: new Date(),
        });
      } catch(e) {
        if(e.extensions.code === 'UNAUTHENTICATED') throw e;
        else throw new ApolloError(e.message);
      }
    },
    updateOrganisation: async (parent, { organisationId, organisation }, context) =>{
      try {
        const organisationExists = await Organisation.exists({ _id: organisationId });
        if(!organisationExists) throw new ApolloError("No organisation found?") 
        else{
          return await Organisation.findOneAndUpdate(
            {
              _id: organisationId
            },
            {
              ...organisation,
              editedOn: new Date()
            }, {new: true}
          )
        };
      } catch(e) {
        if(e.extensions.code === 'UNAUTHENTICATED') throw e;
        else throw new ApolloError(e.message);
      }
    },
    deleteOrganisation: async (parent, { organisationId }, context) =>{
      try {
        const organisationExists = await Organisation.exists({ _id: organisationId });
        if(!organisationExists) throw new ApolloError("No organisation found?") 
        else{
          return await Organisation.findOneAndDelete(
            {
              _id: organisationId
            }
          )
        };
      } catch(e) {
        if(e.extensions.code === 'UNAUTHENTICATED') throw e;
        else throw new ApolloError(e.message);
      }
    },

    register: async (parent, { user }) => {
      // destructure user
      const { email, password } = user;

      // validate if the user exists
      const userExists = await User.exists({ email });
      if(userExists) throw new Error('User already exists.')

      // create hash
      const hashedPassword = bcrypt.hashSync(password, 12);

      // create new user
      const newUser = await User.create({
        email,
        password: hashedPassword
      });

      // reset the password for security issues
      newUser.password = null;

      // return the user
      return newUser;
    }
  }
}