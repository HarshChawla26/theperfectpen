import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema({
    website_name:{
        type:String
    },
    owner_name:{
        type:String
    },
    owner_email:{
        type:String
    },
    about:{
        type:Object
    },
    home_images:{
        type:Array
    },
    display_images:{
        type:Array
    },
    tos:{
        type:String
    },
    services:{
        type:Array
    }
});

const admin = mongoose.models.users || mongoose.model('users',adminSchema);

export default admin;