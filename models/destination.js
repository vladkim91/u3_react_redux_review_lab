const { Schema } = require('mongoose');

const Destination = new Schema(
  {
    city: { type: String, require: true },
    country: { type: String, require: true },
    img: { type: Array, require: true },
    desc: { type: String, require: true }
  },
  { timestamps: true }
);

module.exports = Destination;
