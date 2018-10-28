var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const CharacterSchema = new Schema({
  // `title` is required and of type String
  name: {
    type: String,
    required: true, 
    unique: true,
  },
  // `link` is required and of type String
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
  }


});

const Character = mongoose.model("Character", CharacterSchema);


// Export the Article model
module.exports = Character;
