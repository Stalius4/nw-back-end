const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

   date: { type: String, default: Date } ,  
  timber_price: {
    type: Number ,
    default: "no price"
  },
  lumber_price: {
    type: Number ,
    default: "no price"
  },
  wyrdwoodplank_price: {
    type: Number ,
    default: "no price"
  },
  ironwoodplank_price: {
    type: Number ,
    default: "no price"
  },
  greenwood_price: {
    type: Number ,
    default: "no price"
  },
  agedwood_price: {
    type: Number ,
    default: "no price"
  },
 wyrdwood_price: {
    type: Number ,
    default: "no price"
  },
 ironwood_price: {
    type: Number ,
    default: "no price"
  },
  sandpaper_price: {
    type: Number ,
    default: "no price"
  },
//   rarity: {
//     type: String,
   
//     unique: false,
//   },
//   itemType: {
//     type: String,
  
//     unique: false,
//   }, 
//   icon: {
//     type: String,
   
//   },
//   name: {
//     type: String,
  
//   },
//  tear: {
//     type: Number,
   
//   },
});

const Woodwork = mongoose.model("Woodwork", userSchema);

module.exports = Woodwork;


  
