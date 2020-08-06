const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    isbn: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'Author',
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
