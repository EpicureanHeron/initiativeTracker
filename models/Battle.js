var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const BattleSchema = new Schema({
  // `title` is required and of type String
  turnNumber: {
    type: Number,
    required: true,
    default: 1
  },
  // `link` is required and of type String
 
   //this may not need to be a string 
   playerCharacters : [{ type : Schema.Types.ObjectId, ref: 'Character' }],

   

});

const Battle = mongoose.model("Battle", BattleSchema);


// Export the Article model
module.exports = Battle;
