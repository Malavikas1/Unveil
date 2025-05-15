
const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Please add comment text'],
      maxlength: [500, 'Comment cannot be more than 500 characters']
    },
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    photo: {
      type: mongoose.Schema.ObjectId,
      ref: 'Photo',
      required: true
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true
  }
);

// Static method to calculate average rating
CommentSchema.statics.getAverageRating = async function(photoId) {
  const obj = await this.aggregate([
    {
      $match: { photo: photoId }
    },
    {
      $group: {
        _id: '$photo',
        averageRating: { $avg: '$rating' }
      }
    }
  ]);

  try {
    if (obj[0]) {
      await this.model('Photo').findByIdAndUpdate(photoId, {
        averageRating: obj[0].averageRating.toFixed(1)
      });
    }
  } catch (err) {
    console.error(err);
  }
};

// Call getAverageRating after save
CommentSchema.post('save', function() {
  this.constructor.getAverageRating(this.photo);
});

// Call getAverageRating before remove
CommentSchema.pre('remove', function() {
  this.constructor.getAverageRating(this.photo);
});

module.exports = mongoose.model('Comment', CommentSchema);
