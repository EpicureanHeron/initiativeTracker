var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const CharacterSchema = new Schema({

  name: {
    type: String,
    required: true, 
    unique: true,
  },

  dex: {
    type: Number,
    required: true
  },

  currentInitRoll: {
   type: Number,
   default: 0 
  },

  image: { 
    type: String, 
    
    required: true
  },

   player: {
     type: String,
     required: true
  },

  status: {
     type: Boolean,
     required: true,
     default: true
  },

  active: {
    type: Boolean,
    required: true,
    default: false
  },
  campaign: {
    type: String,
    required: true
  }


});

const Character = mongoose.model("Character", CharacterSchema);


// Export the Article model
module.exports = Character;
