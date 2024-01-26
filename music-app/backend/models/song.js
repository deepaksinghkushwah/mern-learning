const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "Please add title"],
  },

  description: {
    type: String,
    required: [true, "Please add an description"],    
  },
  file: {
    type: String,    
  },  
  image: {
    type: String,    
  },  
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
},{
  toJSON: {virtuals: true},
  toObject: {virtuals: true}
});

// Duplicate the ID field.
SongSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
SongSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model("Song", SongSchema);
