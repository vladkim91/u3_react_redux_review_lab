const { Schema } = require('mongoose');

const Review = new Schema(
  {
    username: { type: String, require: true },
    destination_id: { type: Schema.Types.ObjectId, ref: 'destinations' },
    review: { type: String, require: true }
  },
  { timestamps: true }
);

module.exports = Review;
