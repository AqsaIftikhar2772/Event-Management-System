import { City, Plus } from "../models/citty.js";
import SearchCount from "../models/mostSearchModal.js";
import Product from "../models/prodModel.js";

export const add_venue = async (req, res) => {
  try {
    const {
      title,
      city,
      price,
      plusPoint,
      kanal,
      images,
      bath,
      parking,
      rooms,
      bridal,
    } = req.body;

    // Check if required fields are present
    if (!title || !city || !price || !plusPoint) {
      return res.status(400).json({
        success: false,
        message: "Title, city, price, and plusPoint are required fields",
      });
    }

    // Check if the city already exists
    let existCity = await City.findOne({ city: city });

    // Check if the plus point already exists
    let existPlus = await Plus.findOne({
      plusPoint: plusPoint,
      city: existCity ? existCity._id : null,
    });

    // If the city does not exist, create a new one
    if (!existCity) {
      const newCity = await City.create({ city: city });
      existCity = newCity;
    }

    // If the plus point does not exist, create a new one
    if (!existPlus) {
      const newPlus = await Plus.create({
        plusPoint: plusPoint,
        city: existCity._id,
      });
      existPlus = newPlus;
    }

    // Create the new venue
    const newVenue = await Product.create({
      title,
      city: existCity._id,
      price,
      plusPoint: existPlus._id,
      kanal,
      images,
      bath,
      parking,
      rooms,
      bridal,
    });

    // Return the created venue
    return res.status(201).json({
      success: true,
      data: newVenue,
    });
  } catch (error) {
    // Handle errors
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal server error",
    });
  }
};

export const exploreVenue = async (req, res) => {
  try {
    const { city, plus } = req.params;

    // Check if the city exists
    const existCity = await City.findOne({ city: city });
    if (!existCity) {
      return res.status(404).json({
        success: false,
        message: "No venue here right now",
      });
    }

    // Check if the plus point exists
    const existPlus = await Plus.findOne({
      plusPoint: plus,
      city: existCity._id,
    });
    if (!existPlus) {
      return res.status(404).json({
        success: false,
        message: "No venue here right now",
      });
    }

    // Find venues with the specified city and plus point
    const findVenue = await Product.find({
      city: existCity._id,
      plusPoint: existPlus._id,
    });

    for (const venue of findVenue) {
      await SearchCount.findOneAndUpdate(
        { venue: venue._id },
        { $inc: { count: 1 } },
        { upsert: true }
      );
    }


    // Return the found venues
    return res.status(200).json({
      success: true,
      length: findVenue.length,
      data: findVenue,
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal server error",
    });
  }
};

export const fetchCities = async (req, res) => {
  try {
    const cities = await City.find();
    if (!cities) {
      return res.status(200).json({
        success: true,
        message: "no city added yet",
      });
    }
    return res.status(200).json({
      success: true,
      data: cities,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal server error",
    });
  }
};

export const fetchPlus = async (req, res) => {
  try {
    const city = req.params.city;
    const existCity = await City.findOne({ city: city });
    if (existCity) {
      const plus = await Plus.find({ city: existCity._id });
      if (plus) {
        return res.status(200).json({
          success: true,
          data: plus,
        });
      } else {
        return res.status(200).json({
          success: true,
          message: "no plusPoints added yet",
        });
      }
    } else {
      return res.status(200).json({
        success: false,
        message: "no city added yet",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal server error",
    });
  }
};

export const getMostSearchedVenues = async (req, res) => {
  try {
    const mostSearchedVenues = await SearchCount.find()
      .sort({ count: -1 })
      .limit(10)
      .populate({
        path: 'venue',
        populate: {
          path: 'plusPoint',
          populate: {
            path: 'city'
          }
        }
      });

    return res.status(200).json({
      success: true,
      length: mostSearchedVenues.length,
      data: mostSearchedVenues,
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal server error",
    });
  }
};

