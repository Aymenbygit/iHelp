const mongoose = require('mongoose') 

const PostSchema = mongoose.Schema ({
    owner : {
        type : mongoose.Types.ObjectId , 
        ref : "User"
    }, 
    title : String , 
    description : String ,
    comments : {
        type : Array ,
        default:[]
    }, 
    created_at: {
        type : Date , 
        default : Date.now 
    }
})

module.exports = mongoose.model("Post", PostSchema)