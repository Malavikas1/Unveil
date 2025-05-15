
const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
      trim: true,
      maxlength: [100, 'Title cannot be more than 100 characters']
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
      maxlength: [1000, 'Description cannot be more than 1000 characters']
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
    category: {
      type: String,
      required: [true, 'Please select a category'],
      enum: [
        'Portrait',
        'Landscape',
        'Wildlife',
        'Macro',
        'Street',
        'Architecture',
        'Fashion',
        'Sports',
        'Travel',
        'Wedding',
        'Event',
        'Commercial',
        'Abstract',
        'Black and White',
        'Documentary',
        'Other'
      ]
    },
    tags: [String],
    featured: {
      type: Boolean,
      default: false
    },
    averageRating: {
      type: Number,
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating cannot be more than 5']
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Reverse populate with photos
PortfolioSchema.virtual('photos', {
  ref: 'Photo',
  localField: '_id',
  foreignField: 'portfolio',
  justOne: false
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);
