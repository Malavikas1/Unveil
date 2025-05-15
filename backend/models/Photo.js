
const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
      trim: true,
      maxlength: [100, 'Title cannot be more than 100 characters']
    },
    description: {
      type: String,
      maxlength: [500, 'Description cannot be more than 500 characters']
    },
    imageUrl: {
      type: String,
      required: [true, 'Please upload an image']
    },
    portfolio: {
      type: mongoose.Schema.ObjectId,
      ref: 'Portfolio',
      required: true
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true
    },
    camera: String,
    lens: String,
    focalLength: String,
    shutterSpeed: String,
    aperture: String,
    iso: String,
    location: String,
    takenAt: Date,
    tags: [String],
    likes: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
      }
    ],
    featured: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Reverse populate with comments
PhotoSchema.virtual('comments', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'photo',
  justOne: false
});

// Index for better search performance
PhotoSchema.index({ title: 'text', description: 'text', tags: 'text' });

module.exports = mongoose.model('Photo', PhotoSchema);
