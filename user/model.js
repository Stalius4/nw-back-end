const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  card_holder: {
    type: String,
    required: true,
    unique: true,
  },
  card_number: {
    type: Number,
    required: true,
    unique: true,
  }, 
  expmm: {
    type: Number,
    required: true,
    
  },  
  expyy: {
    type: Number,
    required: true,
  },
  cvc: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model("Consumable", userSchema);

module.exports = User;