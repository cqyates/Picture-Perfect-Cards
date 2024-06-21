const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const photoSchema = new Schema(
  {
    photoId: {
      type: Number,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    photographer: {
      type: String,
    },
    smSrc: {
      type: String,
      required: true
    },
    medSrc: {
      type: String,
      required: true
    },
    orgSrc: {
      type: String,
      required: true
    },
    lgSrc: {
      type: String,
      required: true
    },  
    xlSrc: {
      type: String,
      required: true
    },
    url: {
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
    id: false
  }
);

module.exports = photoSchema;
