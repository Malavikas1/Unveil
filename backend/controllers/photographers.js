
const User = require('../models/User');
const Portfolio = require('../models/Portfolio');

// @desc    Get all photographers
// @route   GET /api/v1/photographers
// @access  Public
exports.getPhotographers = async (req, res) => {
  try {
    const photographers = await User.find({ role: 'photographer' })
      .select('name avatar bio location website social')
      .populate('portfolios');
    
    res.status(200).json({
      success: true,
      count: photographers.length,
      data: photographers
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Get featured photographers
// @route   GET /api/v1/photographers/featured
// @access  Public
exports.getFeaturedPhotographers = async (req, res) => {
  try {
    // Get photographers who have portfolios with high ratings
    const portfolios = await Portfolio.find({ averageRating: { $gte: 4 } })
      .populate({
        path: 'user',
        select: 'name avatar bio location website social',
        match: { role: 'photographer' }
      })
      .limit(6);
    
    // Extract unique photographers from portfolios
    const photographersMap = new Map();
    portfolios.forEach(portfolio => {
      if (portfolio.user) {
        photographersMap.set(portfolio.user._id.toString(), portfolio.user);
      }
    });
    
    const featuredPhotographers = Array.from(photographersMap.values());
    
    res.status(200).json({
      success: true,
      count: featuredPhotographers.length,
      data: featuredPhotographers
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Get single photographer
// @route   GET /api/v1/photographers/:id
// @access  Public
exports.getPhotographer = async (req, res) => {
  try {
    const photographer = await User.findOne({
      _id: req.params.id,
      role: 'photographer'
    }).populate('portfolios');
    
    if (!photographer) {
      return res.status(404).json({
        success: false,
        error: 'Photographer not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: photographer
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Get photographer works
// @route   GET /api/v1/photographers/:id/works
// @access  Public
exports.getPhotographerWorks = async (req, res) => {
  try {
    const portfolios = await Portfolio.find({ user: req.params.id })
      .populate('photos');
    
    if (!portfolios) {
      return res.status(404).json({
        success: false,
        error: 'No portfolios found'
      });
    }
    
    res.status(200).json({
      success: true,
      count: portfolios.length,
      data: portfolios
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
