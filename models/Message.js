const mongoose = require('mongoose') 

const MessageSchema = mongoose.Schema ({
    name : String ,
    email : String ,
    subject : String ,
    body : String ,
    created_at: {
        type : Date , 
        default : Date.now 
    }
})

module.exports = mongoose.model("Message", MessageSchema)