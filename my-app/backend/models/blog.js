const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  likes: {
    type: Number,
    default: 0,
  },
});

blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    const updatedObject = {
      ...returnedObject,
      id: returnedObject._id.toString(),
    };
    delete updatedObject._id;
    delete updatedObject.__v;

    return updatedObject;
  },
});

module.exports = mongoose.model('Blog', blogSchema);
