const mongoose = require("mongoose")
mongoose.set("debug",true)
mongoose.Promise = Promise
mongoose.connect(process.env.MONGOLAB_GRAY_URI ||"mongodb://localhost/warbler",{
   keepAlive:true,
  
})

module.exports.User = require("./users")
module.exports.Message = require("./message")