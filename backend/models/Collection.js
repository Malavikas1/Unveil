
const mongoose = require('mongoose');

const CollectionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
      trim: true,
      maxlength: [100, 'Name cannot be more than 100 characters']
    },
    description: {
      type: String,
      maxlength: [500, 'Description cannot be more than 500 characters']
    },
    coverImage: {
      type: String,
      default: 'no-photo.jpg'
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true
    },
    photos: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Photo'
      }
    ],
    isPublic: {
      type: Boolean,
      default: true
    },
    tags: [String],
    featured: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Collection', CollectionSchema);
