
const Collection = require('../models/Collection');

// @desc    Get all collections
// @route   GET /api/v1/collections
// @access  Public
exports.getCollections = async (req, res) => {
  try {
    let query = Collection.find({ isPublic: true }).populate({
      path: 'user',
      select: 'name avatar'
    }).populate('photos', 'imageUrl title');
    
    // Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await Collection.countDocuments({ isPublic: true });
    
    query = query.skip(startIndex).limit(limit);
    
    // Executing query
    const collections = await query;
    
    // Pagination result
    const pagination = {};
    
    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit
      };
    }
    
    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit
      };
    }
    
    res.status(200).json({
      success: true,
      count: collections.length,
      pagination,
      data: collections
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Get featured collections
// @route   GET /api/v1/collections/featured
// @access  Public
exports.getFeaturedCollections = async (req, res) => {
  try {
    const collections = await Collection.find({ featured: true, isPublic: true })
      .populate({
        path: 'user',
        select: 'name avatar'
      })
      .limit(4);
    
    res.status(200).json({
      success: true,
      count: collections.length,
      data: collections
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Get single collection
// @route   GET /api/v1/collections/:id
// @access  Public/Private
exports.getCollection = async (req, res) => {
  try {
    const collection = await Collection.findById(req.params.id)
      .populate({
        path: 'user',
        select: 'name avatar'
      })
      .populate('photos');
    
    if (!collection) {
      return res.status(404).json({
        success: false,
        error: 'Collection not found'
      });
    }
    
    // Check if collection is private and if user is authorized to view it
    if (!collection.isPublic && 
        (!req.user || 
         (collection.user.toString() !== req.user.id && 
          req.user.role !== 'admin'))) {
      return res.status(403).json({
        success: false,
        error: 'Not authorized to view this private collection'
      });
    }
    
    res.status(200).json({
      success: true,
      data: collection
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Create new collection
// @route   POST /api/v1/collections
// @access  Private
exports.createCollection = async (req, res) => {
  try {
    // Add user to req.body
    req.body.user = req.user.id;
    
    const collection = await Collection.create(req.body);
    
    res.status(201).json({
      success: true,
      data: collection
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Update collection
// @route   PUT /api/v1/collections/:id
// @access  Private
exports.updateCollection = async (req, res) => {
  try {
    let collection = await Collection.findById(req.params.id);
    
    if (!collection) {
      return res.status(404).json({
        success: false,
        error: 'Collection not found'
      });
    }
    
    // Make sure user is collection owner
    if (collection.user.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({
        success: false,
        error: 'Not authorized to update this collection'
      });
    }
    
    collection = await Collection.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    
    res.status(200).json({
      success: true,
      data: collection
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Delete collection
// @route   DELETE /api/v1/collections/:id
// @access  Private
exports.deleteCollection = async (req, res) => {
  try {
    const collection = await Collection.findById(req.params.id);
    
    if (!collection) {
      return res.status(404).json({
        success: false,
        error: 'Collection not found'
      });
    }
    
    // Make sure user is collection owner
    if (collection.user.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({
        success: false,
        error: 'Not authorized to delete this collection'
      });
    }
    
    await collection.remove();
    
    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Add photo to collection
// @route   PUT /api/v1/collections/:id/photos
// @access  Private
exports.addPhotoToCollection = async (req, res) => {
  try {
    const collection = await Collection.findById(req.params.id);
    
    if (!collection) {
      return res.status(404).json({
        success: false,
        error: 'Collection not found'
      });
    }
    
    // Make sure user is collection owner
    if (collection.user.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({
        success: false,
        error: 'Not authorized to update this collection'
      });
    }
    
    const photoId = req.body.photoId;
    
    // Check if photo is already in collection
    if (collection.photos.includes(photoId)) {
      return res.status(400).json({
        success: false,
        error: 'Photo is already in this collection'
      });
    }
    
    collection.photos.push(photoId);
    await collection.save();
    
    res.status(200).json({
      success: true,
      data: collection
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Remove photo from collection
// @route   DELETE /api/v1/collections/:id/photos/:photoId
// @access  Private
exports.removePhotoFromCollection = async (req, res) => {
  try {
    const collection = await Collection.findById(req.params.id);
    
    if (!collection) {
      return res.status(404).json({
        success: false,
        error: 'Collection not found'
      });
    }
    
    // Make sure user is collection owner
    if (collection.user.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({
        success: false,
        error: 'Not authorized to update this collection'
      });
    }
    
    // Check if photo is in collection and remove it
    const photoIndex = collection.photos.indexOf(req.params.photoId);
    if (photoIndex === -1) {
      return res.status(400).json({
        success: false,
        error: 'Photo is not in this collection'
      });
    }
    
    collection.photos.splice(photoIndex, 1);
    await collection.save();
    
    res.status(200).json({
      success: true,
      data: collection
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
