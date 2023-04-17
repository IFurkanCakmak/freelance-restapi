import mongoose from 'mongoose';
const { Schema } = mongoose;

const messageSchema = new Schema({

    conversationId:{
        typeof:String,
        required:true
    },

    userId:{
        typeof:String,
        required:true
    },

    desc:{
        typeof:String,
        required:true
    },


},
{
    timestamps:true
});


export default mongoose.model("Message", messageSchema)