/**
 * The Query Resolvers
 */

const { Question, Organisation, Data, User } = require('../mongo/models.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { AuthenticationError } = require('apollo-server');



module.exports = {
  Query: {
    questions: () => Question.find(),
    questionById: (parent, { id }) => Question.findOne({ _id: id }),
    questionByCategory: (parent, { category }) => Question.find({ category: category }),

    data: () => Data.find(),
    dataById: (parent, { id }) => Data.findOne({ _id: id }),
    dataByCategory: (parent, { category }) => Data.find({ category: category }),

    login: async (parent, { user }, context) => {
      // destructure the user
      const { email, password } = user;

      // validate if the user exists
      const userExists = await User.exists({ email });
      if(!userExists) throw new Error('User does not exist.');

      // get the user
      const foundUser = await User.findOne({ email: email });

      // check if incoming password is equal
      const isEqual = bcrypt.compareSync(password, foundUser.password);
      if(!isEqual) throw new Error('Password is incorrect.');

      // create the webtoken
      const token = jwt.sign(
        { userId: foundUser._id, email: foundUser.email },
        process.env.TOKEN_SALT,
        { expiresIn: '1h' }
      );

      // return the auth data
      return {
        userId: foundUser.id,
        token
      }
    },

    organisations: () => Organisation.find(),

    organisationById: (parent, { id }) => Organisation.findOne({ _id: id }),
    organisationByCategory: (parent, { category }) => Organisation.find({ category: category })

  },
}