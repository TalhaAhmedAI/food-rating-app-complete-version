const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: String,
  item_1: {name: String, rating: {type: Number, required: true}},
  item_2: {name: String, rating: Number},
  item_3: {name: String, rating: Number},
  item_4: {name: String, rating: Number},
});

mongoose.model("Restaurant", restaurantSchema);