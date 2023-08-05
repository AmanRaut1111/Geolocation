const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },

  phoneNumber:{
    type:String,
    required:true
  },
  city:{
    type:String
  },
  
  location: {type: Object, required: true},
  
  
});



userModel.index({ location: '2dsphere' });



module.exports= mongoose.model('uses', userModel);
