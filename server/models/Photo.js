const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const photoSchema = new Schema(
  {
    photoId: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    }
  },
  {
    toJSON: {
      getters: true
    },
    id: true
  }
);

module.exports = photoSchema;
