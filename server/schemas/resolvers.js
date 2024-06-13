const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');

        return userData;
      }

      throw AuthenticationError;
    },
     //tested succesfully from Apollo Server
    users: async (parent, args, context) => {
      return User.find({})
    },
    
  },
  Mutation: {
    //tested succesfully from Apollo Server
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
     //tested succesfully from Apollo Server
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
    savePhoto: async (parent, {photoData}, context) => {
      //must be signed in
      if (context.user) {
        const userData = await User.findOneAndUpdate({ _id: context.user._id }, {$push: {savedPhotos: photoData }}, {new: true, runValidators: true})
        
        return userData
      }

      throw AuthenticationError;
    },
    removePhoto: async (parent, { photoId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedPhotos: { photoId } } },
          { new: true }
        );

        return updatedUser;
      }

      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
